
<template>

    <v-card
        class="mb-4"
        color="green-lighten-3"
        image=""
        prepend-icon=""
        rounded="lg"
        variant="elevated"
        min-height="120"
        onmouseover="cursor"
        >
        <template #title>

            <h2 v-if="!isEditing" class="text-h5 font-weight-bold">
            {{task.title}}
            </h2>
            <div v-else>
                <v-text-field v-model="task.title" @keydown.enter="emit('save-task')" label="Edit Title" dense></v-text-field>
            </div>
        </template>

        <template #text>
            <div v-if="!isEditing" class="text-1">
            {{task.description}} 
            </div>
            <div v-else>
                <v-textarea v-model="task.description" @keydown.enter="emit('save-task')" label="Edit Description" dense></v-textarea>
            </div>
        </template>

        <template #actions>
            <v-btn v-if="!isEditing" icon="mdi-delete" @click="emit('delete-task', task.id)"></v-btn>
            <v-btn v-if="!isEditing" @click="emit('edit-task', task.id)">Edit</v-btn>
            <v-btn v-else @click="emit('save-task')">Save</v-btn>
        </template>

    </v-card>

</template>

<script setup lang="ts">
    import { Task } from '@/models/Task';
    
    defineProps<{
        task: Task;
        isEditing: boolean;
    }>();
    
    const emit = defineEmits(['delete-task', 'add-task', 'edit-task', 'save-task']);
</script>
