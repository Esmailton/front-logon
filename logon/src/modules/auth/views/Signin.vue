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
                :error-messages="userNameErrors"
                :success="!$v.user.user_name.$invalid"
                v-model.trim="$v.user.user_name.$model"
                ></v-text-field>
              <v-text-field 
                prepend-icon="lock" 
                name="password" 
                label="Senha" 
                type="password"
                :error-messages="passwordErrors"
                :success="!$v.user.password.$invalid"
                v-model.trim="$v.user.password.$model"
                ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            :disabled="$v.$invalid"
            color="primary" 
            @click="submit">Entrar</v-btn>
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
  computed: {
    userNameErrors () {
      const errors = []
      const userName = this.$v.user.user_name
      if (!userName.$dirty) {return errors}
      !userName.required && errors.push('É necessario um usuario para ter acesso ao sistema')
      return errors
    },
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) {return errors}
      !password.required && errors.push(`A senha é obrigatoria para ter acesso ao sistema`)
      !password.minLength && errors.push(`Sua senha deve conter pelo menos 4 caracteres`)
      return errors
    }
  },
  methods: {
    log() {
      console.log('Vuelidate: ', this.$v)
    },
    submit () {
      console.log('User: ', this.user )
    }
  }
};
</script>
