<template>
 
  <v-app>
    <v-main>
      <v-container class="fill-height bg-grey-lighten-5" max-width="1200" >
        <div class="mx-auto">
          <v-row> 
            <v-col v-for="category in [todos, progress, dones]" cols="4" >
              <h2>{{category.name}}</h2>

               <draggable 
                group="tasks" 
                class="h-100 bg-grey-lighten-4"
                v-model="category.tasks"
                item-key="id"
                animation="300"

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
                    <button class="btn btn-secondary" @click="() => category.addTask(globalId++) ">Add</button>
                  </div>
                </template>

              </draggable>
            </v-col>
          </v-row>  
          <v-row> 
            <v-list >
            {{ todos.tasks }}
            </v-list>
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
  todos.value.addTask(globalId++, 'Sample Task 2', 'This is a sample task description.')
  todos.value.addTask(globalId++, 'Sample Task 3', 'This is a sample task description.')

  progress.value.addTask(globalId++, 'Sample Task 4', 'This is another sample task description.')
  progress.value.addTask(globalId++, 'Sample Task 5', 'This is lol sample task description.')
  progress.value.addTask(globalId++, 'Sample Task 6', 'asdasd.')

  dones.value.addTask(globalId++, 'Sample Task 7', 'This is another sample task description.')



</script>

