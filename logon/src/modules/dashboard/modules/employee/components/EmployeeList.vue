<template>
  <div>
    <v-card>
      <v-card-title>
        <v-btn class="ma-2" text icon color="green" @click="add">
          <v-icon>person_add</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Buscar" single-line hide-details></v-text-field>

      </v-card-title>

      <v-card-text>
        <v-simple-table dense>
          <thead>
            <tr>
              <th class="text-left">Avatar</th>
              <th class="text-left">Nome</th>
              <th class="text-left">CPF</th>
              <th class="text-left">Data Nascimento</th>
              <th class="text-left">Função</th>
              <th class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.CPF }}</td>
              <td>{{ item.data_nascimento }}</td>
              <td>{{ item.cargo }}</td>
              <td class="text-center">
                <v-btn class="ma-2" text icon color="orange">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn class="ma-2" text icon color="red">
                  <v-icon>delete_sweep</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
      <v-footer>LOGON</v-footer>
    </v-card>

    <v-layout row wrap>
      <v-flex xs12>
        <v-dialog v-model="showDialogAddEmployee" :overlay="false" max-width="800">
          <EmployeeForm />
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import EmployeeForm from "./EmployeeForm.vue";

export default {
  name: "EmployeeList",
  components: {
    EmployeeForm
  },
  data() {
    return {
      items: [
        {
          name: "Esmailton Silva Gomes",
          CPF: "123.123.000-21",
          cargo: "Gerente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        },
        {
          name: "Marcelo Ferreira dos Santos",
          CPF: "123.123.000-21",
          cargo: "Gerente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        },
        {
          name: "Danusia Maximo da Silva Souza",
          CPF: "123.123.000-21",
          cargo: "Gerente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        }
      ],
      showDialogAddEmployee: false
    };
  },
  methods: {
    add() {
      this.showDialogAddEmployee = true;
    }
  }
};
</script>

<style>
</style>