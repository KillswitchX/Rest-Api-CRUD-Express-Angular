User = require('./userModel');


exports.index = async (req, res) => {
    const users = await User.find();
        res.json( users);
    
};

// CREATE
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.identification = req.body.identification;
    user.password = req.body.password;
    user.photo = req.body.photo;
    user.active = req.body.active;
    
// save the user
    user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New user created!',
                data: user
            });
    });
};

//READ
exports.view = function (req, res) {
    User.findOne({identification: req.params.identification}, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    })
};

//UPDATE
exports.update = function (req, res) {
    User.findOne({identification: req.params.identification}, function (err, user) {
        if (err)
                res.send(err);
            user.name = req.body.name;
            user.username = req.body.username;
            user.identification = req.body.identification;
            user.password = req.body.password;
            user.photo = req.body.photo;
            user.active = req.body.active;
// save the user
    user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};

//DELETE
exports.delete = function (req, res) {
    User.findOneAndDelete({
        identification: req.params.identification
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "Success",
            message: 'User deleted'
        });
    });
};