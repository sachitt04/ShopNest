 
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/userpic.png" 

const Dashboard = () => {
  return (
    <div  className='adminContainer'> 

    {/*sidebar*/}
    <AdminSidebar/>

    {/*main*/}  
    <main className='dashboard'>
      <div className="bar">
        <BsSearch/>
        <input type="text" placeholder='Search for data, users, docs' />
        <FaRegBell/>
        <img src={userImg} alt="" />


      </div>
    </main>
    </div>
  )
}

export default Dashboard