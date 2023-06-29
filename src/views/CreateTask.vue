<template>
  <main class="main">
    <div class="container container_page-form">
      <h1 class="page-form__title">Создание задачи</h1>
      <div class="page-form__content">
        <div class="page-form__form">
          <FormItem :label="name.label" :required="true">
            <Input
              class="form-item__input"
              :placeholder="name.placeholder"
              v-model="form.name"
            />
          </FormItem>
          <FormItem :label="description.label">
            <TextArea
              class="form-item__input"
              :placeholder="description.placeholder"
              v-model="form.description"
            />
          </FormItem>
          <FormItem :label="project.label" :required="true">
            <Select
              :actions="project.actions"
              :selectedIndex="project.selectedIndex"
              class="form-item__input select"
              v-model="form.project"
            />
          </FormItem>
          <FormItem :label="executor.label">
            <Select
              :actions="project.actions"
              class="form-item__input select"
              :placeholder="executor.placeholder"
              v-model="form.executor"
            />
          </FormItem>
        </div>
      </div>
      <div class="page-form__footer">
        <Button class="button_secondary button_secondary_default">
          Отмена
        </Button>
        <Button
          class="button_primary button_primary_default"
          @click="createTask"
        >
          Создать задачу
        </Button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        name: "",
        description: "",
        project: "",
        executor: "",
      },
      name: {
        label: "Название",
        placeholder: "Введите текст...",
      },
      description: {
        label: "Описание",
        placeholder: "Введите текст...",
      },
      project: {
        label: "Проект",
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
        selectedIndex: 0,
      },
      executor: {
        label: "Исполнитель",
        actions: [
          {
            link: "#",
            text: "Исполнитель1",
          },
          {
            link: "#",
            text: "Исполнитель2",
          },
          {
            link: "#",
            text: "Исполнитель3",
          },
        ],
        placeholder: "Не определён",
      },
    };
  },
  methods: {
    createTask() {
      console.log("Задача создана", JSON.stringify(this.form));
    },
  },
  mounted() {
    this.form.project =
      this.project.selectedIndex >= 0
        ? this.project.actions[this.project.selectedIndex].text
        : "";
  },
};
</script>
