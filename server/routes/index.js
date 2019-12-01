const express = require('express');
const router = express.Router();
const app = express();
const List = require("../model/todo.model");

router.get('/', (req, res) => {
    res.redirect('/lists');
})

router.get("/lists", (req, res) => {
    List.find((err, lists) => {
        if (err) return { success: false, error: err };
        return res.json({ success: true, lists });
    });
})

router.post("/addNote", (req, res) => {
    let list = new List();
    const { id, message } = req.body;
    if (!id || !message) return res.status(404).json({ success: false, error: "Invalid inputs" });
    list.id = id;
    list.message = message;
    list.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete("/deleteNote", (req, res) => {
    const { id } = req.body;
    List.findByIdAndDelete(id, (error, deleted) => {
        if (error) return res.json({ success: false, error });
        return res.json({ success: true, deleted });
    });
});

router.put("/updateNote", (req, res) => {
    const { id, update } = req.body;
    if (!id || !update.message) return res.status(404).json({ success: false, error: "Invalid inputs" });
    List.findByIdAndUpdate(id, update, (error, updated) => {
        if (error) return res.json({ success: false, error });
        return res.json({ success: true, updated });
    });
});

app.use('/', router);

module.exports = router;