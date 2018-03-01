let app = require("./app")
let port = process.env.port || 3000;






let server = app.listen(port, ()=>{
    console.log(`Express server is listening in ${port}`)
})