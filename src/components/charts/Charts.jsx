import "./chart.scss"
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip } from 'recharts';

//Fake data

const data=[
  {name:"januvary", Total:12000},
  {name:"Februvary", Total:18000},
  {name:"march", Total:15000},
  {name:"April", Total:16000},
  {name:"May", Total:19000},
]


const Charts = ({aspect,title}) => {
  return (
       <div className="chart" width="100%" aspect={aspect}>
        <div className="title">{title}</div>
        
<AreaChart width={830} height={350} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" stroke="gray" />
  <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
       </div>
    )
}

export default Charts