const express = require('express')
const app = express()
const port = 3001
var users = [{
    name: "bhola",
    kidney: [{
        health: false
    }]
}]
app.get("/", function(req, res){
    const totKidney = users[0].kidney.length
    var healthyKidney = 0;
    for( let i = 0; i< totKidney; i++)
    {
        if(users[0].kidney[i].health === true)
        {
            healthyKidney += 1;
        }
    }
    const unhealthyKidney = totKidney - healthyKidney;
    res.json({totKidney, healthyKidney, unhealthyKidney})
})

app.use(express.json())
app.post("/", function(req, res){
    
})
app.listen(port)