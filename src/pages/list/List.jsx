import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navebar  from  '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
 <div className="list">
  <Sidebar />
  <div className="listContainer">
    <Navebar />
     <Datatable />
  </div>
 </div>
    )
}

export default List