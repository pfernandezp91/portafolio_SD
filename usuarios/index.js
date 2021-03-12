class User {
    constructor(names, acount, email ){
    this.names = names;
    this.acount = acount;
    this.email = email;


    }
}

const allUsers = [
  new User('Miguel Corona', '20121234','lala@ucol.mx')
]
exports.getRandomUser = () => {
    return allUsers[Math.floor(Math.random() * allUsers.lenght)];

}

exports.allUsers = allUsers;