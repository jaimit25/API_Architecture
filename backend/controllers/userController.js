const asyncHandler = require("express-async-handler");
const user = require("../model/userModel");

//@desc     GET users
//@route    GET /api/users
//@access   Private
// const getUsers = async (req, res) => {
//   res.status(200).json({
//     message: "Get Users",
//   });
// };
//or to use asyncHandler
const getUsers = asyncHandler(async (req, res) => {
  //find will return all objects in the collection
  const users = await user.find();

  res.status(200).json(users);
});

//@desc     Create user
//@route    POST /api/user
//@access   Private
const postUser = async (req, res) => {
  if (!req.body.name) {
    //user has not send name

    // res.status(400).json({ // bad status
    //   message: "Name is required",
    // });
    // OR
    res.status(400);
    throw new Error("Name is required"); //it will give an HTML PAGE error postman
    //we need to change the default express error handler using middleware
  }
  const newUser = await user.create({
    name: req.body.name,
  }); //to create a new user in mongoDB

  res.status(200).json(newUser);
  console.log(req.body);
};

//@desc     Update users
//@route    PUT /api/users/:id
//@access   Private
const updateUser = async (req, res) => {
  const userUpdate = await user.findById(req.params.id);
  if (!userUpdate) {
    res.status(200).json({
      message: `Update data not found id ${req.params.id}`,
    });
  }

  const UpdateUser = await user.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    { new: true } //create if does not exist
  );

  res.status(200).json({
    message: `Update data with id ${req.params.id}`,
  });
};

//@desc     Delete users
//@route    Delete /api/users/:id
//@access   Private
const deleteUser = async (req, res) => {
  const d_user = await user.findById(req.params.id); // to find the user with the id in mongo

  await d_user.remove(); //to delete the user with the id in mongo
  res.status(200).json({
    message: `Delete data with id ${req.params.id}`,
  });
};


module.exports = { getUsers, postUser, updateUser, deleteUser };

// git checkout -b DataHandling : to shift to DataHandling branch
// git push --set-upstream origin DataHandling : to push data to  DataHandling branch as origin
