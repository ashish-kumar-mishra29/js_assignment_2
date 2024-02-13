class Employee {
    constructor(name, address, employeeId, designation) {
        this.name = name;
        this.address = address;
        this.employeeId = employeeId;
        this.designation = designation;
    }
}

let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const employeeId = document.getElementById('employeeId').value;
    const designation = document.getElementById('designation').value;

    const existingEmployee = employees.find(emp => emp.employeeId === employeeId);
    if (existingEmployee) {
        alert("Employee ID already exists.Change the Emp");
        return;
    }
    if (name === "" || address === "" || employeeId === "" || designation === "") {
        alert("Please fill out all fields.");
        return;
    }

    const newEmployee = new Employee(name, address, employeeId, designation);
    employees.push(newEmployee);

    displayEmployees();
    document.getElementById('employeeForm').reset();
}

function displayEmployees() {
    const employeeTable = document.getElementById('employeeDetails');
    employeeTable.innerHTML = '';

    employees.forEach((employee, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.address}</td>
            <td>${employee.employeeId}</td>
            <td>${employee.designation}</td>
            <td><button type="button" class="edit-button" onclick="editEmployee(${index})">Edit</button></td>
        `;
        employeeTable.appendChild(tr);
    });
}
function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('name').value = employee.name;
    document.getElementById('address').value = employee.address;
    document.getElementById('employeeId').value = employee.employeeId;
    document.getElementById('designation').value = employee.designation;

    document.getElementById('addEmployeeButton').style.display = 'none';
    document.getElementById('saveEditButton').style.display = 'block';
    document.getElementById('saveEditButton').onclick = () => saveEdit(index);
}

function saveEdit(index) {
    employees[index].name = document.getElementById('name').value;
    employees[index].address = document.getElementById('address').value;
    employees[index].employeeId = document.getElementById('employeeId').value;
    employees[index].designation = document.getElementById('designation').value;

    displayEmployees();
    document.getElementById('employeeForm').reset();
    document.getElementById('addEmployeeButton').style.display = 'block';
    document.getElementById('saveEditButton').style.display = 'none';
}