<template>
  <button class="more-icon button button_small" type="button" title="Действия">
    <Icon
      :href="'#more-icon'"
      class="more-icon__svg more-icon__svg_secondary"
    />
  </button>
</template>

<script>
import "./style.scss";

import Icon from "@/components/Icon/Icon.vue";

export default {
  data: function () {
    return {};
  },
  components: {
    Icon,
  },
};
</script>
