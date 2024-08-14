import TaskRepository from "./taskRepository.js";
export default class TaskController {
  constructor() {
    this.taskRepository = new TaskRepository();
  }
  async createTask(req, res, next) {
    try {
      const task = await this.taskRepository.createTask({
        ...req.body,
        userId: req.userID,
      });
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
  async getTasks(req, res, next) {
    try {
      const { status, priority, dueDate, title, description } = req.query;
      const query = { userId: req.userID };

      if (status) query.status = status;
      if (priority) query.priority = priority;
      if (dueDate) query.dueDate = dueDate;
      if (title) query.title = title;
      if (description) query.description = description;

      const tasks = await this.taskRepository.getTasks(query);
      res.json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  async updateTask(req, res, next) {
    try {
      const { id } = req.query;
      const updates = req.body;

      const task = await this.taskRepository.updateTask(
        id,
        req.userID,
        updates
      );
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
  async deleteTask(req, res, next) {
    try {
      const { id } = req.query;
      const task = await this.taskRepository.deleteTask(id, req.userID);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
}
