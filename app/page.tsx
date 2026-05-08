import CVPageClient from "@/components/cv-page-client"
import { getCVContent } from "@/lib/cv-content"

export default function CVPage() {
  return <CVPageClient content={getCVContent()} />
}
