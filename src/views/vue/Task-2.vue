<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set # 1
const questions = [
  {
    title:
      "Create a composable named `useFetch()` to handle data fetching and data state logic; the composable can accept endpoint as argument and return data and its potential states in reactive manner",
  },
  {
    title:
      "Use this in 2 data components show how we can reuse the same logic to keep code DRY",
  },
];

// Questions Set # 2
const questions2 = [
  {
    title:
      "Create a `BaseTable` component for data table UI to reuse recurring code",
  },
  {
    title: "This base component may accept table columns; table data",
  },
  {
    title:
      "Use this base table component to show how we can reuse the same UI to keep code DRY",
  },
];
</script>

<template>
  <div class="container">
    <h1>Vue</h1>

    <!-- Plz Ignore this -->
    <questions-list title="Task 2.1: Reuse Logic" :data="questions" />
    <questions-list title="Task 2.2: Reuse UI" :data="questions2" />
  </div>
</template>
