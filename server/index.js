import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 8000
app.use(cors())
app.use(express.json())

const { Schema } = mongoose;

const EduSchema = new Schema({
  icon: String, 
  title: String,
  desc: String,
  price: Number,
  
});
const Features = mongoose.model('features', EduSchema);
app.get('/', async(req, res) => {
 try {
    const features=await Features.find({})
    res.json(features)
 } catch (error) {
    res.status(500).json(error)
 }
})
app.get('/:id', async(req, res) => {
    try {
       const  {id}=req.params
       const feature=await Features.findById(id)
       res.json(feature)
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.post('/', async(req, res) => {
    try {
       const feature=Features({
         icon:req.body.icon, 
  title:req.body.title,
  desc:req.body.desc,
  price:req.body.price,
       })
       await feature.save()
       res.status(200).json("created")
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.delete('/:id', async(req, res) => {
    try {
        const  {id}=req.params
        const feature=await Features.findByIdAndDelete(id)
        res.status(200).json("deleted")
       
    } catch (error) {
       res.status(500).json(error)
    }
   })

   mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})