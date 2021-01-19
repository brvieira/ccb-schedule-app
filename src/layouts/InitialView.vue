<template>
  <div class="row justify-center">
    <div class="q-pa-md q-mt-lg col">
      <q-card class="my-card q-pa-lg">
        <q-card-section class="text-blue-grey-10 text-center">
          <div class="text-h4 text-weight-bold">Distribuição de Senhas</div>
          <div class="text-h6">Cultos Oficiais</div>
        </q-card-section>

        <q-card-actions align="center" class="q-pa-lg" vertical>
          <q-btn
            label="Retirar Senha"
            @click="$router.push({ name: 'senha' })"
            color="blue-grey-8"
            class="full-width"
          />
          <q-btn
            label="Devolução parcial de Senha"
            @click="$router.push({ name: 'editar_senha' })"
            color="blue-grey-8"
            class="full-width"
            style="margin-top: 24px !important"
          />
          <q-btn
            label="Devolver Senha"
            @click="$router.push({ name: 'devolver_senha' })"
            color="blue-grey-8"
            class="full-width"
            style="margin-top: 24px !important"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "InitialView"
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  margin: auto
</style>
