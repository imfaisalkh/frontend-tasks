<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title:
      "Given this HTML create this styling purely using CSS absolutely positioned flexbox items; use z-index for stacking effect and transform if needed.",
    image: new URL("/src/assets/css-task-3.1.png", import.meta.url),
  },
  {
    title: "What is different between following two rules..",
    image: new URL("/src/assets/css-siblings.png", import.meta.url),
  },
];
</script>

<template>
  <div class="container">
    <div class="workspace">
      <h2>Demo</h2>

      <div class="bookings">
        <div class="booking-item item-1">Booking # 1</div>
        <div class="booking-item item-2">Booking # 2</div>
        <div class="booking-item item-3">Booking # 3</div>
      </div>
    </div>

    <!-- Plz Ignore this -->
    <questions-list title="Task: Misc" :data="questions" :full-width="false" />
  </div>
</template>
