# Personal Portfolio — Vito

Static portfolio site for my work as an Informatics Engineering student. Built with plain HTML, CSS, and JavaScript — no framework, no build step.

**Live:** [hafizhvito.github.io/Personal-Web](https://hafizhvito.github.io/Personal-Web)

## What's here

- About section with skills and tech stack
- Education and experience timeline
- Project grid (pulled from `script.js`)
- Contact form and social links

Featured projects include **HealthySim** (Unity capstone), **DINI Sehat Mental**, **Akredoc**, and a few smaller builds. Links point to their GitHub repos.

## Stack

- HTML, CSS, JavaScript
- [Particles.js](https://github.com/VincentGarreau/particles.js) for the background
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts (Outfit, Space Grotesk)

CDN assets use Subresource Integrity. A basic Content Security Policy is set in `index.html`.

## Run locally

```bash
git clone https://github.com/Hafizhvito/Personal-Web.git
cd Personal-Web
python -m http.server 8000
```

Open `http://localhost:8000`. You need internet access for fonts and CDN scripts.

## Project structure

```
Personal-Web/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
```

## Adding a project

Edit the `PROJECTS` array at the top of `script.js`:

```javascript
{
  title: "Project Name",
  category: "Web Development",
  tags: ["React", "PHP"],
  image: "assets/images/your-screenshot.jpg",
  github: "https://github.com/Hafizhvito/your-repo",
}
```

Drop a screenshot in `assets/images/`. If the image is missing, a placeholder shows instead.

## Contact

- Email: [pixelsreet@gmail.com](mailto:pixelsreet@gmail.com)
- GitHub: [@Hafizhvito](https://github.com/Hafizhvito)
- LinkedIn: [Hafizh Vito Pratomo](https://www.linkedin.com/in/hafizh-vito-pratomo-abb75a2a6/)
- Instagram: [@hafizhvito_](https://www.instagram.com/hafizhvito_/)

## Notes

This is a personal site. Fork it if you want, but the content is specific to me. For bugs or typos, open an issue or send a message.
