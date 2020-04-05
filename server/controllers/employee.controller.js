const EmployeeModel = require("../models/employee");
const employeeController = {};

employeeController.getEmployees = async (req, res) => {
    const employees = await EmployeeModel.find();
    res.json(employees);
};

employeeController.createEmployee = async (req, res) => {
    const employee = new EmployeeModel({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({
        "status":"Employee saved"
    });
};

employeeController.getEmployee = async (req, res) => {
    const employee = await EmployeeModel.findById(req.params.id);
    res.json(employee);
};

employeeController.editEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await EmployeeModel.findByIdAndUpdate(req.params.id, {$set: employee}, { new: true});
    res.json({
        "status":"Employee updated"
    });
};

employeeController.deleteEmployee = async (req, res) => {
    await EmployeeModel.findByIdAndRemove(req.params.id);
    res.json({
        "status":"Employee deleted"
    });
};

module.exports = employeeController;