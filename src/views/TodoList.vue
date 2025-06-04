<template>
  <div class="todo-list">
    <el-container class='is-vertical'>
      <HeaderNav />
      <el-main class="main"> 
        <div class="task-header">
          <el-input v-model="searchQuery" placeholder="Search Task" />
          <el-switch v-model="isCompleted" />
          <el-button type="primary" size="small" @click="clickTaskButton()">Add Task</el-button>
        </div>
        <el-skeleton v-if="isLoading" :rows="3" :animated="true" />
        <div v-if="!isLoading" class="todo-card" v-for="task in tasks" :key="task.id">
           <div class="task-card">
            <div>
              <el-checkbox v-model="task.completed" @change="completedTask(task)" />
              <span>{{ task.title }}</span>
            </div>
            <div>
              <el-button type="primary" size="small" @click="clickEditTaskButton(task)">Edit</el-button>
              <el-button type="danger" size="small" @click="deleteTask(task)">Delete</el-button>
            </div>
          </div>
        </div>
      </el-main>

      <el-dialog
        :title="isEditing ? 'Edit Task' : 'Add Task'"
        :visible.sync="showCreateModal"
        width="500px"
        :before-close="beforeClose"
      >
        <el-form :model="taskForm" label-width="100px">
          <el-form-item label="Title">
            <el-input v-model="taskForm.title" />
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="taskForm.description" type="textarea" />
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
  import HeaderNav from '@/components/layout/HeaderNav.vue'

  export default {
    name: 'TodoList',
    components: {
      HeaderNav
    },
    data(){
      return {
        searchQuery: '',
        isCompleted: false,
        taskForm: {
          id: null,
          title: '',
          description: '',
        },
        isLoading: false,
        isEditing: false,
        showCreateModal: false,
        originalTasks : [{
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          completed: false
        },{
          id: 2,
          title: 'Task 2',
          description: 'Description 2',
          completed: true
        }],
      }
    },
    computed: {
      tasks() {
        return this.originalTasks.filter(task => {
          const matchSearch = task.title.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchCompleted = this.isCompleted ? task.completed : true;
          return matchSearch && matchCompleted;
        })
      },
    },
    mounted() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    methods: {
      clickTaskButton() {
        this.showCreateModal = true
        this.isEditing = false
      },
      clickEditTaskButton(task) {
        this.showCreateModal = true
        this.isEditing = true
        this.taskForm = {...task}
      },

      beforeClose() {
        this.showCreateModal = false
        if(this.isEditing) {
          this.resetForm();
        }
      },

      resetForm() {
        this.taskForm = {
          id: null,
          title: '',
          description: '',
        }
        this.isEditing = false
      },
      handleSubmit() { 
        if(this.isEditing) { 
          this.originalTasks = this.originalTasks.map(task => task.id === this.taskForm.id ? this.taskForm : task)
          this.$message.success('Task updated successfully')  
        } else {
          this.originalTasks.push({
            ...this.taskForm,
            id: new Date().getTime(),
          })
          this.$message.success('Task created successfully')
        }
        this.resetForm()
        this.showCreateModal = false
      },
      deleteTask(task) {
        this.$confirm('Are you sure you want to delete this task?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.originalTasks = this.originalTasks.filter(t => t.id !== task.id)
          this.$message.success('Task deleted successfully')
        }).catch(() => {
          this.$message.info('Delete canceled')
        })
      },

      completedTask(task) {
        this.originalTasks = this.originalTasks.map(t => t.id === task.id ? {...t, completed: !task.completed} : t)
      }
      
    }
  }
</script>

<style scoped>
  .todo-list {
    min-height: 100vh;
  }

  .todo-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #f0f2f5;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 16px;
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    gap: 16px;
  }
</style>
