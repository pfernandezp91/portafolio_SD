class User{
    constructor(name, acount, email){
        this.name = name;
        this.acount = acount;
        this.email = email;
    }
}

const allUsers = [
    new User('Gabriel Torres', '20142074', 'gtorres@ucol.mx'),
    new User('Gatell Lopez', '20102099', 'Glopez@ucol.mx'),
    new User('Anuar Arturo', '20151630', 'avuelvas@ucol.mx'),
    new User('Linux Todvar', '20204077', 'Ltodvar@ucol.mx')
]

exports.getRandomUser = () =>{
    return allUsers[Math.floor(Math.random() * allUsers.length)];
}

exports.allUsers = allUsers;