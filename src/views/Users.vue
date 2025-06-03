<template>
  <div class="users">
    <el-container>
      <el-header class="header">
        <h1>Users Management</h1>
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/users">Users</router-link>
        </nav>
      </el-header>
      
      <el-main class="main">
        <el-card>
          <div slot="header" class="card-header">
            <span>Users List</span>
            <el-button type="primary" size="small" @click="showCreateModal = true">
              <i class="el-icon-plus"></i>
              Add User
            </el-button>
          </div>
          
          <!-- Search and filters -->
          <div class="search-section">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-input
                  v-model="searchQuery"
                  placeholder="Search users..."
                  prefix-icon="el-icon-search"
                  @input="handleSearch"
                />
              </el-col>
              <el-col :span="6">
                <el-select v-model="statusFilter" placeholder="Filter by status" clearable>
                  <el-option
                    v-for="status in userStatuses"
                    :key="status.value"
                    :label="status.label"
                    :value="status.value"
                  />
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-button @click="resetFilters">Reset</el-button>
              </el-col>
            </el-row>
          </div>
          
          <!-- Users table -->
          <el-table
            :data="users"
            v-loading="loading"
            style="width: 100%"
            :default-sort="{prop: 'createdAt', order: 'descending'}"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="email" label="Email" />
            <el-table-column prop="role" label="Role">
              <template slot-scope="scope">
                <el-tag :type="getRoleTagType(scope.row.role)">
                  {{ scope.row.role }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="Status">
              <template slot-scope="scope">
                <el-tag :type="getStatusTagType(scope.row.status)">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createdAt" label="Created At">
              <template slot-scope="scope">
                {{ formatDate(scope.row.createdAt) }}
              </template>
            </el-table-column>
            <el-table-column label="Actions" width="200">
              <template slot-scope="scope">
                <el-button size="mini" @click="editUser(scope.row)">
                  Edit
                </el-button>
                <el-button size="mini" type="danger" @click="deleteUser(scope.row)">
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          
          <!-- Pagination -->
          <div class="pagination-wrapper">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.page"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="pagination.limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pagination.total"
            />
          </div>
        </el-card>
        
        <!-- Create/Edit User Modal -->
        <el-dialog
          :title="isEditing ? 'Edit User' : 'Create User'"
          :visible.sync="showCreateModal"
          width="500px"
        >
          <el-form
            :model="userForm"
            :rules="userFormRules"
            ref="userForm"
            label-width="100px"
          >
            <el-form-item label="Name" prop="name">
              <el-input v-model="userForm.name" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="userForm.email" />
            </el-form-item>
            <el-form-item label="Role" prop="role">
              <el-select v-model="userForm.role" style="width: 100%">
                <el-option
                  v-for="role in userRoles"
                  :key="role.value"
                  :label="role.label"
                  :value="role.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Status" prop="status">
              <el-select v-model="userForm.status" style="width: 100%">
                <el-option
                  v-for="status in userStatuses"
                  :key="status.value"
                  :label="status.label"
                  :value="status.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
          
          <span slot="footer" class="dialog-footer">
            <el-button @click="showCreateModal = false">Cancel</el-button>
            <el-button type="primary" @click="submitUser" :loading="submitLoading">
              {{ isEditing ? 'Update' : 'Create' }}
            </el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { UserTypes, UserStatus, ValidationRules } from '@/types'
import { DATE_FORMAT } from '@/config/constants'

export default {
  name: 'Users',
  data() {
    return {
      searchQuery: '',
      statusFilter: '',
      showCreateModal: false,
      isEditing: false,
      submitLoading: false,
      userForm: {
        id: null,
        name: '',
        email: '',
        role: UserTypes.USER,
        status: UserStatus.ACTIVE
      },
      userFormRules: {
        name: [ValidationRules.required('Name is required')],
        email: [
          ValidationRules.required('Email is required'),
          ValidationRules.email()
        ],
        role: [ValidationRules.required('Role is required')],
        status: [ValidationRules.required('Status is required')]
      },
      userRoles: [
        { label: 'Admin', value: UserTypes.ADMIN },
        { label: 'User', value: UserTypes.USER },
        { label: 'Moderator', value: UserTypes.MODERATOR }
      ],
      userStatuses: [
        { label: 'Active', value: UserStatus.ACTIVE },
        { label: 'Inactive', value: UserStatus.INACTIVE },
        { label: 'Pending', value: UserStatus.PENDING },
        { label: 'Suspended', value: UserStatus.SUSPENDED }
      ],
      // Mock data for demo
      mockUsers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          role: UserTypes.ADMIN,
          status: UserStatus.ACTIVE,
          createdAt: '2023-01-15'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: UserTypes.USER,
          status: UserStatus.ACTIVE,
          createdAt: '2023-02-20'
        },
        {
          id: 3,
          name: 'Bob Wilson',
          email: 'bob@example.com',
          role: UserTypes.MODERATOR,
          status: UserStatus.PENDING,
          createdAt: '2023-03-10'
        }
      ]
    }
  },
  
  computed: {
    ...mapGetters('users', ['allUsers', 'pagination']),
    ...mapGetters(['loading']),
    
    users() {
      // For demo purposes, use mock data
      let filteredUsers = [...this.mockUsers]
      
      if (this.searchQuery) {
        filteredUsers = filteredUsers.filter(user =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
      
      if (this.statusFilter) {
        filteredUsers = filteredUsers.filter(user => user.status === this.statusFilter)
      }
      
      return filteredUsers
    }
  },
  
  methods: {
    ...mapActions('users', ['fetchUsers', 'createUser', 'updateUser', 'deleteUser']),
    
    handleSearch() {
      // Debounce search
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.loadUsers()
      }, 300)
    },
    
    handleSizeChange(size) {
      console.log('Page size changed:', size)
      this.loadUsers()
    },
    
    handleCurrentChange(page) {
      console.log('Current page changed:', page)
      this.loadUsers()
    },
    
    resetFilters() {
      this.searchQuery = ''
      this.statusFilter = ''
      this.loadUsers()
    },
    
    loadUsers() {
      // In real app, this would call the API
      console.log('Loading users with filters:', {
        search: this.searchQuery,
        status: this.statusFilter
      })
    },
    
    editUser(user) {
      this.isEditing = true
      this.userForm = { ...user }
      this.showCreateModal = true
    },
    
    async submitUser() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          this.submitLoading = true
          try {
            if (this.isEditing) {
              // Update existing user
              const index = this.mockUsers.findIndex(u => u.id === this.userForm.id)
              if (index !== -1) {
                this.mockUsers.splice(index, 1, { ...this.userForm })
              }
              this.$message.success('User updated successfully')
            } else {
              // Create new user
              const newUser = {
                ...this.userForm,
                id: this.mockUsers.length + 1,
                createdAt: new Date().toISOString().split('T')[0]
              }
              this.mockUsers.push(newUser)
              this.$message.success('User created successfully')
            }
            
            this.showCreateModal = false
            this.resetForm()
          } catch (error) {
            this.$message.error('Operation failed')
          } finally {
            this.submitLoading = false
          }
        }
      })
    },
    
    deleteUser(user) {
      this.$confirm(`Are you sure you want to delete user "${user.name}"?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        const index = this.mockUsers.findIndex(u => u.id === user.id)
        if (index !== -1) {
          this.mockUsers.splice(index, 1)
          this.$message.success('User deleted successfully')
        }
      }).catch(() => {
        this.$message.info('Delete canceled')
      })
    },
    
    resetForm() {
      this.isEditing = false
      this.userForm = {
        id: null,
        name: '',
        email: '',
        role: UserTypes.USER,
        status: UserStatus.ACTIVE
      }
      this.$refs.userForm.resetFields()
    },
    
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    
    getRoleTagType(role) {
      const types = {
        [UserTypes.ADMIN]: 'danger',
        [UserTypes.MODERATOR]: 'warning',
        [UserTypes.USER]: 'info'
      }
      return types[role] || 'info'
    },
    
    getStatusTagType(status) {
      const types = {
        [UserStatus.ACTIVE]: 'success',
        [UserStatus.INACTIVE]: 'info',
        [UserStatus.PENDING]: 'warning',
        [UserStatus.SUSPENDED]: 'danger'
      }
      return types[status] || 'info'
    }
  },
  
  created() {
    this.loadUsers()
  },
  
  beforeDestroy() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
  }
}
</script>

<style scoped>
.users {
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #409eff;
  color: white;
  padding: 0 20px;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav a:hover,
.nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.main {
  padding: 20px;
  background-color: #f5f7fa;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-section {
  margin-bottom: 20px;
}

.pagination-wrapper {
  margin-top: 20px;
  text-align: center;
}
</style> 