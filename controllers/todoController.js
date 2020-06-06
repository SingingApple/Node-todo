module.exports = (app) => {
  const data = [{ item: "Buy milk" }, { item: "Play mario" }];
  app.get("/todo", (req, res) => {
    res.render("todo", { data });
  });

  app.post("/todo", (req, res) => {});

  app.delete("/todo", (req, res) => {});
};
