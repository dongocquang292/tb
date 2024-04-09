import React from 'react';

const Navbar = ({ onEmployeeLinkClick, onHomeLinkClick }) => {
    const handleEmployeeLinkClick = () => {
        if (typeof onEmployeeLinkClick === 'function') {
            onEmployeeLinkClick();
        }
    };

    const handleHomeLinkClick = () => {
        if (typeof onHomeLinkClick === 'function') {
            onHomeLinkClick();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#" onClick={handleHomeLinkClick}>TLU</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={handleHomeLinkClick}>Trang chủ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleEmployeeLinkClick}>Quản lý nhân viên</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;