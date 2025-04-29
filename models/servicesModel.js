import mongoose from "mongoose";

const ServicesSchema = mongoose.Schema({

    name: {
        type: String,
        required : true,
    },

    Images : [
        {
            type : String
        }
    ],

    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },

    duration : {
        type : String,
        required : true
    },

},

{ timestamps: true } 

)

const Service = mongoose.model("Service", ServicesSchema)

export default Service;
