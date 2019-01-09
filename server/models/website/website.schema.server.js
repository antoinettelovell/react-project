const mongoose = require("mongoose");
    const WebsiteSchema = mongoose.Schema(
    {
    name: String,
    developerId: {type: mongoose.Schema.Types.ObjectId, ref:
    "UserModel"},
    description: String,
    dataCreated: {type: Date, default: Date.now},
},
    {collection: "website"}
);
module.exports = WebsiteSchema;