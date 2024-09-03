const express=require("express");
const cors=require("cors");
const {PrismaClient}=require("@prisma/client")
const app=express();
const axios = require("axios");
const prisma=new PrismaClient();
app.use(cors("*"));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("order service running");
})
 

app.get("/vieworder", async(req,res)=>{
    const allorders=await prisma.itemOrder.findMany();
    res.send(allorders);
});
 
app.get("/viewitems", (req,res)=>{
    axios.get("http://localhost:3032/getservice/ItemService").then((e)=>{
        console.log(e.data.url);
        //res.send(e.data);
        axios.get(e.data.url).then((e)=>res.send(e.data));
    });
});


app.post("/addorder",async(req,res)=>{
    
    const dataobj={
        data:{
            orderitems:req.body.orderitems,
            amount:req.body.amount,
        },
    };
    await prisma.itemOrder.create(dataobj);
    res.send("order  added successfully");
});

 app.listen(5012, (req,res)=>{
     console.log("order item service started.");
});