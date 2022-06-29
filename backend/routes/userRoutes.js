const express = require("express");
const router = express.Router(); // It will make writting code easier and smaller

//using controller - '..' to go out of current folder
const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//#GET
//app.get('/api/users', (req, res) => {
//app change to router
// router.get('/', (req, res) => {
//     res.status(200).json({
//         message:'Get User',
//     });
// });

//It is same as the above one
// router.get("/", getUsers); //only getusers function is in another folder and we are calling that using routes

//POST
// router.post('/', (req, res) => {
//     res.status(200).json({
//         message:'create user',
//     });
// });
//It is same as the above one
// router.post("/", postUser);

// #UPDATE
// :id is out parameter to update data with id
// router.put('/:id', (req, res) => {
//     res.status(200).json({
//         message:`Update data with id ${req.params.id}`,
//     });
// });
//It is same as the above one
// router.put("/:id", updateUser);

// #DELETE
// :id is out parameter to delete data with id
// router.delete('/:id', (req, res) => {
//     res.status(200).json({
//         message:   `Delete data with id ${req.params.id}`,
//     });
// });
//It is same as the above one
// router.delete("/:id", deleteUser);


//#SHOTFROMS USING ROUTER
//Extra - get and post can be written as :
//Extra - put and delete can be written as :
router.route("/").get(getUsers).post(postUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
