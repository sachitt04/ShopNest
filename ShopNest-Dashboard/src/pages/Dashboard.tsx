 
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/userpic.png" 
import { HiTrendingUp,HiTrendingDown } from 'react-icons/hi'

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

      <section className='widget-container'>
        <WidgetItem
        heading='Revenue'
        value={4000}
        precent={40}
        amount = {true}
        color = "rgb(0 115 255)"
 
            />

<WidgetItem
        heading='Users'
        value={400}
        precent={-14}
         
        color =  "rgb(0 198 202)"
 
            />

<WidgetItem
        heading='Transactions'
        value={23000}
        precent={80}
         
        color = "rgb(255 196 0)"
 
            />

<WidgetItem
        heading='Products'
        value={1000}
        precent={30}
         
        color = "rgb(76 0 255 )"
 
            />



      </section>
    </main>
    </div>
  )
}

interface widgetItemProps{
  heading:string,
  value:number,
  precent:number,
  amount?:boolean,
  color:string;
  
}

const WidgetItem = ({heading,
                     value,
                     precent,
                     amount = false,
                     color}
                     :widgetItemProps) =>
  <article className='widget-item'>
    <div className='widgetInfo'>
      <p>{heading}</p>
      <h4>{amount? `$${value}`: value}</h4>
      {
        precent>0? (
        <span className="green"> 
        <HiTrendingUp/> +{precent}% {" "}
         </span>)
        : (<span className='red'> 
        <HiTrendingDown/> 
        {precent}% {" "} 
        </span>)
      }
    </div>

    <div className='widget-circle'
    style={{
      background:`conic-gradient(${color} ${(Math.abs(precent)/100)*360}deg,
      rgb(255,255,255) 0)`
    }}>
      <span  style= {{
        color,
      }}>{precent}%</span>

    </div>
  </article>

export default Dashboard