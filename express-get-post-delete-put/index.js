let express = require("express");
const app =express(); 
const port = 8000;
app.listen(port, ()=> console.log(`server is listening port ${port}`))


const {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController
  } = require("./controllers/control.js");


app.get('/contacts', getContactsController);
app.post('/contacts', postContactsController);
app.delete('/contacts',deleteContactsController);
app.put('/contacts', putContactsController);