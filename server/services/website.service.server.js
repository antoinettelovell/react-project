module.exports = function(app) {
    var websiteModel = require
    ("../models/website/website.model.server.js")

    // create website
    app.post("/api/website/", createWebsiteForUser);
    // find websites for user
    app.get("/api/user/:uid/website/", findAllWebsitesForUser);
    //find website by id
    app.get("/api/website/:wid/", findWebsiteById);
    //update website
    app.put("/api/website", updateWebsite);
    app.delete("/api/website/:wid/", deleteWebsite);

async function createWebsiteForUser(req, res) {
    let website = req.body;
    const data = await
    websiteModel.createWebsiteForUser(website);
    res.json(data);
}
async function findAllWebsitesForUser(req,res) {
    var uid = req.params["uid"];
    const data = await websiteModel.findAllWebsitesForUser
    (uid);
    res.json(data);
}
async function findWebsiteById(req, res) {
    const wid = req.params["wid"];
    const data = await
    websiteModel.findWebsiteById(wid);
    res.json(data);
}


async function updateWebsite(req, res) {
    const website = req.body;
    const wid = website._id;
    const data = await websiteModel.updateWebsite
    (wid,website);
    res.json(data);
}

async function deleteWebsite(req, res) {
    const websiteId = req.params["wid"];
    const data = await websiteModel.deleteWebsite
    (websiteId);
    res.json(data);
}
}