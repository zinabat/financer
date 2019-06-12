var User = require('../models/user');

exports.user_create = function (req, res) {
    res.send("Not Implemented: User POST");
};

exports.user_delete = function (req, res) {
    res.send("Not Implemented: User DELETE");
};

exports.user_find = function (req, res) {
    // User.find((err, data) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true, data: data });
    // });
    res.send("Not Implemented: User GET");
};

exports.user_update = function (req, res) {
    res.send("Not Implemented: User PUT");
};

exports.user_login = function (req, res) {
    res.send("Not Implemented: User Login GET foobar");
}