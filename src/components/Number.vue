<template>
  <div class="container">
    <div class="full-width q-mt-lg q-pa-md">
      <div ref="content" class="my-ref">
        <q-card class="my-card">
          <q-card-section class="my-img">
            <img
              src="
            https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoccb.jpg
          "
            />
          </q-card-section>
          <q-card-section class="mid-section">
            <div class="text-h5 text-weight-medium text-center">
              Parque Industrial
            </div>
            <div class="text-body1 text-center">
              Campinas/SP
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-h1 text-weight-bolder text-center">
              {{ senhas.senha }}
            </div>
          </q-card-section>

          <q-card-section class="last-section">
            <q-card-actions align="around">
              <div
                class="text-h4  text-center text-weight-bolder"
                style="text-decoration: underline"
              >
                {{ senhas.dia_da_semana }}
              </div>
            </q-card-actions>
            <q-card-section>
              <div
                class="text-negative text-body2 text-center text-weight-bold"
              >
                Caso não for possível ir ao culto no dia agendado, por favor
                fazer a devolução da senha, até às 18:00 (às quartas e sextas
                feiras) e até às 17:00 aos domingos, assim, outros poderão
                ocupar o lugar.
              </div>
            </q-card-section>
            <q-card-actions align="around">
              <div class="text-body1 text-center">Data: {{ senhas.data }}</div>
              <div class="text-body1 text-center">
                Horário: {{ senhas.horario }}
              </div>
            </q-card-actions>
            <q-card-actions align="around">
              <div class="text-body1 text-center">
                Irmãos: {{ senhas.irmaos }}
              </div>
              <div class="text-body1 text-center">
                Irmãs: {{ senhas.irmas }}
              </div>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-px-md q-gutter-md q-mb-lg">
      <q-btn
        label="Salvar"
        v-if="salvar"
        @click="saveNumber"
        color="blue-grey-10"
      />
      <q-btn
        label="Voltar"
        v-if="voltar"
        @click="$router.push({ name: 'index' })"
        color="blue-grey-10"
      />
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";

export default {
  name: "Number",
  props: {
    senhas: {
      type: Object,
      default: {}
    },
    salvar: {
      type: Boolean,
      default: true
    },
    voltar: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    saveNumber() {
      html2canvas(this.$refs.content, {
        useCORS: true,
        scrollY: -window.scrollY
      }).then(canvas => {
        let a = document.createElement("a");
        a.href = canvas.toDataURL();
        a.download = `senha-${this.senhas.data.replaceAll("/", "-")}.png`;
        a.click();
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Senha salva com sucesso!"
        });
      });
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  margin: auto

.my-img
  padding: 50px 50px 0px 50px

.my-img img
  width: 100%

.last-section
  padding-top: 0
  padding-bottom: 35px

.mid-section
  padding-bottom: 0

.my-ref
  background-color: white
</style>
