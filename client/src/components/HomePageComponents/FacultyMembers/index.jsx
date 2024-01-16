import React from 'react'
import "./index.scss"
import CardFaculty from '../../CardFaculty'
const Faculty = () => {
  return (
    <section id='faculty'>
      <div className="header">
  <h2>Faculty Members</h2>
  <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
</div>
<div className="container">
  <div className="row">
  <div className='col-lg-3 col-md-6 col-12'>
  <CardFaculty />
</div>
<div className='col-lg-3 col-md-6 col-12'>
  <CardFaculty />
</div>  
<div className='col-lg-3 col-md-6 col-12'>
  <CardFaculty />
</div>  
<div className='col-lg-3 col-md-6 col-12'>
  <CardFaculty />
</div>    
  </div>
</div>

    </section>
  )
}

export default Faculty