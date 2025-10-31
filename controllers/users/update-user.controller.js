const updateUser = (req, res) => {
  res.send(`update user with id ${req.params.id}`);
};

module.exports = {
  updateUser,
};
