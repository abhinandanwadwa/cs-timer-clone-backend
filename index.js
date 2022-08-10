import express  from "express";
import bodyParser from "body-parser";
import connectToMongo from "./db.js";
import cors from "cors";
import userRoutes from "./routes/user.js";

connectToMongo();


const app = express();
app.use(cors());
const PORT = 5000;

app.use(bodyParser.json());



app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send("App Is Running amazingly!!");
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running at port: http://localhost:${PORT}`);
});