import type { st } from "vue-router/dist/router-CWoNjPRp.mjs"

  export class Task {
    id: number
    title: string
    description?: string
    isEditing: boolean = false

    constructor(id: number, title: string, description?: string) {
      this.id = id
      this.title = title
      this.description = description || ''
    }
  }

  export class TaskList{
    name: string
    tasks: Task[]

    constructor(name: string) {
      this.tasks = []
      this.name = name
    }

    addTask(id: number, Title?: string, Description?: string) {
      this.tasks.push(new Task(id, Title || 'New Task', Description || 'Description here'))
    }

    removeTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }