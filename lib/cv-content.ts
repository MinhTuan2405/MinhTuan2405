import fs from "node:fs"
import path from "node:path"

import type {
  AboutContent,
  CVContent,
  EducationContent,
  ExperienceContent,
  FooterContent,
  HeaderContent,
  ProjectsContent,
  SidebarContent,
  SkillsContent,
} from "./cv-content-types"

const contentsDirectory = path.join(process.cwd(), "contents")

interface MarkdownSection {
  title: string
  body: string
}

interface KeyValueEntry {
  label: string
  value: string
}

export function getCVContent(): CVContent {
  return {
    header: parseHeader(),
    sidebar: parseSidebar(),
    about: parseAbout(),
    education: parseEducation(),
    skills: parseSkills(),
    experience: parseExperience(),
    projects: parseProjects(),
    footer: parseFooter(),
  }
}

function parseHeader(): HeaderContent {
  const markdown = readMarkdown("header.md")
  const fields = parseKeyValueMap(introAfterTitle(markdown))

  return {
    name: field(fields, "Name"),
    title: field(fields, "Title"),
    tagline: field(fields, "Tagline"),
  }
}

function parseSidebar(): SidebarContent {
  const markdown = readMarkdown("sidebar.md")
  const fields = parseKeyValueMap(introAfterTitle(markdown))
  const contactFields = parseKeyValueMap(findSection(markdown, 2, "Contact"))

  return {
    brand: field(fields, "Brand"),
    navItems: parseKeyValueEntries(findSection(markdown, 2, "Navigation")).map((item) => ({
      id: item.label,
      label: item.value,
    })),
    contact: {
      location: field(contactFields, "Location"),
      phone: field(contactFields, "Phone"),
      email: field(contactFields, "Email"),
      linkedin: field(contactFields, "LinkedIn"),
      github: field(contactFields, "GitHub"),
    },
  }
}

function parseAbout(): AboutContent {
  const markdown = readMarkdown("about.md")

  return {
    title: titleFromMarkdown(markdown, "About"),
    paragraphs: splitParagraphs(introAfterTitle(markdown)),
    metrics: parseKeyValueEntries(findSection(markdown, 2, "Metrics")),
  }
}

function parseEducation(): EducationContent {
  const markdown = readMarkdown("education.md")

  return {
    title: titleFromMarkdown(markdown, "Education"),
    items: splitByHeading(markdown, 2).map((section) => {
      const fields = parseKeyValueMap(section.body)

      return {
        school: section.title,
        major: field(fields, "Major"),
        degree: field(fields, "Degree"),
        period: field(fields, "Period"),
        gpa: field(fields, "GPA"),
        language: field(fields, "Foreign Language"),
      }
    }),
  }
}

function parseSkills(): SkillsContent {
  const markdown = readMarkdown("skills.md")

  return {
    title: titleFromMarkdown(markdown, "Skills"),
    categories: splitByHeading(markdown, 2).map((section) => ({
      title: section.title,
      skills: parseListItems(section.body),
    })),
  }
}

function parseExperience(): ExperienceContent {
  const markdown = readMarkdown("experience.md")

  return {
    title: titleFromMarkdown(markdown, "Experience"),
    items: splitByHeading(markdown, 2).map((section) => {
      const fields = parseKeyValueMap(section.body)

      return {
        position: section.title,
        company: field(fields, "Company"),
        location: field(fields, "Location"),
        period: field(fields, "Period"),
        highlights: parseListItems(findSection(section.body, 3, "Highlights")),
      }
    }),
  }
}

function parseProjects(): ProjectsContent {
  const markdown = readMarkdown("projects.md")

  return {
    title: titleFromMarkdown(markdown, "Projects"),
    items: splitByHeading(markdown, 2).map((section) => {
      const fields = parseKeyValueMap(section.body)

      return {
        title: section.title,
        period: field(fields, "Period"),
        description: textFromBlock(findSection(section.body, 3, "Description")),
        technologies: parseListItems(findSection(section.body, 3, "Technologies")),
        outcome: textFromBlock(findSection(section.body, 3, "Outcome")),
        role: field(fields, "Role"),
        teamSize: field(fields, "Team size"),
        github: field(fields, "GitHub"),
      }
    }),
  }
}

function parseFooter(): FooterContent {
  const markdown = readMarkdown("footer.md")
  const fields = parseKeyValueMap(introAfterTitle(markdown))

  return {
    owner: field(fields, "Owner"),
    text: field(fields, "Text"),
    year: new Date().getFullYear(),
  }
}

function readMarkdown(fileName: string): string {
  const markdown = fs.readFileSync(path.join(contentsDirectory, fileName), "utf8")

  return markdown.replace(/^\uFEFF/, "").replace(/<!--[\s\S]*?-->/g, "").trim()
}

function titleFromMarkdown(markdown: string, fallback: string): string {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback
}

function introAfterTitle(markdown: string): string {
  const lines = markdown.split(/\r?\n/)
  const body: string[] = []
  let foundTitle = false

  for (const line of lines) {
    if (!foundTitle) {
      foundTitle = /^#\s+/.test(line)
      continue
    }

    if (/^##\s+/.test(line)) {
      break
    }

    body.push(line)
  }

  return body.join("\n").trim()
}

function splitByHeading(markdown: string, level: number): MarkdownSection[] {
  const headingPrefix = "#".repeat(level)
  const headingRegex = new RegExp(`^${headingPrefix}\\s+(.+?)\\s*$`)
  const sections: MarkdownSection[] = []
  let current: { title: string; lines: string[] } | null = null

  for (const line of markdown.split(/\r?\n/)) {
    const headingMatch = line.match(headingRegex)

    if (headingMatch) {
      if (current) {
        sections.push({ title: current.title, body: current.lines.join("\n").trim() })
      }

      current = { title: headingMatch[1]?.trim() ?? "", lines: [] }
      continue
    }

    current?.lines.push(line)
  }

  if (current) {
    sections.push({ title: current.title, body: current.lines.join("\n").trim() })
  }

  return sections
}

function findSection(markdown: string, level: number, title: string): string {
  return splitByHeading(markdown, level).find((section) => normalizeKey(section.title) === normalizeKey(title))?.body ?? ""
}

function parseKeyValueEntries(block: string): KeyValueEntry[] {
  return block.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^\s*-\s*([^:]+):\s*(.*)$/)

    if (!match) {
      return []
    }

    return [{ label: match[1]?.trim() ?? "", value: match[2]?.trim() ?? "" }]
  })
}

function parseKeyValueMap(block: string): Record<string, string> {
  return parseKeyValueEntries(block).reduce<Record<string, string>>((fields, entry) => {
    fields[normalizeKey(entry.label)] = entry.value
    return fields
  }, {})
}

function parseListItems(block: string): string[] {
  return block.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^\s*-\s+(.+?)\s*$/)

    return match?.[1] ? [match[1].trim()] : []
  })
}

function splitParagraphs(block: string): string[] {
  return block
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean)
}

function textFromBlock(block: string): string {
  return splitParagraphs(block).join("\n\n")
}

function field(fields: Record<string, string>, label: string): string {
  return fields[normalizeKey(label)] ?? ""
}

function normalizeKey(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9]/g, "")
}
