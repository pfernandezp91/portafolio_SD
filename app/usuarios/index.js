class User {
    constructor(name,acount,email)
{
    this.name=name;
    this.acount=acount;
    this.email=email;
}
}
const allUsers =[
    new User('alan hernandez','1000','ahernandez0@ucol.mx'),
    new User('donaji gutierrez','1101','dgutierrez1@ucol.mx'),
    new User('leonardo lopez','1202','llopez2@ucol.mx'),
    new User('juan torres','1303','jtorres3@ucol.mx')
]

exports.getRandomUser=() =>{
    return allUsers[Math.floor( Math.random() * allUsers.length)]
}

exports.allUsers = allUsers;