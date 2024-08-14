import TaskModel from "./taskSchema.js";
export default class TaskRepository {
  async createTask(taskData) {
    try {
      const task = new TaskModel(taskData);
      return await task.save();
    } catch (error) {
      console.log(error);
    }
  }
  async getTasks(filters) {
    try {
      const query = {};
      if (filters.userId) query.userId = filters.userId;
      if (filters.status) query.status = filters.status;
      if (filters.title) query.title = filters.title;
      if (filters.description) query.description = filters.description;
      if (filters.priority) query.priority = filters.priority;
      if (filters.dueDate) query.dueDate = filters.dueDate;

      return await TaskModel.find(query);
    } catch (error) {
      console.log(error);
    }
  }

  async updateTask(taskId, userId, updateData) {
    try {
      return await TaskModel.findOneAndUpdate(
        { _id: taskId, userId },
        updateData,
        {
          new: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async deleteTask(taskId, userId) {
    try {
      return await TaskModel.findOneAndDelete({ _id: taskId, userId });
    } catch (error) {
      console.log(error);
    }
  }
}
