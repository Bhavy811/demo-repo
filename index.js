const express = require('express')

const app = express()
//array of objects
var users = [{
    name: "Babua",
    kidneys: [{
        healthy: false
    }]
}];


//req->request and res-> response
app.get("/", function(req,res){
    // write logic to return no of kidneys and health
    const babuakidneys = users[0].kidneys;
    const numOfKidneys = babuakidneys.length;
    // try to use filter in array
    let numOfHealthyKidneys =0;
    for(let i = 0; i<babuakidneys.length; i++){
        if(babuakidneys[i].healthy){
            numOfHealthyKidneys +=1;
        }
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.use(express.json()) //to parse the body
// put new kidney
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;  //input
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        "msg" : "done!"
    })
})

function numUnhealthy(){
    let atleastOneUnhealthyKidney = false;
    for( let i =0; i<users[0].kidneys.length; i++)
        {
         if(users[0].kidneys[i].healthy === false)
         {
            atleastOneUnhealthyKidney = true;
         }
        }
        return atleastOneUnhealthyKidney;
}

// convert all kidneys to healthy
app.put("/", function(req, res){
    // when all are healthy then send 411
    // only if atleast 1 bad kidney is there do this
    for( let i =0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})  // send empty data so that postman is not hung
})

//remove all unhealthy kidneys
app.delete("/", function(req, res){
    // you should return 411 status code for wrong ip when user has 0 unhealthy kidneys
    if(numUnhealthy()){
        // only if atleast 1 bad kidney is there do this
    const newKidneys = [];
        for(let i =0; i < users[0].kidneys.length; i++)
            {
                if(users[0].kidneys[i].healthy)
                {
                    newKidneys.push({
                        healthy: true
                    })
                }
            }
            users[0].kidneys = newKidneys;
            res.json({msg:"all unhealthy deleted"})
         // send empty data so that postman is not hung
    }else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
})

app.listen(3000)





// function sum(n){
//     let ans =0;
//     for( let i = 1; i<=n ; i++)
//     {
//         ans +=i
//     }
//     return ans;
// }
// app.get("/", (req, res)=>{
//     const n = req.query.n
//     const ans = sum(n)
//     res.send("hi your ans is: " + ans)
// })