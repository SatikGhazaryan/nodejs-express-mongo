let express = require("express");
const app =express(); 
const port = 8000;
app.listen(port, ()=> console.log(`server is listening port ${port}`))

const contacts=[
    {
        id:1,
        title:'this is contact 1'
    },
    {
        id:3,
        title:'this is contact 2'
    }
]


function getContactsController(req, res){
    res.send([
        {
            data:contacts
        }
    ])
}
function postContactsController(req,res){
    contacts.push(
        {
            id:3,
            title:'this is contact 3'
        }
    )
        
   
}

function deleteContactsController(req,res){
    contacts.shift()
}

function putContactsController(req, res){
    contacts=contacts.forEach(element => {
        if(element.id===3){
            element.id=4
        }
    });
}

app.get('/contacts', getContactsController);
app.post('/contacts', postContactsController);
app.delete('/contacts',deleteContactsController);
app.put('/contacts', putContactsController);