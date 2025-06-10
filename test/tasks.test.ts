import request from "supertest";
import app from "../src/index";

describe("Tasks API", () => {
  it("should create a new task", async () => {
    const res = await request(app).post("/tasks").send({ title: "Test Task" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test Task");
  });

  it("should list all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should delete a task", async () => {
    // Creamos primero
    const newTask = await request(app)
      .post("/tasks")
      .send({ title: "Delete Me" });
    const id = newTask.body.id;

    // Borramos
    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.statusCode).toEqual(204);

    // Confirmamos que no exista
    const tasksRes = await request(app).get("/tasks");
    const exists = tasksRes.body.find((t: any) => t.id === id);
    expect(exists).toBeUndefined();
  });
});
