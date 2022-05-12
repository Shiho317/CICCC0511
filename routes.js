const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "home.html"));
});

router.get("/leave-note", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "leave-note.html"));
});

router.post("/leave-note", (req, res) => {
  const addedNotes = {
    user: req.body.user,
    title: req.body.title,
    note: req.body.note,
  };
  const noteLists = req.noteLists;
  noteLists.push(addedNotes);
  res.redirect('/read-note')
});

router.get("/read-note", (req, res) => {
  const noteLists = req.noteLists;
  res.render("read-note", { noteLists })
});

module.exports = router;
