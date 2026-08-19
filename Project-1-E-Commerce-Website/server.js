require("dotenv").config();
const express=require("express"),mongoose=require("mongoose"),path=require("path"),cors=require("cors");
const app=express();
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("MongoDB connected")).catch(e=>console.log(e.message));
app.use(cors());app.use(express.json());app.use(express.static(path.join(__dirname,"public")));
app.use("/api/auth",require("./routes/auth"));app.use("/api/products",require("./routes/products"));app.use("/api/orders",require("./routes/orders"));
app.get("*",(_,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(process.env.PORT||5010,()=>console.log("MarketMate running"));