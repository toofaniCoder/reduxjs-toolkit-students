const Student = require("../models/studentModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res
        .status(400)
        .json({ message: `Student Not Found with ID of: ${req.params.id}` });
    }
    res.json(student);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const isExist = await Student.findById(req.params.id);
    if (!isExist) {
      return res
        .status(400)
        .json({ message: `Student Not Found with ID of: ${req.params.id}` });
    }
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(student);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    const isExist = await Student.findById(req.params.id);
    if (!isExist) {
      return res
        .status(400)
        .json({ message: `Student Not Found with ID of: ${req.params.id}` });
    }
    await Student.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
