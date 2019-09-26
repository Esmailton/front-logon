<template>
  <v-card>
    <v-card-title>
      <v-toolbar color="primary">
        <v-toolbar-title>FINCIONARIO</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-form elevation-20>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              name="name"
              label="Nome Completo"
              id="name"
              v-model="$v.item.name.$model"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field 
              name="cpf" 
              label="CPF" 
              id="cpf" 
              v-model="$v.item.cpf.$model"
              ></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field
              name="birth_date"
              label="Data Nascimento"
              id="dataNascimento"
              v-model="$v.item.birth_date.$model"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              name="address"
              label="Endereço"
              id="address"
              v-model="$v.item.address.$model"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              name="neighborhood"
              label="Bairro"
              id="neighborhood"
              v-model="$v.item.neighborhood.$model"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field
              name="number"
              label="Número"
              id="number"
              v-model="$v.item.number.$model"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field 
              name="cep" 
              label="CEP" 
              id="cep" 
              v-model="$v.item.cep.$model"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field 
              name="city" 
              label="Cidade" 
              id="city" 
              v-model="$v.item.city.$model"
              ></v-text-field>
          </v-col>

          <v-col cols="12" sm="1">
            <v-text-field 
              name="uf" 
              label="UF" 
              id="uf" 
              v-model="$v.item.uf.$model"
              ></v-text-field>
          </v-col>

          <v-col cols="12" sm="3">
            <v-text-field
              name="contact"
              label="Contato"
              id="contact"
              v-model="$v.item.contact.$model"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              name="email"
              label="E-mail"
              id="email"
              v-model="$v.item.email.$model"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn 
        color="primary" 
        :disabled="$v.$invalid"
        @click="save"
        >SALVAR</v-btn>
      <v-btn color="red">SAIR</v-btn>
    </v-card-actions>
    <v-footer>LOGON</v-footer>
  </v-card>
</template>

<script>
import { required, email, numeric, minLength } from "vuelidate/lib/validators";

export default {
  name: "EmployeeAdd",
  data: () => ({
    item: {
      name: "",
      cpf: "",
      birth_date: "",
      address: "",
      neighborhood: "",
      number: "",
      cep: "",
      city: "",
      uf: "",
      contact: "",
      email: ""
    }
  }),

  validations() {
    const validations = {
      item: {
        name: {
          required,
          minLength: minLength(5)
        },
        cpf: {
          required,
          minLength: minLength(11)
        },
        birth_date: {
          required
        },
        address: {
          required,
          minLength: minLength(5)
        },
        neighborhood: {
          required,
          minLength: minLength(3)
        },
        number: {
          required
        },
        cep: {
          required
        },
        city: {
          required,
          minLength: minLength(3)
        },
        uf: {
          required,
          minLength: minLength(2)
        },
        contact:{
          required,
          minLength: minLength(8)
        },
        email: {
          email
        }
      }
    };

    return validations
  },
  methods: {
    save() {
      console.log("Funcionarios", this.item);
    }
  }
};
</script>
