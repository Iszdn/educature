import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/HomePageComponents/HeaderSec'
import Courses from '../../components/HomePageComponents/CoursesSec'
import Feature from '../../components/HomePageComponents/FeaturesSec'
import Faculty from '../../components/HomePageComponents/FacultyMembers'
import Fanny from '../../components/HomePageComponents/FannySpenCes'
const HomePage = () => {
  return (
    <>
<Helmet>
  <title>home</title>
</Helmet>
<Header/>
<Courses/>
<Feature/>
<Faculty/>
<Fanny/>
    </>
  )
}

export default HomePage