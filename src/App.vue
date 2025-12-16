<template>
 
  <v-app>
    <v-main class="bg-grey-lighten-3">
      <h1 class="text-center my-4">Kanban Board</h1>

      <h3 class="text-center mb-6">The kanban-board below features dragability and editing capabilities</h3>
      <v-container fluid class=" fill-height align-start", width="1200">

        
        <div class="mx-auto">
          <v-row> 
            <v-col v-for="category in [todos, progress, dones]" cols="4" md=4 min-width="250" >
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
                  <task-card :task="element" 
                  @delete-task="(id: number) => category.removeTask(id)" 
                  @edit-task="(id: number) => element.isEditing = true"
                  @save-task="() => element.isEditing = false"
                  />
                </template> 

                <template #footer>
                  <div class="btn-group list-group-item" role="group">
                    <v-btn  @click="() => category.addTask(globalId++, '', '', true) ">+</v-btn>
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
  //  

  import { ref } from 'vue'
  import draggable from 'vuedraggable'
  import { Task, TaskList } from './models/Task.ts'

  let globalId = 0
  const todos = ref(new TaskList('To Do'))
  const progress = ref(new TaskList('In Progress'))
  const dones = ref(new TaskList('Done'))
  
  todos.value.addTask(globalId++, 'Sample Task 1', 'This is a sample task description.')
  todos.value.addTask(globalId++, 'Sample Task 2', 'This description is short.')
  todos.value.addTask(globalId++, 'Sample Task 3', 'This description is long because it has more words and is longer.')

  progress.value.addTask(globalId++, 'Sample Task 4', 'This is another sample task description.')
  progress.value.addTask(globalId++, 'Sample Task 5', 'This description is long because it has more words and is longer.')
  progress.value.addTask(globalId++, 'Sample Task 6', 'This description is short.')

  dones.value.addTask(globalId++, 'Sample Task 7', 'This is another sample task description.')



</script>

