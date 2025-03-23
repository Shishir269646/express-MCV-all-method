const { uuid } = require('uuidv4');

const users = [
    {
        id: uuid(),
        username: "Manjirul Islam",
        email: "manjirul@gmail.com"
    },
    {
        id: uuid(),
        username: "Atia Islam",
        email: "atia@gmail.com"
    },
    {
        id: uuid(),
        username: "Mahfuz Islam",
        email: "mahfuz@gmail.com"
    }
]


module.exports = users;