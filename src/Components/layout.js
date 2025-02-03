// import Deshboard from "@/pages/deshboard";
import Header from "./navbar/Header";
import Sidebar from "./sidebar.js/Sidebar";
// import Navbar from "./navbar/Navbar";


 
export default function Layout({ children }) {
  return (
    <>
  
      <main>
        <div className="wrapper">
        <Sidebar/>
      <Header />
       
   
        {children}
   
        </div>

      </main>
     
    </>
  )
}