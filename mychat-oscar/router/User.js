var express=require("express")();

const router =express.Router();
const User=require("../mychat-oscar/models/user")
router.get('/', async (req, res) => {
    try {
        const arrayUser = await User.find();
        console.log(arrayUser)
        res.render("user", {
            listaUser: arrayUser
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;