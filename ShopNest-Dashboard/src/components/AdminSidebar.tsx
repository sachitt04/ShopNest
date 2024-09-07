import { RiDashboardFill ,RiShoppingBag3Fill } from 'react-icons/ri'
import { AiFillFileText } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { Link,Location, useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'

const AdminSidear = () => {

   const location = useLocation()
  return (
     <aside>
         <h2>LOGO.</h2>
         <div>
            <h5>Dashboard</h5>
            <ul>
                  <li style={
                     {
                        backgroundColor: location.pathname.includes("/admin/dashboard")
                        ? "rgba(0,115,255,0.1)" : "white"
                     }
                  }>
                     <Link to={"/admin/dashboard"}
                                          style={{
                                             color:location.pathname.includes
                                             ("/admin/dashboard")?"rgb(0,115,255)":"black"
                     
                                          }}
                     >
                     <RiDashboardFill/>
                     Dashboard                  
                     </Link>
                  </li>

                  <li style={
                     {
                        backgroundColor: location.pathname.includes("/admin/products")
                        ? "rgba(0,115,255,0.1)" : "white"
                     } } >
                     <Link to={"/admin/products"}
                                          style={{
                                             color:location.pathname.includes
                                             ("/admin/products")?"rgb(0,115,255)":"black"
                     
                                          }}
                     >
                      <RiShoppingBag3Fill/>
                     Products                 
                     </Link>
                  </li>

                  <li style={
                     {
                        backgroundColor: location.pathname.includes("/admin/customers")
                        ? "rgba(0,115,255,0.1)" : "white"
                     } }>
                     <Link to={"/admin/customers"} 
                                          style={{
                                             color:location.pathname.includes
                                             ("/admin/customers")?"rgb(0,115,255)":"black"
                     
                                          }}
                     >
                      <IoIosPeople/>
                     Customers                  
                     </Link>
                  </li>

                  <li style={
                     {
                        backgroundColor: location.pathname.includes("/admin/transactions")
                        ? "rgba(0,115,255,0.1)" : "white"
                     }} >
                     <Link to={"/admin/transactions"}

                     style={{
                        color:location.pathname.includes
                        ("/admin/transactions")?"rgb(0,115,255)":"black"

                     }}

                     >
                      <AiFillFileText/>
                     Transactions                  
                     </Link 
                     >
                  </li>

 

            </ul>
         </div>
     </aside>
  )
}

interface LiProps{
   url:String;
   text:String;
   location:Location,
   Icon: IconType
}
const Li = ({url,text,location,Icon}:LiProps) =>(
   <li style={
      {
         backgroundColor: location.pathname.includes("/admin/customers")
         ? "rgba(0,115,255,0.1)" : "white"
      }
 }
 >

   <Link>
   
   </Link>

   </li>
)

 
export default AdminSidear