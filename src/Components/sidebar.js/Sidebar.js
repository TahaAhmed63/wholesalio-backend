import React, { useState } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
 const Sidebar2 = () => {
    const [isSidebaropen,setIssidebarOpen]=useState(false)
  return (
    <>
 

 <Sidebar aria-label="Sidebar with multi-level dropdown example" className='h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="/products">Products</Sidebar.Item>
            <Sidebar.Item href="#">Atrributes</Sidebar.Item>
            <Sidebar.Item href="#">Catagories</Sidebar.Item>
            <Sidebar.Item href="#">Orders</Sidebar.Item>
          </Sidebar.Collapse>
          {/* <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item> */}
          <Sidebar.Item href="/" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

</>

 

  
  )
}
export default Sidebar2