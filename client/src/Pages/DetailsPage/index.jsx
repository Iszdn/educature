import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
const Details = () => {
  const [data, setData] = useState(null)
  const {id}=useParams()
async function getId() {
  const res=await axios(`http://localhost:8000/${id}`)
setData(res.data)
}
useEffect(() => {
  getId()
}, [])

  return (
    <div className='det'>
{
  data && <Card {...data}/>
}

    </div>
  )
}

export default Details