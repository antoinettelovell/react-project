module.exports = function(app) {
    //create widget
    app.post("/api/widget/", createWidget); 
    //find all widgets for widget   
    app.get("/api/page/:pid/widget/", findAllWidgetsForPage);
    //find widget by id
    app.get("/api/widget/:wgid/", findWidgetById);
    //update widget
    app.put("/api/widget/", updateWidget);	
    //delete widget
    app.delete("/api/widget/:wgid/", deleteWidget);

 
    async function createWidget(req, res) {
        let widget = req.body;
        const data = await widgetModel.createWidget(widget);
        res.json(data);
      }
    
      async function findAllWidgetsForPage(req, res) {
        const pid = req.params["pid"];
        const data = await widgetModel.findAllWidgetsForPage(pid);
        res.json(data);
      }
    
      async function findWidgetById(req, res) {
        const wgid = req.params["wgid"];
        const data = await widgetModel.findById(wgid);
        res.json(data);
      }
    
      async function updateWidget(req, res) {
        const widget = req.body;
        const wgid = widget._id;
        const data = await widgetModel.updateWidget(wgid, widget);
        res.json(data);
      }
    
      async function deleteWidget(req, res) {
        const wgid = req.params["wgid"];
        const data = await widgetModel.deleteWidget(wgid);
        res.json(data);
      }
    };
   