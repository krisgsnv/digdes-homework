<template>
  <div id="app">
    <div class="wrapper">
      <Navigation />
      <Checkbox
        :initialChecked="model.checkbox"
        v-model="model.checkbox"
        @change="log"
      />
      <RadioGroup
        @change="log"
        :values="values"
        :initialSelected="model.radio"
      />
      <Toggler
        :initialChecked="model.checkbox"
        v-model="model.checkbox"
        @change="log"
      />
      <Input :value="model.input" @input="logInput" />
      <InputSearch :value="model.input" @input="logInput" />
    </div>
  </div>
</template>

<script>
import "@/scss/index.scss";

export default {
  data() {
    return {
      values: [{ text: "Один" }, { text: "Два" }],
      model: {
        checkbox: true,
        radio: "Один",
        input: 234,
      },
    };
  },
  methods: {
    log(value) {
      this.model.checkbox = value;
      console.log(this.model.checkbox);
    },
    logInput(value) {
      this.model.input = value;
      console.log(this.model.input);
    },
    logSearch(value) {
      this.model.input = value;
      console.log(this.model.input);
    },
  },
  name: "App",
  components: {
    // CreateTask,
    // Tasks,
    // Projects,
  },
};
</script>
