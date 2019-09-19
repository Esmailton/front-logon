<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <EmployeeList />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script >
import EmployeeForm from "./../components/EmployeeForm.vue";
import EmployeeList from "./../components/EmployeeList.vue";

export default {
  name: 'Employee',
  components: {
    EmployeeForm,
    EmployeeList
  }
};
</script>