class CircuitBreaker{
    constructor(options){
        this.failureThreshold=options.failureThreshold;
        this.timeout=options.timeout;
        this.failCount=0;
        this.state="closed"
    }
 
    async execute(func){
        try{
            return await func()
        }
        catch(error){
            this.failureCount++;
        }
        if(this.failCount>=this.failureThreshold){
            this.state=="open";
            setTimeout(()=>{
                this.state=="half-open"
                this.failureCount=0;    
            },this.timeout)
 
            throw error
        }
    }
 
    async test(){
        if(this.state="half-open"){
            try{
                await this.execute(()=>Promise.resolve())
                this.state=="closed"
            }
            catch(error){
                this.state=="open"
            }
        }
    }
}
module.exports=CircuitBreaker;