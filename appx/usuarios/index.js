class User {
    constructor(name,acount,email)
{
    this.name=name;
    this.acount=acount;
    this.email=email;
}
}
const allUsers =[
    new User('juan perez','7963','jperez@ucol.mx'),
    new User('juan paredes','7973','jparedes@ucol.mx'),
    new User('jose parra','7983','jparra@ucol.mx'),
    new User('pancha lopez','7993','plopez@ucol.mx')
]

exports.getRandomUser=() =>{
    return allUsers[Math.floor( Math.random() * allUsers.length)]
}

exports.allUsers = allUsers;