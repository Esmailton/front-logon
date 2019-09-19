<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title primary-title>FUNCIONARIOS</v-card-title>
        <v-card-text>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Avatar</th>
                <th class="text-left">Nome</th>
                <th class="text-left">CPF</th>
                <th class="text-left">Data Nascimento</th>
                <th class="text-left">Função</th>
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
                <td>{{ item.departament }}</td>
                <td>{{ item.data_nascimento }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EmployeeList",
  data() {
    return {
      items: [
        {
          name: "Esmailton Silva GOmes",
          CPF: "123.123.000-21",
          departament: "Getente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        },
        {
          name: "Marcelo Ferreira dos Santos",
          CPF: "123.123.000-21",
          departament: "Getente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        },
        {
          name: "Danusia Maximo da Silva Souza",
          CPF: "123.123.000-21",
          departament: "Getente",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          data_nascimento: "11/22/2222"
        }
      ]
    };
  }
};
</script>

<style>
</style>