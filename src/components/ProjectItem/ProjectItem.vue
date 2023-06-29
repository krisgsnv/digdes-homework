<template>
  <div class="list-item">
    <div class="list-item__content">
      <p class="list-item__name">{{ project.name }}</p>
      <div class="list-item__info">
        <span class="list-item__num">#{{ project.code }}</span>
        <span class="list-item__status">
          {{ project.author }} создал(а) {{ project.dateCreated }}
        </span>
        <span class="list-item__status list-item__status_right">
          {{ project.authorEdited }} изменил(а) {{ project.dateEdited }}
        </span>
      </div>
    </div>
    <ButtonDropdown
      :dropdownProps="dropdown"
      :buttonProps="button"
      class="list-item__dropdown"
    >
      <Icon
        :href="button.icon"
        class="dropdown-button__svg dropdown-button__svg_secondary"
      />
    </ButtonDropdown>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      button: {
        classes: "list-item__dots list-item__dots_default",
        icon: "#dots",
      },
      dropdown: {
        classes: "list-item__dropdown",
        actions: [
          {
            link: "#",
            text: "Редактировать",
          },
          {
            link: "#",
            text: "Удалить",
            accent: true,
          },
        ],
      },
    };
  },
  props: {
    project: Object,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
