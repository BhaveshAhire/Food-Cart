import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://FoodCart:bpahirestars@cluster0.qqdpubw.mongodb.net/foodcart ').then(()=>console.log("DB Connected"))
}