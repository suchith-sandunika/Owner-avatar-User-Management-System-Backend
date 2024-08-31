const User = require('./model');



const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message: error});
        })
};

const AddUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message: error});
        })
}

const UpdateUser = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    User.updateOne({id: id}, {name: name})
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message: error});
        })
}

const DeleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({id: id})
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message: error});
        })
}

exports.getUsers = getUsers;
exports.AddUser = AddUser;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;

