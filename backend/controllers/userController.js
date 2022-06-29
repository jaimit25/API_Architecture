//@desc     GET users
//@route    GET /api/users
//@access   Private
const getUsers = (req, res) => {
  res.status(200).json({
    message: "Get Users",
  });
};

//@desc     Create user
//@route    POST /api/users
//@access   Private
const postUser = (req, res) => {
  res.status(200).json({
    message: "create user",
  });
};

//@desc     Update users
//@route    PUT /api/users/:id
//@access   Private
const updateUser = (req, res) => {
  res.status(200).json({
    message: `Update data with id ${req.params.id}`,
  });
};

//@desc     Delete users
//@route    Delete /api/users/:id
//@access   Private
const deleteUser = (req, res) => {
  res.status(200).json({
    message: `Delete data with id ${req.params.id}`,
  });
};

module.exports = { getUsers, postUser, updateUser,deleteUser };
