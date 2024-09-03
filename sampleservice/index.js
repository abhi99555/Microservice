const express=require("express");
const cors=require("cors");
const app=express();
const requestfailure=require("./RequestFailureSimulator");
const CircuitBreaker=require("./circuitbreaker");

const circuitbreaker=new CircuitBreaker({
    failureThreshold: 3,
    timeout:3000,
});
app.use(express.json());
app.use(cors("*"));
simulator=new requestfailure();
app.get("/sample",async(req,res)=>{
    try{
    const allitems=await circuitbreaker.execute(()=>simulator.findMany());
    res.send(allitems);
    }
    catch(error)
    {
        res.status(500).send("Error: "+error.message);
    }
});
app.get("/mysample",(req,res)=>{
    res.send("mysample")
})
app.listen(5055,()=>{
    console.log("Server is running on port 5055");
})



