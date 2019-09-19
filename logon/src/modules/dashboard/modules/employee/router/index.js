const Employee = () => import('./../views/Employee.vue')

export default [
  {
    path: 'employee',
    component: Employee,
    meta: {
      requiresAuth: true
    }
  }
]
