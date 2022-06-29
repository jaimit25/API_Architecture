const asyncHandler = require("express-async-handler");



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
    res.status(200).json({
      message: "Get Users",
    });
  });


//@desc     Create user
//@route    POST /api/user
//@access   Private
const postUser = async (req, res) => {
  // req.body.name = "John";
  console.log(req.body);
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

  res.status(200).json({
    message: `user created ${req.body.name}`,
  });
};

//@desc     Update users
//@route    PUT /api/users/:id
//@access   Private
const updateUser = async (req, res) => {
  res.status(200).json({
    message: `Update data with id ${req.params.id}`,
  });
};

//@desc     Delete users
//@route    Delete /api/users/:id
//@access   Private
const deleteUser = async (req, res) => {
  res.status(200).json({
    message: `Delete data with id ${req.params.id}`,
  });
};

module.exports = { getUsers, postUser, updateUser, deleteUser };

// git checkout -b DataHandling : to shift to DataHandling branch
// git push --set-upstream origin DataHandling : to push data to  DataHandling branch as origin
