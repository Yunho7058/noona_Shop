import React, { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars } from 'react-icons/fa';

const Sidebar = ({ menuList }) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal ? (
        <div className="sidebar-container">
          <FontAwesomeIcon
            icon={faClose}
            className="sidebar-close"
            onClick={() => handleClick()}
          />
          <div className="sidebar-list">
            {menuList.map((menu, idx) => (
              <div key={idx} className="sidebar-item">
                {menu}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div onClick={() => handleClick()}>
          <FaBars className="sidebar-svg" size={20} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
