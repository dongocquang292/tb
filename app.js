const express = require("express");
const bodyParser = require("body-parser");
const employees = require("./views/data")
const fs = require("fs")
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", function (req, res) {
    res.render("home", {
        data: employees, body: 'employees', employees: employees
    });
});
app.get('/employees', (req, res) => {
    res.render('employees', { employees: employees });
});

app.get('/react/data', (req, res) => {
    res.status(200).json(employees)
})
app.post('/react/add-employee', (req, res) => {
    const { name, email, address, phone } = req.body;
    const newEmployee = {
        name: name,
        email: email,
        address: address,
        phone: phone
    };
    employees.push(newEmployee);
    fs.writeFileSync('./views/data.js', 'module.exports = ' + JSON.stringify(employees), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.json({ success: false, message: 'Đã xảy ra lỗi khi lưu dữ liệu!' });
        } else {
            console.log('Data has been written to file successfully!');
            res.json({ success: true, message: 'Nhân viên mới đã được thêm thành công!' });
        }
    });
    res.json({ success: true, message: 'Nhân viên mới đã được thêm thành công!' });
})
app.post('/employees/add', (req, res) => {
    const { name, email, address, phone } = req.body;
    const newEmployee = {
        name: name,
        email: email,
        address: address,
        phone: phone
    };
    employees.push(newEmployee);
    fs.writeFileSync('./views/data.js', 'module.exports = ' + JSON.stringify(employees), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.json({ success: false, message: 'Đã xảy ra lỗi khi lưu dữ liệu!' });
        } else {
            console.log('Data has been written to file successfully!');
            res.json({ success: true, message: 'Nhân viên mới đã được thêm thành công!' });
        }
    });
    res.json({ success: true, message: 'Nhân viên mới đã được thêm thành công!' });
});

app.listen(3001, (req, res) => {
    console.log("App is running on port 3001");
}); 
