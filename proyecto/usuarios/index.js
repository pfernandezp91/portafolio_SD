class user {
    constructor(name, acount, email){
        this.name = name ;
        this.acount =acount;
        this.email =email;

    }
}
const allUsers = [
    new user('Juan Perez' , '20107983' , 'jperez@ucol.mx'),
    new user('pancho lopez' , '20111934' , 'pancholopezz@ucol.mx'),
    new user('fulanita detal' , '20123216' , 'ftal@ucol.mx'),
    new user('manganito flores ' , '20917393' , 'mgf@ucol.mx'),
]
exports.getRandomUser= ()=> {
    return allUsers[Math.floor(Math.random()*allUsers.length)]
}
exports.allUsers = allUsers;
