const mongoose = require("mongoose");
const dbroute= "mongodb+srv://brian:1234@arp-entregable-so7mn.mongodb.net/entregable?retryWrites=true&w=majority";

mongoose.connect(dbroute,
                { useNewUrlParser: true },
                (err)=>{
                    if(!err){
                        console.log("success");
                    }
                });