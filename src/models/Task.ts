import type { st } from "vue-router/dist/router-CWoNjPRp.mjs"

  export interface TaskOptions{
    title?: string
    description?: string
  }

  export class Task {
    static currentId: number = 1
    id: number
    title: string
    description: string

    constructor(options: TaskOptions) {
      this.id = Task.currentId++
      this.title = options.title || 'New Task'
      this.description = options.description || 'This is a sample description'
    }
  }

  export class TaskList{
    name: string
    tasks: Task[]

    constructor(name: string) {
      this.tasks = []
      this.name = name
    }

    addTask(options: TaskOptions) {
      const newTask = new Task(options);
      this.tasks.push(newTask);
      return newTask;
    }

    removeTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }