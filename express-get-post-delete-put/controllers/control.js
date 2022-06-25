const contacts = require("./contacts.js");
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
module.exports = {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController
  };