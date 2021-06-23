class User{
    constructor(name,acount,email){
        this.name = name;
        this.acount=acount;
        this.email=email;
    }
}
const allUsers=[
    new User('Oscar Ramos','20166942','oramos6@ucol.mx'),
    new User('Juan','20166952','juans6@ucol.mx'),
    new User('Pablo M','20166942','pm@ucol.mx'),
    new User('Liria M','20168912','lmaria@ucol.mx')
]
exports.getRamdonmUser =()=>{
    return allUsers[Math.floor(Math.random()*allUsers.length)];
}
exports.allUsers=allUsers;