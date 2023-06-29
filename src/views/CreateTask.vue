<template>
  <div class="container">
    <Navigation />
    <main class="main">
      <Input />
      <Select :actions="actions" :selectedIndex="selectedIndex" />
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      actions: [
        {
          link: "#",
          text: "Проект1",
        },
        {
          link: "#",
          text: "Проект2",
        },
        {
          link: "#",
          text: "Проект3",
        },
      ],
      selectedIndex: 1,
    };
  },
};
</script>
