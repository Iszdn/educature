import React from 'react'
import "./index.scss"
import { useFormik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup';
const FormAdd = ({getData}) => {
  
async function addFeature(values) {
 const res=await axios.post("http://localhost:8000/",values)
  getData()
}


   const formik = useFormik({
    initialValues: {
      icon: '',
      title: '',
      desc: '',
      price: '',
    },
    validationSchema: Yup.object({
      icon: Yup.string()
        
        .required('Required'),
      title: Yup.string()
      
        .required('Required'),
      desc: Yup.string().required('Required'),
      price: Yup.number().required('Required').positive("price must be positive"),
    }),
    
    onSubmit: (values,{resetForm}) => {
      addFeature(values)
      resetForm()
    },
  });
  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="icon">icon</label>
      <input
        id="icon"
        name="icon"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.icon}
      />
      {formik.touched.icon && formik.errors.icon ? (
        <div>{formik.errors.icon}</div>
      ) : null}

      <label htmlFor="title"> title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}


      <label htmlFor="desc">desc</label>
      <input
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.desc}
      />
      {formik.touched.desc && formik.errors.desc ? (
        <div>{formik.errors.desc}</div>
      ) : null}


           <label htmlFor="price">price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <button className='btn' type="submit">Add</button>
    </form> 
    </div>
   
  )
}

export default FormAdd

