var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res) => {
    let data = fs.readFileSync(`./dev-data/questions.json`, "utf8");
    res.send(data);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let data = fs.readFileSync(`./dev-data/questions.json`, "utf8");
    data = JSON.parse(data);
    let result = data.findIndex((item, index, array) => {
        return item.id == id;
    });
    if (result == -1) {
        res.send("There are no user of that id.");
    } else {
        res.send(data[result]);
    }
});
router.post('/', (req, res) => {
    const { content, like, dislike } = req.body;
    let data = fs.readFileSync(`./dev-data/questions.json`, "utf8");
    data = JSON.parse(data);
    let check = data.findIndex((item, index, array) => {
        return item.content == content;
    });
    if (check == -1) {
        const newId = Date.now();
        let newObj = {
            content: content,
            like: like,
            dislike: dislike,
            id: newId
        }
        data.push(newObj);
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(data));
        res.send("Create successfully");
    } else {
        res.send("Question already exist!")
    }
});
router.put('/:id', (req, res) => {
    const { content, like, dislike } = req.body;
    let data = fs.readFileSync(`./dev-data/questions.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    if (result == -1) {
        res.send("Question not found!");
    } else {
        let newObj = data[result];
        newObj.content = content;
        newObj.like = like;
        newObj.dislike = dislike;
        res.send("Update successfully");
    }
});
router.delete('/:id', (req, res) => {
    let data = fs.readFileSync(`./dev-data/questions.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    if (result == -1) {
        res.send("Question not found.");
    } else {
        data.slice(result, 1);
        fs.writeFileSync(`./dev-data/questions.json`, JSON.stringify(data));
        res.send('Delete successfully!');
    }
});
module.exports = router