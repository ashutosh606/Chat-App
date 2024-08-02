const mongoose = require('mongoose');
const Chat =require("./models/chat.js");

main()
.then(()=>{
    console.log("successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats= [
{
    from:"neha",
    to:"harsh",
    msg:"hiiii",
    created_at:new Date(),
},
{
    from:"Anjali",
    to:"Mohan",
    msg:" Stop doing this",
    created_at:new Date(),
},
{
    from:"Ram",
    to:"Shyaam",
    msg:"How are you",
    created_at:new Date(),
},
{
    from:"Akhil",
    to:"Aman",
    msg:"Come fast i have one work",
    created_at:new Date(),
},
];

Chat.insertMany(chats);


