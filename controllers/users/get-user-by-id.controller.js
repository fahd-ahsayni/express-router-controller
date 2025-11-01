const getUser = (req, res) => {
  res.send(`get user with id ${req.params.id}`);
};

export {
  getUser,
};
