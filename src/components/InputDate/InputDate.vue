<template>
  <div>
    <Input
      :placeholder="input.placeholder"
      class="input-wrapper_date"
      @click="onInputClick"
      :active="active"
      :value="selected.value"
      readonly
    >
      <Icon :href="input.icon" />
    </Input>
    <div class="datepicker" v-if="active">
      <div class="datepicker__header">
        <button type="button" @click="toPrevMonth" title="Предыдущий">
          <Icon :href="nav.icon" class="datepicker__nav datepicker__nav_prev" />
        </button>
        <div class="datepicker__selects">
          <Select
            :actions="months"
            :selectedIndex="date.month"
            :value="months[date.month].text"
            @input="onInputMonthChange"
            class="datepicker__select_month"
          />
          <Select
            :actions="years"
            :selectedIndex="currentYearIndex"
            :value="date.year"
            @input="onInputYearChange"
            class="datepicker__select_year"
          />
        </div>
        <button type="button" @click="toNextMonth" title="Следующий">
          <Icon :href="nav.icon" class="datepicker__nav datepicker__nav_next" />
        </button>
      </div>
      <div class="datepicker__row datepicker__row_weekdays">
        <div v-for="(day, i) in weekDays" :key="i" class="datepicker__day">
          {{ day }}
        </div>
      </div>
      <div class="datepicker__row">
        <div
          v-for="day in prevMonthDays"
          :key="day"
          class="datepicker__day datepicker__day_disabled"
        >
          {{ day }}
        </div>
        <div
          v-for="(day, i) in new Array(currentMonthDaysCount)"
          :key="day"
          class="datepicker__day"
          :class="[isToday(i + 1), isSelected(i + 1)]"
          @click="selectDay(i + 1)"
        >
          {{ i + 1 }}
        </div>
        <div
          v-for="(day, i) in new Array(nextMonthDaysCount)"
          :key="day"
          class="datepicker__day datepicker__day_disabled"
        >
          {{ i + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  today,
  weekDays,
  daysInMonth,
  paddingDays,
  getPrevMonthDays,
} from "@/utils/date.js";

export default {
  data() {
    return {
      today,
      weekDays,
      date: {
        day: today.day,
        month: today.month,
        year: today.year,
      },
      selected: {
        day: 0,
        month: 0,
        year: 0,
        value: "",
      },
      months: [
        { text: "Январь" },
        { text: "Февраль" },
        { text: "Март" },
        { text: "Апрель" },
        { text: "Май" },
        { text: "Июнь" },
        { text: "Июль" },
        { text: "Август" },
        { text: "Сентябрь" },
        { text: "Октябрь" },
        { text: "Ноябрь" },
        { text: "Декабрь" },
      ],
      years: [
        { text: "2023" },
        { text: "2024" },
        { text: "2025" },
        { text: "2026" },
        { text: "2027" },
        { text: "2028" },
        { text: "2029" },
        { text: "2030" },
      ],
      active: true,
      input: {
        placeholder: "Дата...",
        icon: "#calendar",
      },
      nav: {
        icon: "#arrow",
      },
    };
  },
  computed: {
    currentYearIndex() {
      return this.years.findIndex((el) => el.text == this.date.year);
    },
    currentMonthDaysCount() {
      return daysInMonth(this.date.year, this.date.month);
    },
    prevMonthDaysCount() {
      return paddingDays(this.date.year, this.date.month);
    },
    nextMonthDaysCount() {
      const totalDays = this.currentMonthDaysCount + this.prevMonthDaysCount;
      return totalDays % 7 ? 14 - (totalDays % 7) : 7;
    },
    prevMonthDays() {
      return getPrevMonthDays(this.date.year, this.date.month);
    },
    isToday() {
      const today = this.today;
      const date = this.date;
      return (i) => {
        if (
          i == date.day &&
          date.month == today.month &&
          date.year == today.year
        ) {
          return "datepicker__day_today";
        }
      };
    },
    isSelected() {
      const selected = this.selected;
      const date = this.date;
      return (i) => {
        if (
          i == selected.day &&
          date.month == selected.month &&
          date.year == selected.year
        ) {
          return "datepicker__day_selected";
        }
      };
    },
  },
  methods: {
    onInputClick() {
      this.active = !this.active;
    },
    onInputMonthChange(value) {
      this.date.month = this.months.findIndex((el) => el.text == value);
    },
    onInputYearChange(value) {
      this.date.year = +value;
    },
    resetSelectedDate() {
      const selected = this.selected;
      selected.day = 0;
      selected.month = 0;
      selected.year = 0;
      selected.value = "";
    },
    selectDay(i) {
      const selected = this.selected;
      const date = this.date;
      if (
        selected.day == i &&
        selected.month == date.month &&
        selected.year == date.year
      ) {
        this.resetSelectedDate();
      } else {
        selected.day = i;
        selected.month = date.month;
        selected.year = date.year;
        selected.value = [
          selected.day.toString().padStart(2, "0"),
          selected.month.toString().padStart(2, "0"),
          selected.year,
        ].join(".");
      }
    },
    toNextMonth() {
      const date = this.date;
      if (date.month == 11) {
        if (date.year == this.years[this.years.length - 1].text) return;
        date.year += 1;
        date.month = 0;
      } else {
        date.month += 1;
      }
    },
    toPrevMonth() {
      const date = this.date;
      if (date.month == 0) {
        if (date.year == this.years[0].text) return;
        date.year -= 1;
        date.month = 11;
      } else {
        date.month -= 1;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
