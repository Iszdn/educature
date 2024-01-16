import React from 'react'
import "./index.scss"
const Header = () => {
  return (
    <section id='header'>
<div className="content">
<h2>We Rank the Best Courses
on the Web</h2>
<p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope.</p>
<div className="inp">
  <input type="text" placeholder='Search Courses' />
  <div className="but">
    Search
  </div>
</div>
<div className="top">
  <h4>Top courses</h4>
  <div className="esas">
  <div>Ruby on Rails</div>
  <div>Python</div>
  <div>Marketing</div>
  <div>UI/UX Design</div>
  <div>Android</div>
  <div>Data Science</div>
  <div>Cryptocurrency</div>
  </div>
</div>
</div>
    </section>
  )
}

export default Header