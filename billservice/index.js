const express=require("express");
const cors=require("cors");
const {PrismaClient}=require("@prisma/client")
const app=express();
const prisma=new PrismaClient();
app.use(cors("*"));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Billing service running");
})
 

app.get("/viewbill", async(req,res)=>{
    const allbills=await prisma.billinfo.findMany();
    res.send(allbills);
});
 


app.post("/addbill",async(req,res)=>{
    
    const dataobj={
        data:{
            orderdetails:req.body.orderdetails,
            amount:req.body.amount,
        },
    };
    await prisma.billinfo.create(dataobj);
    res.send("Bill  added successfully");
});

 app.listen(5013, (req,res)=>{
     console.log("Bill service started.");
});