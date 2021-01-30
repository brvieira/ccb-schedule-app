<template>
  <div class="container col">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>
    <div v-else class="content q-pa-md">
      <q-card class="q-mt-lg q-pa-sm-md q-pb-sm-lg">
        <q-card-section>
          <div class="text-h6">Mensagem</div>
        </q-card-section>
        <q-card-section>
          <q-editor
            v-model="text"
            min-height="10rem"
            :toolbar="[
              ['bold', 'italic', 'underline'],
              [
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: ['size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                }
              ]
            ]"
          />
          <div class="q-mt-lg">
            <q-btn
              :dense="$q.screen.lt.md"
              label="Salvar"
              @click="saveMessage"
              color="blue-grey-10"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-xl q-pa-sm-md q-pb-sm-lg">
        <q-card-section>
          <div class="text-h6">Exemplo</div>
        </q-card-section>
        <q-card-section>
          <q-card>
            <q-card-section class="text-white bg-orange-9">
              <div class="text-h6 text-weight-bolder">Aviso à Irmandade</div>
            </q-card-section>
            <q-card-section v-html="text" class="bg-orange-2" />
          </q-card>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { createNewMessage, getLastMessage } from "../data/messages";

export default {
  name: "MsgView",
  data() {
    return {
      text: "",
      loading: false
    };
  },
  methods: {
    async getMessage() {
      try {
        this.loading = true;

        const data = await getLastMessage();
        this.text = data.text || "";
      } catch (error) {
        console.error(error);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao carregar mensagem!"
        });
      } finally {
        this.loading = false;
      }
    },
    async saveMessage() {
      try {
        this.loading = true;

        await createNewMessage({ text: this.text });

        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Mensagem salva com sucesso!"
        });
        this.$router.go(-1);
      } catch (error) {
        console.error(error);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao salvar mensagem!"
        });
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getMessage();
  }
};
</script>
<style lang="sass" scoped>
.content
  max-width: 850px
  width: 100%
  margin: auto
</style>
