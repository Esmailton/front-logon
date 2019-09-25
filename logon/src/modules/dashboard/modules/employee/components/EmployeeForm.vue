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
            <v-text-field name="name" label="Nome Completo" id="id"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field name="cpf" label="CPF" id="id"></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field name="dataNascimento" label="Data Nascimento" id="dataNascimento"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field name="endereco" label="Endereço" id="endereco"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field name="bairro" label="Bairro" id="bairro"></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field name="numero" label="Número" id="numero"></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field name="cep" label="CEP" id="cep"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field name="cidade" label="cidade" id="cep"></v-text-field>
          </v-col>

          <v-col cols="12" sm="1">
            <v-text-field name="uf" label="UF" id="id" ></v-text-field>
          </v-col>

          <v-col cols="12" sm="3">
            <v-text-field name="fone" label="Contato" id="id"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field name="email" label="E-mail" id="id"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary">SALVAR</v-btn>
      <v-btn color="red"> SAIR </v-btn>
    </v-card-actions>
    <v-footer>LOGON</v-footer>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>