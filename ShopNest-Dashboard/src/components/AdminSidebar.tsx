import { RiDashboardFill ,RiShoppingBag3Fill } from 'react-icons/ri'
import { AiFillFileText } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { Link,Location, useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'
import { FaChartBar,FaChartPie,FaChartLine } from 'react-icons/fa'

const AdminSidebar = () => {

   const location = useLocation()
  return (
     <aside>
         <h2>LOGO.</h2>
         <div>
            <h5>Dashboard</h5>
            <ul>

            <Li 
            url='/admin/dashboard'
            text='Dashboard'
            location={location}
            Icon={RiDashboardFill}/>

 <Li 
            url='/admin/products'
            text='Products'
            location={location}
            Icon={RiShoppingBag3Fill}/>

<Li 
            url='/admin/customers'
            text='Customers'
            location={location}
            Icon={IoIosPeople}/>

<Li 
            url='/admin/transactions'
            text='Transactions'
            location={location}
            Icon={AiFillFileText}/>
 
            </ul>
         </div>

         <div>
            <h5>Charts</h5>
            <ul>

            <Li 
            url='/admin/chart/bar'
            text='Bar'
            location={location}
            Icon={FaChartBar}/>

 <Li 
            url='/admin/chart/pie'
            text='Pie'
            location={location}
            Icon={FaChartPie}/>

<Li 
            url='/admin/chart/line'
            text='Line'
            location={location}
            Icon={FaChartLine}/>
            </ul>
         </div>

         <div>
            <h5>Apps</h5>
            <ul>

            <Li 
            url='/admin/apps/stopwatch'
            text='Stopwatch'
            location={location}
            Icon={RiDashboardFill}/>

 <Li 
            url='/admin/coupon'
            text='Coupon'
            location={location}
            Icon={RiShoppingBag3Fill}/>

<Li 
            url='/admin/toss'
            text='Toss'
            location={location}
            Icon={IoIosPeople}/>
            </ul>
         </div>
     </aside>
  )
}

 


interface LiProps{
   url:string;
   text:string;
   location:Location,
   Icon: IconType
}
const Li = ({url,text,location,Icon}:LiProps) =>(

   <li style={
                     {
                        backgroundColor: location.pathname.includes(url)
                        ? "rgba(0,115,255,0.1)" : "white"
                     }} >
                     <Link
                      to={url}

                     style={{
                        color:location.pathname.includes
                        (url)?"rgb(0,115,255)":"black"

                     }}

                     >
                     <Icon/>
                     
                     {text}                
                     </Link>
                  </li>
  
)

 
export default AdminSidebar