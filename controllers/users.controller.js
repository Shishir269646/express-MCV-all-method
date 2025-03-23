const { uuid } = require("uuidv4");
let users = require("../models/users.model");

//Get all Users
const getAllUsers = (req, res) => {
    res.status(200).json({ users });
}


//Creat new User
const createUsers = (req, res) => {
    const newUser = {
        id: uuid(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);

    res.status(200).json({ users });
}


//Update User
const updateUsers = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json({ users });
}


//Delete User
const deleteUsers = (req, res) => {
    const userId = req.params.id;
    const deletedUsers = users.filter((user) => user.id !== userId);

    res.status(200).json({ deletedUsers });
}



module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers }