import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    'H&M',
    '유아',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;

      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} className="login-btn-icon" />
        <div
          className="login"
          onClick={() => {
            authenticate
              ? (navigate('/'), setAuthenticate(false))
              : navigate('/login');
          }}
        >
          {authenticate ? '로그아웃' : '로그인'}
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNr2Mc3jHvEFB6lpVX-FQmWyNUylQYmS-02Q&s"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="menu-area">
        <Sidebar menuList={menuList} />
        {/* {!isMobile ? (
          <ul className="menu-list">
            {menuList.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </ul>
        ) : (
          <>
            <DropdownButton id="dropdown-basic-button" title="">
              {menuList.map((menu, idx) => (
                <Dropdown.Item key={idx}>{menu}</Dropdown.Item>
              ))}
            </DropdownButton>
            <Sidebar menuList={menuList} />
          </>
        )} */}

        <div className="menu-serch">
          <FontAwesomeIcon icon={faSearch} className="menu-serch-icon" />
          <input type="text" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
