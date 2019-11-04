
const router = require('express').Router();

let Message = require('../models/message.model');

router.route('/').get((req, res) => {
    Message.find()
        .then(msgs => res.json(msgs))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/send').post((req, res) => {
    const message = req.body.message;

    const newMessage = new Message({ message });

    newMessage.save()
        .then(() => res.json('Message sent!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
