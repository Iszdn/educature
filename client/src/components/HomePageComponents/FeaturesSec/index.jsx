import React, { useEffect, useState } from 'react'
import "./index.scss"
import Card from '../../Card'
import axios from 'axios'
const Feature = () => {
  const [data, setData] = useState([])
  async function getData() {
   const res=await axios("http://localhost:8000/")
    setData(res.data)
  }
  useEffect(() => {
   getData()
  }, [])
  
  return (
    <section id='feature'>
<div className="header">
  <h2>Features That Make Us Hero</h2>
  <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
</div>
<div className="container">
  <div className="row">
    {
      data && data.map((x)=>(
         <div className="col-lg-4">
      <Card {...x}/>
    </div>
      ))
      
    }
   
  
  </div>
</div>
    </section>
  )
}

export default Feature