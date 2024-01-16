import React, { useEffect, useState } from 'react'
import "./index.scss"
import FormAdd from '../../components/Formik'
import axios from 'axios'
const AddPage = () => {
  const [data, setData] = useState([])
const [search, setSearch] = useState('')
const [property, setProperty] = useState(null)
 async function getData() {
    const res=await axios("http://localhost:8000/")
setData(res.data)
  }
  async function deleteData(id) {
    const res=await axios.delete(`http://localhost:8000/${id}`)
getData()
  }
  useEffect(() => {
    getData() 
  }, [])
  
  return (
    <div>
      <FormAdd getData={getData}/>
      <div className="filter">
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={()=>setProperty({name:"title",asc:null})}>default</button>
        <button onClick={()=>setProperty({name:"title",asc:true})}>a-z</button>
        <button onClick={()=>setProperty({name:"title",asc:false})}>z-a</button>
        <button onClick={()=>setProperty({name:"price",asc:true})}>inc</button>
        <button onClick={()=>setProperty({name:"price",asc:false})}>dec</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>icon</th>
        <th>title</th>
        <th>desc</th>
        <th>price</th>
        <th>del</th>
      </tr>
    </thead>
    <tbody>
    {
     data && data
     .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
     .sort((a,b)=>{
      if (property && property.asc===true) {
        return (a[property.name]<b[property.name]) ? -1 : ((b[property.name]<a[property.name]) ? 1 : 0)
      }
      else if (property && property.asc===false) {
        return (a[property.name]>b[property.name]) ? -1 : ((b[property.name]>a[property.name]) ? 1 : 0)
      }
      else{
        return 0;
      }

     })
     .map(x=>
      <tr key={x._id}>
        <th>{x.icon}</th>
        <th>{x.title}</th>
        <th>{x.desc}</th>
        <th>{x.price}</th>
        <th><button onClick={()=>deleteData(x._id)}>del</button></th>
      </tr>
       
      ) 
    }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AddPage