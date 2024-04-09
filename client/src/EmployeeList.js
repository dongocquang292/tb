import React, { useState } from 'react';
import AddEmployeeModal from './AddEmployeeModal';

const EmployeeList = ({ employees, onAddEmployee }) => {
    const [showAddModal, setShowAddModal] = useState(false);

    const handleAddButtonClick = () => {
        setShowAddModal(true);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
    };
    return (
        <div>
            <div >
                <h2>Quản lý nhân viên</h2>
                <button onClick={handleAddButtonClick}>Thêm nhân viên</button>
            </div>
           
            <AddEmployeeModal
                show={showAddModal}
                onClose={handleCloseModal}
                onAddEmployee={onAddEmployee}
            />
            {/* Bảng danh sách nhân viên */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.email}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default EmployeeList;
