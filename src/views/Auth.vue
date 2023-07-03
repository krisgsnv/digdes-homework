<template>
  <main class="main">
    <slot>
      <Button
        class="auth-button button_primary button_primary_default"
        @click="signup"
      >
        Зарегистрироваться
      </Button>
    </slot>
  </main>
</template>

<script>
export default {
  methods: {
    signup() {
      localStorage.setItem("auth", true);
      this.$router.push({ name: "UsersList" });
    },
  },
};
</script>

<style lang="scss">
.auth-button {
  align-self: center;
}
</style>
