<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title:
      "Create 10 cells like following; where odd cells as red and even cells are styled blue. Also make sure the red and blue colors are stored in sass variables",
    image: new URL("/src/assets/css-task-2.1.png", import.meta.url),
  },
  {
    title:
      "Make sure to apply hover styling on all cells accept 3 and 6 which has a class named `disabled`",
    image: new URL("/src/assets/css-task-2.2.jpeg", import.meta.url),
  },
  {
    title:
      "Create a comma separate list of `<ul><li>` items where all list items are inline separated by a red dash; except the last one",
    image: new URL("/src/assets/css-task-2.3.png", import.meta.url),
  },
];
</script>

<template>
  <div class="container">
    <div class="workspace">
      <h2>Demo</h2>

      <div class="bookings">
        <div class="booking-item">Booking # 1</div>
        <div class="booking-item">Booking # 2</div>
        <div class="booking-item">Booking # 3</div>
        <div class="booking-item">Booking # 4</div>
        <div class="booking-item">Booking # 5</div>
        <div class="booking-item">Booking # 6</div>
        <div class="booking-item">Booking # 7</div>
        <div class="booking-item">Booking # 8</div>
        <div class="booking-item">Booking # 9</div>
        <div class="booking-item">Booking # 10</div>
      </div>
    </div>

    <!-- Plz Ignore this -->
    <questions-list
      title="Task: Psuedo Classes"
      :data="questions"
      :full-width="false"
    />
  </div>
</template>
