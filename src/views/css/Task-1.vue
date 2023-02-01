<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title:
      "Create a simple layout of 10 divs like this using flexbox. Keeping gap between divs 10px horizontally and vertically.",
    image: "../src/assets/css-task-1.1.png",
  },
  {
    title: "Now lets assume; we the parent is RTL layout and show it like this",
    image: "../src/assets/css-task-1.2.png",
  },
  {
    title: "Now let's add horizontal gap of 15px and vertical gap of 30px",
    image: "../src/assets/css-task-1.3.png",
  },
];
</script>

<template>
  <div class="container">
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

    <!-- Plz Ignore this -->
    <questions-list title="Task 1: Flexbox" :data="questions" />
  </div>
</template>
