<template>
  <main class="main main_row">
    <div class="profile-img">
      <img :src="img.src" alt="Изображение профиля" />
      <ButtonDropdown
        :buttonProps="img.button"
        :dropdownProps="img.dropdown"
        class="profile-img__button"
      >
        <Icon
          :href="img.button.icon"
          class="dropdown-button__svg dropdown-button__svg_secondary"
        />
      </ButtonDropdown>
    </div>
    <section class="profile-info">
      <div class="profile-header">
        <div class="profile-header__inner">
          <h2>Котов Семен Васильевич</h2>
          <StatusLabel :status="status" />
        </div>
        <ButtonDropdown :dropdownProps="header.dropdown">
          <Icon
            :href="header.button.icon"
            class="dropdown-button__svg dropdown-button__svg_secondary"
          />
        </ButtonDropdown>
      </div>
      <div class="profile-description">
        <h3 class="profile-description__title">О себе:</h3>
        <p class="profile-description__description">
          {{ description }}
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import src from "@/assets/images/profile.jpg";

export default {
  data: function () {
    return {
      header: {
        button: {
          icon: "#dots",
        },
        dropdown: {
          classes: "profile-header__dropdown dropdown_hidden",
          actions: [
            {
              link: "#",
              text: "Редактировать",
            },
            {
              link: "#",
              text: "Изменить пароль",
            },
            {
              link: "#",
              text: "Просмотр задач пользователя",
            },
          ],
        },
      },
      img: {
        src,
        button: {
          classes: "profile-img__icon",
          icon: "#dots",
        },
        dropdown: {
          classes: "profile-img__dropdown dropdown_hidden",
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
      },
      status: "ACTIVE",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка р.",
    };
  },
};
</script>

<style lang="scss">
.profile-info {
  margin-left: 24px;
}

.profile-img {
  margin: 10px;
  position: relative;
  &__button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  &__dropdown {
    right: 0;
    margin-top: 2px;
  }
}

.profile-description {
  margin-top: 50px;
  &__title {
    color: $font-disabled;
    font: inherit;
  }
  &__description {
    margin-top: 8px;
  }
}

.profile-header {
  display: flex;
  justify-content: space-between;
  &__inner {
    @include flex-center;
    column-gap: 24px;
  }
  &__dropdown {
    right: 25px;
    margin-top: 4px;
  }
}
</style>
