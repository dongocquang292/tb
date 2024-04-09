import React, { useState, useEffect  } from 'react';
import Navbar from './Navbar';
import EmployeeList from './EmployeeList';

const App = () => {
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/react/data') // Gọi API để lấy dữ liệu nhân viên
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching employees data:', error));
}, []);
  const handleEmployeeLinkClick = () => {
    setShowEmployeeList(true);
    setIsHomePage(false );
  };
  
  const handleHomeLinkClick = () => {
    setShowEmployeeList(false);
    setIsHomePage(true);
  };
  const handleAddEmployee = (newEmployeeData) => {
    fetch('/react/add-employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmployeeData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('New employee added:', data);
        setEmployees([...employees, newEmployeeData]);
    })
    .catch(error => console.error('Error adding new employee:', error));
};
  return (
    <div>
    <Navbar onEmployeeLinkClick={handleEmployeeLinkClick} onHomeLinkClick={handleHomeLinkClick} />
    <div className="container">
                <h1>{isHomePage ? 'Trang chủ' : null}</h1>
                {showEmployeeList && !isHomePage && <EmployeeList employees={employees} onAddEmployee={handleAddEmployee} />}
            </div>
</div>
  );
};

export default App;
