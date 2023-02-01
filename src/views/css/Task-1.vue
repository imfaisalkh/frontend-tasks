<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title:
      "Create a simple layout of 10 divs like this using flexbox. Keeping gap between divs 10px horizontally and vertically.",
    image: new URL("/src/assets/css-task-1.1.png", import.meta.url),
  },
  {
    title: "Now lets assume; we the parent is RTL layout and show it like this",
    image: new URL("/src/assets/css-task-1.2.png", import.meta.url),
  },
  {
    title: "Now let's add horizontal gap of 15px and vertical gap of 30px",
    image: new URL("/src/assets/css-task-1.3.png", import.meta.url),
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
      title="Task 1: Flexbox"
      :data="questions"
      :full-width="false"
    />
  </div>
</template>
