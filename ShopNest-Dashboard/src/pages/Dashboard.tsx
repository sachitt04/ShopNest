 
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/userpic.png" 
import { HiTrendingUp,HiTrendingDown } from 'react-icons/hi'
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from '../components/Charts'
import { BiMaleFemale } from 'react-icons/bi'

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

      <section className='graph-container'>
        <div className="revenue-chart">
          <h2>Revenue & Transactions</h2>
          <BarChart
          data_1={[300,144,443,655,237,755,190]}
          data_2={[200,444,343,556,778,455,990]}
          title_1='Revenue'
          title_2='Transactions'
          bgColor_1='rgb(0,115,255)'
          bgColor_2='rgba(53,162,235,0.8)'

          />
        </div>
        <div className="dashboard-categories">
          <h2>Inventory</h2>
          <div>
            {data.categories.map((category)=>(
                          <CategoryItem 
                          heading={category.heading}
                          value={category.value}
                          color= {`hsl(${category.value * 5}, ${category.value}%, 50%)`}
                          
                          />
            ))}

          </div>
        </div>

      </section>

      <section className='transactions-container'>
        <div className='gender-chart'>
          <h2>Gender Ratio</h2>
          <DoughnutChart
          labels={["Female","Male"]} 
          data={[12,19]}
          backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
          cutout={90}
          />
          <p><BiMaleFemale/></p>
        </div>

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
  </article>;

  interface CategoryProps{
    color:string,
    value:number,
    heading:string
  }

  const CategoryItem = ({color,value,heading}:CategoryProps) =>(
    <div className='category-item'>
      <h5> {heading} </h5>
      <div>
        <div style={{
          backgroundColor: color,
          width:`${value}%`
        }}></div>
      </div>
      <span> {value}% </span>

    </div>
  )

export default Dashboard