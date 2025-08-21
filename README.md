<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Minh Tuan — Profile</title>

  <!-- Google Fonts: Quicksand (Medium 500) -->
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg: #0b0f14;
      --card: #111826;
      --text: #e6eef8;
      --muted: #a7b4c6;
      --accent: #4cc9f0;
      --accent-2:#80ffea;
      --ring: rgba(76,201,240,.35);
      --shadow: 0 10px 35px rgba(0,0,0,.35);
      --radius: 16px;
    }

    *{box-sizing:border-box}

    html,body{
      margin:0;
      padding:0;
      background:
        radial-gradient(1200px 600px at 10% -10%, #132033 0%, transparent 60%),
        radial-gradient(900px 500px at 90% 0%, #0f1b2a 0%, transparent 60%),
        var(--bg);
      color:var(--text);
      font-family: "Quicksand", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif;
      line-height:1.6;
    }

    .wrap{
      max-width: 820px;
      margin: 48px auto;
      padding: 0 20px;
    }

    .card{
      background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01)) , var(--card);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 28px;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(6px);
    }

    .glow{
      position:absolute;
      inset:-40%;
      background:
        radial-gradient(400px 200px at 15% 15%, rgba(128,255,234,.08), transparent 60%),
        radial-gradient(500px 240px at 85% 20%, rgba(76,201,240,.08), transparent 60%);
      pointer-events:none;
      z-index:0;
    }

    h1{
      margin: 0 0 14px 0;
      font-weight: 700;
      letter-spacing:.4px;
      text-align:center;
      font-size: clamp(26px, 3.6vw, 40px);
      line-height:1.25;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .contact{
      margin: 8px 0 22px 0;
      padding: 14px 16px;
      border-radius: 12px;
      background: rgba(255,255,255,.02);
      border:1px solid rgba(255,255,255,.06);
    }

    .contact ul{
      margin:0;
      padding-left: 18px;
    }

    .contact li{
      margin: 6px 0;
    }

    .contact a{
      color: var(--text);
      text-decoration: none;
      border-bottom: 1px dashed rgba(255,255,255,.25);
      transition: border-color .2s, color .2s;
      word-break: break-all;
    }

    .contact a:hover{
      color: var(--accent-2);
      border-color: var(--accent-2);
    }

    h3{
      margin: 22px 0 10px 0;
      font-weight: 700;
      letter-spacing:.2px;
      font-size: clamp(16px, 2.2vw, 20px);
      color: var(--text);
    }

    .socials{
      display:flex;
      align-items:center;
      gap:14px;
      flex-wrap:wrap;
      margin: 8px 0 16px 0;
    }

    .socials a{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:42px; height:42px;
      border-radius: 12px;
      background: rgba(255,255,255,.03);
      border:1px solid rgba(255,255,255,.08);
      transition: transform .15s ease, box-shadow .15s ease, border-color .2s ease;
      will-change: transform;
    }

    .socials a:hover{
      transform: translateY(-2px);
      border-color: var(--accent);
      box-shadow: 0 6px 18px var(--ring);
    }

    .socials img{
      width:22px; height:22px; display:block;
      filter: invert(90%) sepia(6%) saturate(350%) hue-rotate(180deg) brightness(100%) contrast(90%);
    }

    .cv{
      display:inline-flex;
      align-items:center;
      gap:10px;
      margin-top:8px;
    }

    .cv a{
      display:inline-flex; align-items:center; justify-content:center;
      padding: 10px 14px;
      border-radius: 12px;
      text-decoration:none;
      color: var(--bg);
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      font-weight:600;
      border: none;
      box-shadow: 0 10px 22px var(--ring);
      transition: transform .15s ease, box-shadow .15s ease, filter .2s ease;
    }

    .cv a:hover{
      transform: translateY(-2px);
      box-shadow: 0 14px 28px var(--ring);
      filter: saturate(1.05);
    }

    /* Utility for small notes/emojis list from original text */
    .note{
      color: var(--muted);
      font-size: 14px;
      margin-top: -2px;
      margin-bottom: 12px;
    }

    /* Make <p>, <ul> spacing tidy if used later */
    p{ margin: 10px 0; }
    ul{ margin: 10px 0 0 18px; }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce){
      .socials a,
      .cv a{ transition: none }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <section class="card">
      <div class="glow" aria-hidden="true"></div>

      <h1>Hi 👋, I'm Minh Tuan</h1>

      <div class="contact">
        <div class="note">📫 How to reach me</div>
        <ul>
          <li><strong>Gmail:</strong> <a href="mailto:tuannguyen.02042005@gmail.com">tuannguyen.02042005@gmail.com</a></li>
          <li><strong>Phone Number:</strong> <a href="tel:+84342809493">(+84) 0342809493</a></li>
        </ul>
      </div>

      <h3>Connect with me:</h3>
      <div class="socials">
        <a href="https://www.linkedin.com/in/minhtuan2405dev/" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn"/>
        </a>
        <a href="https://www.facebook.com/mnhtn245/" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="Facebook"/>
        </a>
      </div>

      <div class="cv">
        <span>Here is my CV 🍀🛠️🌵:</span>
        <a href="https://mycv-mnhtn.vercel.app/" target="_blank" rel="noopener">My CV 🍀🌵📋</a>
      </div>
    </section>
  </div>
</body>
</html>

