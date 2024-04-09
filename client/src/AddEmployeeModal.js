import React, { useState } from 'react';

const AddEmployeeModal = ({ show, onClose, onAddEmployee }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        // Kiểm tra các trường không được rỗng
        if (!name || !email || !address || !phone) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        e.preventDefault();
        
        // Kiểm tra các trường không được bỏ trống và số điện thoại có 10 số
        if (!name || !email || !address || !phone) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            setError('Số điện thoại phải có đúng 10 chữ số.');
            return;
        }
        // Gửi yêu cầu thêm nhân viên mới
        onAddEmployee({ name, email, address, phone });
        // Reset form và xóa thông báo lỗi
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setError('');
        // Đóng modal sau khi thêm nhân viên
        onClose();
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thêm nhân viên</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Tên nhân viên</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ</label>
                                <input type="text" className="form-control" id="address" value={address} onChange={e => setAddress(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="tel" className="form-control" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Thêm</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
