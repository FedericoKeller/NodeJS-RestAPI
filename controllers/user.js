const User = require("../models/user");

exports.getUserStatus = (req, res, next) => {

    User.findById(req.userId)
    .then(user => {
        if(!user) {
            const err = new Error("User not found.");
            err.statusCode = 404;
            throw err;
        }

        res.status(200).json({
            message: "User gotten!",
            status: user.status,
        })
    })
    .catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }

        next(err);
    })
}


exports.updateUserStatus = (req, res, next) => {
    const status = req.body.status;
    console.log(req.body)
    User.findById(req.userId) 
    .then(user => { 
        if(!user) {
            const err = new Error("User not found.");
            err.statusCode = 404;
            throw err;
        }

        if(!status) {
            const err = new Error("Status not found.");
            err.statusCode = 404;
            throw(err);
        }

        user.status = status;
        return user.save();
    })
    .then(result => {
        res.status(200).json({message: "Status updated!"});
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }

        next(err);
    })
}