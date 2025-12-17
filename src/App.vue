<template>
 
  <v-app>
    <v-main class="bg-grey-lighten-3">
      <h1 class="text-center my-4">Kanban Board</h1>

      <h3 class="text-center mb-6">The kanban-board below features dragability and editing capabilities</h3>
      <v-container fluid class=" fill-height align-start" width="1200">

        
        <div class="mx-auto">
          <v-row> 
            <v-col v-for="category in categories" cols="4" md=4 min-width="250" >
              <v-sheet
              class="bg-white rounded-lg pa-4"
              elevation="1"
              width="300"
              >
              <h2 class="mb-4">{{category.name}}</h2>

               <draggable 
                group="tasks" 
                class="h-100"
                v-model="category.tasks"
                item-key="id"
                animation="250"
                > 
               
                <template #item="{element}">
                  <task-card :task="element" :isEditing="isTaskEditing(element.id)"
                  @delete-task="(id: number) => category.removeTask(id)" 
                  @edit-task="(id: number) => setTaskEditing(element.id)"
                  @save-task="() => setTaskEditing(null)"
                  />
                </template> 

                <template #footer>
                  <div class="btn-group list-group-item" role="group">
                    <v-btn  @click="() => addTaskAndEdit(category)">+</v-btn>
                  </div>
                </template>
              </draggable>
            </v-sheet>
            </v-col>
          </v-row>  
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

  import { reactive, ref } from 'vue'
  import draggable from 'vuedraggable'
  import { Task, TaskList } from './models/Task.ts'

  const editingTaskId = ref<number | null>(null)
  const isTaskEditing = (id: number) => editingTaskId.value === id
  const setTaskEditing = (id: number | null) => {
    editingTaskId.value = id
  }
  const addTaskAndEdit = (category: TaskList) => {
    const newTask = category.addTask({})
    editingTaskId.value = newTask.id
  }

  

  const todos = new TaskList('To Do')
  const progress = new TaskList('In Progress')
  const done = new TaskList('Done')

  todos.addTask({title: 'Sample Task 1', description: 'This is a sample task description.'})
  todos.addTask({title: 'Sample Task 2', description: 'This description is short.'})
  todos.addTask({title: 'Sample Task 3', description: 'This description is long because it has more words and is longer.'})
  
  progress.addTask({title: 'Sample Task 4', description: 'This is another sample task description.'})
  progress.addTask({title: 'Sample Task 5', description: 'This description is long because it has more words and is longer.'})
  progress.addTask({title: 'Sample Task 6', description: 'This description is short.'})

  done.addTask({title: 'Sample Task 7', description: 'This is another sample task description.'})
  done.addTask({title: 'Sample Task 8', description: 'This description is short.'})

  const categories = reactive([todos, progress, done])

</script>

