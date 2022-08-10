import mongoose from "mongoose";

const mongoURI = "mongodb+srv://abhinandan__wadhwa:asWQn4NJjqldwjwI@cluster0.rt1oy.mongodb.net/?retryWrites=true&w=majority/timer";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully!!")
    })
};

export default connectToMongo;