
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

            <h2 v-if="!props.task.isEditing" class="text-h5 font-weight-bold">
            {{props.task.title}}
            </h2>
            <div v-else>
                <v-text-field v-model="props.task.title" @keydown.enter="emit('save-task')" label="Edit Title" dense></v-text-field>
            </div>
        </template>

        <template #text>
            <div v-if="!props.task.isEditing" class="text-1">
            {{props.task.description}} 
            </div>
            <div v-else>
                <v-textarea v-model="props.task.description" @keydown.enter="emit('save-task')" label="Edit Description" dense></v-textarea>
            </div>
        </template>

        <template #actions>
            <v-btn v-if="!props.task.isEditing" icon="mdi-delete" @click="emit('delete-task', props.task.id)"></v-btn>
            <v-btn v-if="!props.task.isEditing" @click="emit('edit-task', props.task.id)">Edit</v-btn>
            <v-btn v-else @click="emit('save-task')">Save</v-btn>
        </template>

    </v-card>

</template>

<script setup>
    import { Task, TaskList } from '../models/Task';
    const props = defineProps({
        task: Task
    });

    const emit = defineEmits(['delete-task', 'add-task', 'edit-task', 'save-task']);
</script>
