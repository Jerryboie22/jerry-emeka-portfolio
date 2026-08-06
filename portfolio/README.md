# Jeremiah Emeka — Portfolio

Full-stack developer & SEO specialist portfolio. Built with React (Vite) + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Add your photo

Drop a square-ish photo (500x500px or larger) at:

```
public/profile-photo.jpg
```

It will automatically appear in the About section — no code changes needed.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Vercel auto-detects Vite — leave defaults (Build Command: `npm run build`, Output: `dist`)
4. Click **Deploy**

Every future push to `main` auto-redeploys.

## Edit your content

All resume content (skills, experience, projects, education) lives in one file:

```
src/data.js
```

Edit that file to update anything without touching component code.
