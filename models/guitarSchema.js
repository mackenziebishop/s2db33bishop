const mongoose = require("mongoose")
const guitarSchema = mongoose.Schema({guitar_type: String, size: String, price: Number
})

module.exports = mongoose.model("Guitar", guitarSchema)