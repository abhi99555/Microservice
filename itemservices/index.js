const express=require("express");
const cors=require("cors");
const {PrismaClient}=require("@prisma/client")
const app=express();
const prisma=new PrismaClient();
app.use(cors("*"));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("This is itemservice");
})
 

app.get("/viewitems", async(req,res)=>{
    const allitems=await prisma.item.findMany();
    res.send(allitems);
});
 


app.post("/additem",async(req,res)=>{
    let itname=req.body.itemName;
    let pr=req.body.price;
    let dataobj={
        data:{
            itemName:itname,
            price:pr,
        },
    };
    await prisma.item.create(dataobj);
    res.send("item added successfully");
});

 app.listen(5000, (req,res)=>{
     console.log("item service started.");
});