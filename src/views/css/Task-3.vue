<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";
</script>

<template>
  <div class="container">
    <h2>Demo</h2>

    <div class="bookings">
      <div class="booking-item item-1">Booking # 1</div>
      <div class="booking-item item-2">Booking # 2</div>
      <div class="booking-item item-3">Booking # 3</div>
    </div>

    <!-- Plz Ignore this -->
    <questions-list title="Task: General" domain="css" task="3" />
  </div>
</template>
