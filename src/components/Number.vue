<template>
  <div ref="content">
    <p v-for="(obj, index) in senhas" :key="index">{{ index }}:{{ obj }}</p>
  </div>
</template>
<script>
import html2canvas from "html2canvas";

export default {
  name: "Number",
  props: ["senhas"],
  methods: {
    saveNumber() {
      html2canvas(this.$refs.content).then(canvas => {
        let a = document.createElement("a");
        a.href = canvas.toDataURL();
        a.download = "test.png";
        a.click();
      });
    }
  }
};
</script>
