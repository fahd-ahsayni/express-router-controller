const getStudentById = (req, res) => {
  res.send("get student by id " + req.params.id);
};

export default getStudentById;