class User {
    constructor(names, acount, email ){
    this.names = names;
    this.acount = acount;
    this.email = email;


    }
}

const allUsers = [
  new User('Eren Jeager', '20178243','jCachofa@ucol.mx'),
  new User('Mikasa Ackerman', '20167248','mruiz@ucol.mx'),
  new User('Levi Ackerman', '20126243','jMaxwell@ucol.mx'),

]
exports.getRandomUser = () => {
    return allUsers[Math.floor(Math.random() * allUsers.lenght)];

}

exports.allUsers = allUsers;