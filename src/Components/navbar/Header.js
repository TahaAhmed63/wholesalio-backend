// components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import { IoIosMenu, IoIosClose, IoIosMoonOutline,IoIosSearchOutline, IoIosNotificationsOutline, IoIosAppsOutline,IoIosPersonOutline, IoIosSettingsOutline, IoIosLogOut } from 'react-icons/io';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  return (
    <header className="top-header">
      <nav className="navbar navbar-expand gap-3">
        <div className="toggle-icon">
          {/* <IoIosMenu onClick={toggleDropdown} /> */}
        </div>
        <form className="searchbar">
          <div className="position-absolute top-50 translate-middle-y search-icon ms-3">
            {/* <IoIosSearchOutline /> */}
          </div>
          <input className="form-control" type="text" placeholder="Search for anything" />
          <div className="position-absolute top-50 translate-middle-y search-close-icon">
            {/* <IoIosClose /> */}
          </div>
        </form>
        <div className="top-navbar-right ms-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link  className="nav-link mobile-search-button" href={'#'}>
                {/* <IoIosSearchOutline /> */}
              </Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link dark-mode-icon" href={'#'}>
                {/* <IoIosMoonOutline /> */}
              </Link >
            </li>
            <li className="nav-item dropdown dropdown-large dropdown-apps">
              <Link  href={'#'} className="nav-link dropdown-toggle dropdown-toggle-nocaret" onClick={toggleDropdown}>
                {/* <IoIosAppsOutline /> */}
              </Link >
              {isDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                  {/* Dropdown menu items go here */}
                </div>
              )}
            </li>
            <li className="nav-item dropdown dropdown-large">
              <Link  href={'#'} className="nav-link dropdown-toggle dropdown-toggle-nocaret" onClick={() => setIsDropdownOpen(true)}>
                <div className="position-relative">
                  <span className="notify-badge">8</span>
                  {/* <IoIosNotificationsOutline /> */}
                </div>
              </Link >
              {isDropdownOpen && (
                <div className="dropdown-menu dropdown-menu-end">
                  {/* Dropdown menu items go here */}
                </div>
              )}
            </li>
            <li className="nav-item dropdown dropdown-user-setting">
              <Link  href={'#'} className="nav-link dropdown-toggle dropdown-toggle-nocaret" onClick={toggleUserDropdown}>
                <div className="user-setting">
                  <img src="/path/to/avatar.jpg" className="user-img" alt="" />
                </div>
              </Link >
              {isUserDropdownOpen && (
                <ul className="dropdown-menu dropdown-menu-end">
                  {/* User dropdown menu items go here */}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
