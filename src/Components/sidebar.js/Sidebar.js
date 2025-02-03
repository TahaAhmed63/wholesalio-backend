// components/Sidebar.js
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`sidebar-wrapper ${isOpen? 'open' : ''}`} data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img src="/assets/images/logo-icon-2.png" className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">Fobia</h4>
        </div>
      </div>
      <button onClick={toggleSidebar}>Toggle Menu</button>
      <ul className="metismenu" id="menu">
        <li>
          <Link href="/dashboard">
        
              <div className="parent-icon">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <div className="menu-title">Dashboard</div>
       
          </Link>
        </li>
        <li>
          <Link href="#" className="has-arrow">
            <div className="parent-icon">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <div className="menu-title">eCommerce</div>
          </Link >
          <ul>
            <li><Link href="#">
                <ion-icon name="ellipse-outline"></ion-icon>Product Grid
              </Link >
            </li>
            {/* Add more eCommerce sub-items here */}
          </ul>
        </li>
        {/* Convert other menu items similarly */}
      </ul>
    </aside>
  );
};

export default Sidebar;
