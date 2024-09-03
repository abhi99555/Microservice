class RequestFailureSimulator{
    constructor()
    {
        this.failurecount=0;
    }
    async findMany()
    {
        if(this.failurecount<3)
        {
            this.failurecount++;
            throw new Error("simulated error");
        }
        return [];
    }
}

module.exports=RequestFailureSimulator;