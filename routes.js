const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "home.html"));
});

router.get("/leave-note", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "leave-note.html"));
});

router.get("/read-note", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "read-note.html"));
});

router.post("/read-note", (req, res) => {
  const noteLists = [];
  const addedNotes = {
    user: req.body.user,
    title: req.body.title,
    note: req.body.note,
  };
  noteLists.push(addedNotes);
  res.send(`
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest Book</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <header>
      <h3>GUEST BOOK</h3>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/read-note">
          <li>Read Note</li>
        </a>
        <a href="/leave-note">
          <li>Write Note</li>
        </a>
      </ul>
    </header>
    <main>
      <h1>Our Notes</h1>
      <div class="notes-wrapper">
        ${noteLists.map((note) => {
          return`<div class="note">
            <h3>Title: ${note.title}</h3>
            <p>Memo: ${note.note}</p>
            <h4>From: ${note.user}</h4>
          </div>`;
        })}
      </div>
    </main>
  </body>
  </html>
  `);
});

module.exports = router;