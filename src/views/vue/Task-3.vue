<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title:
      "Add search functionality to already existing `useFetch()` hook. The search can be initiated with the existing endpoint just by adding `?q={keyword}` query parameter",
  },
  {
    title:
      "The search should automatically trigger from an input within a simple text field",
  },
  {
    title:
      "To improve performance; limit max one api call to search endpoint in `750ms` instead of triggering it for each key-stroke",
  },
];
</script>

<template>
  <div class="container">
    <h1>Vue</h1>

    <!-- Plz Ignore this -->
    <questions-list title="Task 3: Search Functionality" :data="questions">
    </questions-list>
  </div>
</template>
