<template>
  <div class="row justify-center">
    <div class="q-pa-md q-ma-lg my-stepper">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="blue-grey-8"
        animated
        :contracted="$q.screen.lt.md"
      >
        <q-step
          class="q-my-xl"
          :name="1"
          title="Informe a senha"
          color="blue-grey-8"
          icon="confirmation_number"
          active-icon="confirmation_number"
          :done="step > 1"
        >
          <div v-if="error && error_msg" class="my-section">
            <div class="text-h5 text-weight-bold text-center">
              {{ error_msg }}
            </div>
          </div>
          <div v-else class="my-section">
            <q-input
              filled
              v-model="senha"
              color="blue-grey-10"
              type="number"
              label="Senha"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a senha que deseja devolver',
                val =>
                  val > 0 ||
                  'Por favor, informe corretamente a senha, a mesma deve ser maior que 0'
              ]"
            >
              <template v-slot:append>
                <q-icon name="confirmation_number" class="cursor-pointer">
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-step>

        <q-step
          class="q-my-xl"
          :name="2"
          title="Informe a quantidade de Irmãos"
          color="blue-grey-8"
          icon="people_alt"
          active-icon="people_alt"
          :done="step > 2"
        >
          <div class="my-section">
            <q-select
              :dense="$q.screen.lt.md"
              v-model="quantidade_irmaos"
              :options="getOptions(quantidade_irmaos)"
              label="Quantidade de Irmãos"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a quantidade de irmãos'
              ]"
            >
              <template v-slot:append>
                <q-icon name="people_alt" />
              </template>
            </q-select>
          </div>
        </q-step>

        <q-step
          class="q-my-xl"
          :name="3"
          title="Informe a quantidade de irmãs"
          color="blue-grey-8"
          icon="people_alt"
          active-icon="people_alt"
          :done="step > 3"
        >
          <div class="my-section">
            <q-select
              :dense="$q.screen.lt.md"
              v-model="quantidade_irmas"
              :options="getOptions(quantidade_irmas)"
              label="Quantidade de Irmãs"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a quantidade de irmãs'
              ]"
            >
              <template v-slot:append>
                <q-icon name="people_alt" />
              </template>
            </q-select>
          </div>
        </q-step>

        <q-step
          class="q-my-xl"
          :name="4"
          title="Salve sua nova senha"
          color="blue-grey-8"
          icon="save_alt"
          active-icon="save_alt"
        >
          <div class="row justify-center">
            <Number :senhas="newSenhas" :salvar="true" :voltar="false" />
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              v-if="!error && step < 4"
              :disable="senha === null || senha === ''"
              @click="doNext"
              color="blue-grey-10"
              label="Próximo"
            />
            <q-btn
              v-if="error || step === 4"
              color="blue-grey-10"
              @click="$router.push({ name: 'index' })"
              label="Voltar ao Início"
              class="q-ml-sm"
            />
            <q-btn
              v-if="step > 1 && step < 4"
              flat
              color="blue-grey-10"
              @click="$refs.stepper.previous()"
              label="Voltar"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div>
</template>
<script>
import Number from "../components/Number";
import { getNumbers, editData } from "../data/lane";

export default {
  name: "EditNumber",
  components: { Number },
  data() {
    return {
      loading: false,
      senha: null,
      error: false,
      error_msg: null,
      quantidade_irmas: null,
      quantidade_irmaos: null,
      step: 1,
      senhas: null,
      servico: null,
      newSenhas: null
    };
  },
  methods: {
    doNext() {
      if (this.step === 1) {
        this.getNumbersData();
      } else if (this.step === 2) {
        this.$refs.stepper.next();
      } else {
        this.editNumberData();
      }
    },
    async getNumbersData() {
      try {
        const senha = this.senha;
        const data = await getNumbers(senha);

        if (data.error) {
          this.error = true;
          this.error_msg = data.error;
        } else {
          const irmaos = data.senhas.filter(s => s.tipo === "irmao");
          const irmas = data.senhas.filter(s => s.tipo === "irma");

          this.senhas = [...data.senhas];
          this.servico = { ...data.service };
          this.quantidade_irmaos = irmaos.length;
          this.quantidade_irmas = irmas.length;

          this.$refs.stepper.next();
        }
      } catch (error) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro procurar detalhes sobre a senha informada!"
        });
        console.error(error);
      }
    },
    getOptions(max) {
      let item = 0,
        options = [];

      for (item; item <= max; item++) {
        options.push(item);
      }

      return options;
    },
    async editNumberData() {
      try {
        const self = this;
        const newIrmaos = this.quantidade_irmaos;
        const newIrmas = this.quantidade_irmas;
        const senhasIrmaos = this.senhas.filter(s => s.tipo === "irmao");
        const senhasIrmas = this.senhas.filter(s => s.tipo === "irma");

        let toBeDeleted = [];

        for (let i = senhasIrmaos.length - 1; i >= newIrmaos; i--) {
          toBeDeleted.push(senhasIrmaos[i]["_id"]);
        }

        for (let i = senhasIrmas.length - 1; i >= newIrmas; i--) {
          toBeDeleted.push(senhasIrmas[i]["_id"]);
        }

        if (toBeDeleted.length > 0) {
          const body = {
            oldNumber: self.senha,
            newData: {
              culto_id: self.servico._id,
              irmaos: newIrmaos,
              irmas: newIrmas,
              data: self.servico.data,
              horario: self.servico.horario
            }
          };

          const data = await editData(body);

          self.newSenhas = { ...data };
          this.$refs.stepper.next();
        } else {
          this.error = true;
          this.error_msg = "Não existem alterações à serem feitas!";
          this.$refs.stepper.goTo(1);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.my-section
  width: 100%
  max-width: 450px
  margin: auto

.my-stepper
  width: 100%
  max-width: 1200px
</style>
