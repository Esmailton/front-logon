<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field name="name" label="Nome Completo" id="id"></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field name="cpf" label="CPF" id="id"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field name="dataNascimento" label="Data Nascimento" id="dataNascimento"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="5">
            <v-text-field name="endereco" label="Endereço" id="endereco"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field name="bairro" label="Bairro" id="bairro"></v-text-field>
          </v-col>

          <v-col cols="12" sm="1">
            <v-text-field name="numero" label="Número" id="numero"></v-text-field>
          </v-col>

          <v-col cols="12" sm="2">
            <v-text-field name="cep" label="CEP" id="numero"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field name="cidade" label="cidade" id="numero"></v-text-field>
          </v-col>

          <v-col cols="12" sm="1">
            <v-text-field name="uf" label="UF" id="id"></v-text-field>
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
      <v-btn color="success">Salvar</v-btn>
      <v-btn color="warning">Limpar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>