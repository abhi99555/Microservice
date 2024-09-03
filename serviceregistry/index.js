const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors("*"));
app.use(express.json());
const services=[];

app.get("/", (req,res)=>{
    res.send("service registry page");
});
 

// app.get("/viewbill", async(req,res)=>{
//     const allbills=await prisma.billinfo.findMany();
//     res.send(allbills);
// });
 


app.post("/register",(req,res)=>{
    
    const servicename=req.body.servicename;
    const url=req.body.url;
    const servicedata={
        servicename:servicename,
        url:url,
    
    };
    services.push(servicedata);
    res.send(`service with name ${servicename} and url ${url} registered`);
});

app.get("/getservice/:servicename",(req,res)=>{
    const servicedata = services.find((e)=>e.servicename==req.params.servicename)
    if(servicedata){
        res.send(servicedata)
    }
    else{
        res.send("Service not found");
    }
});

app.get("/services",(req,res)=>{
    res.send(services);
})

 app.listen(3032, (req,res)=>{
     console.log("service registry running.");
});

