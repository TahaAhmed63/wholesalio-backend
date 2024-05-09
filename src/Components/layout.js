import Navbar from "./navbar/Navbar";
import Sidebar2 from "./sidebar.js/Sidebar";

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar2/>
      <main>{children}
   
      </main>
     
    </>
  )
}