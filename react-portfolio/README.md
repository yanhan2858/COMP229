# COMP229 Assignment 2 — React Portfolio

Student: Jenny Ed

Personal portfolio built with React and React Router. The six pages are Home, About Me, Projects, Education, Services, and Contact Me.

The contact form stores what you type in `sessionStorage`, then returns to the home page. It does not send email.

## Run it

Portable Node.js for this machine is `D:\nodejs`.

```powershell
$env:Path = "D:\nodejs;" + $env:Path
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173

`npm run build` writes the static site into `dist`.
