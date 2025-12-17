/*  
@vitest-environment happy-dom
 */

import { vuetify } from '../plugins/vuetify'

import { describe, it, expect, test, isTruthy} from 'vitest'
import { mount, config } from '@vue/test-utils'
import { Task } from '../models/Task'
import { ref } from 'vue'
import { TaskList } from '../models/Task'


config.global.plugins = [vuetify]

import TaskCard from './TaskCard.vue'


const todos = ref(new TaskList('To Do'))
todos.value.addTask(1, 'Sample Task 1', 'This is a sample task description.')

describe('TaskCard tests', () => {
    const wrapper = mount(TaskCard, {
        props: {
            Tasklist: todos.value,
        }
    })
})
