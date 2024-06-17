import Addproduct from "./Addproduct"
import Listproduct from "./Listproduct"
import Sidebar from "./Sidebar"
import { Routes,Route } from "react-router-dom"

const Admin = () => {
  return (
    <div className="admin flex">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/listproduct" element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
