class User {
      constructor(names, acount, email ){
      this.names = names;
      this.acount = acount;
      this.email = email;


      }
}

const allUsers = [
    new User('Juan Cachofa', '20178243','jCachofa@ucol.mx'),
    new User('Miguel Ruiz', '20167248','mruiz@ucol.mx'),
    new User('John Maxwell', '20126243','jMaxwell@ucol.mx'),
    new User('Carlos Nicolaz', '20180152','cNicolaz@ucol.mx')

]
 exports.getRandomUser = () => {
      return allUsers[Math.floor(Math.random() * allUsers.lenght)];

 }

 exports.allUsers = allUsers;