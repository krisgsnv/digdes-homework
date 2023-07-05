<template>
  <div class="search-bar">
    <InputSearch @input="log" class="search-bar__input" />
    <div class="search-bar__sort">
      <Select :inputWrapperClasses="'search-bar__select'" />
      <Button
        class="button_small button_secondary search-bar__order"
        :title="order.title"
      >
        <Icon :href="order.icon" />
      </Button>
    </div>
    <Button class="button_secondary button_default">Добавить</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        title: "По возрастанию",
        icon: "#arrow",
      },
    };
  },
  methods: {
    log(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
