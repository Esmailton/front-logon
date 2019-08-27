<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex sx12 sm6 md4 lg3 xl3>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Logon - Autenticação</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field 
                prepend-icon="account_box" 
                name="user_name" 
                label="Usuario" 
                type="text"
                v-model.trim="$v.user.user_name.$model"
                ></v-text-field>
              <v-text-field 
                prepend-icon="lock" 
                name="password" 
                label="Senha" 
                type="password"
                v-model.trim="$v.user.password.$model"
                ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="log">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {required, minLength} from 'vuelidate/lib/validators'

export default {
  nome: 'Login',
  data: () => ({
    user: {
      user_name: '',
      password: '',
      operation_type: 'sign_in'
    }
  }),
  validations: {
    user: {
      user_name: {
        required
      },
      password: {
        required,
        minLength: minLength(4)
        }
      }
  },
  methods: {
    log() {
      console.log('Vuelidate: ', this.$v)
    }
  }
};
</script>
