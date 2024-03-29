


// recupero tutti gli elementi del database
app.get("/calendario", async (req, res) => {
    try {
      const allTodos = await db.many("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (error) {
      console.error(error.message);
    }
  });
  // recuper un singolo elemento del database
  app.get("/calendario/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await db.one("SELECT * FROM todo WHERE todo_id = $1", [
        id,
      ]);
      res.json(todo.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  });
  //inserisco un todo
  app.post("/calendario", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await db.one(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  //cancello un elemento dal database
  app.delete("/calendario/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await db.one("DELETE FROM todo WHERE todo_id = $1", [
        id,
      ]);
      res.json("task eliminato");
    } catch (err) {
      console.error(err.message);
    }
  });
  app.delete("/calendario/", async (req, res) => {
    try {
      const deleteAlltask = await db.many("DELETE FROM todo ",);
      res.json("tutti i Todo eliminati");
    } catch (err) {
      console.error(err.message);
    }
  });
  //aggiorno un dato del database
  app.put("/calendario/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = await db.one(
        "UPDATE todo SET description =$1 WHERE todo_id=$2",
        [description, id]
      );
      res.json("oggetto aggiornato");
    } catch (err) {
      console.error(err.message);
    }
  });