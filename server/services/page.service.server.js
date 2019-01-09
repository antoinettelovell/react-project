module.exports = function(app) {
    const pageModel = require
    ("../models/page/page.model.server");

    //create page //post
    app.post("/api/page/", createPage);
    //get all pages for page
    app.get("/api/website/:wid/page/", findAllPagesForWebsite);
    //get page by id
    app.get("/api/page/:pid/", findPageById);
    //put //update current page
    app.put("/api/page/", updatePage); 
    //delete page
    app.delete("/api/page/:pid/", deletePage)

    async function createPage(req, res) {
        let page = req.body;
        const data = await pageModel.createPage(page);
        res.json(data);
      }
    
      async function findAllPagesForWebsite(req, res) {
        const wid = req.params["wid"];
        const data = await pageModel.findAllPagesForWebsite(wid);
        res.json(data);
      }
    
      async function findPageById(req, res) {
        const pid = req.params["pid"];
        const data = await pageModel.findPageById(pid);
        res.json(data);
      }
    
      async function updatePage(req, res) {
        const page = req.body;
        const pid = page._id;
        const data = await pageModel.updatePage(pid, page);
        res.json(data);
      }
    
      async function deletePage(req, res) {
        const pageId = req.params["pid"];
        const data = await pageModel.deletePage(pageId);
        res.json(data);
      }
    };