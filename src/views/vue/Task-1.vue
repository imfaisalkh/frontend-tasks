<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set
const questions = [
  {
    title: "Fetch data from following endpoints: `GET api/v1/bookings`",
  },
  {
    title: "Create a table in the UI and map each booking grouped by service",
  },
  {
    title: "Transform data as per UI requirements (grouping; format date/time)",
  },
  {
    title: "Show reactive state of data (fetching; loaded; no-data) in the UI",
  },
];

// Use this as base URI for all endpoint calls...
// `https://63b2c8b75e490925c5218698.mockapi.io`

// 1. Fetch data from following endpoints: `GET api/v1/bookings`

// 2. Create a table in the UI and map each booking grouped by service

// 3. Transform data as per UI requirements (grouping; format date/time)

// 4. Show reactive state of data (fetching; loaded; no-data) in the UI
</script>

<template>
  <div class="container">
    <h2>Demo</h2>

    <!-- Plz Ignore this -->
    <questions-list title="Task 1: Fetch & Rendering" :data="questions">
      <template #context>
        Use this as base URI for all endpoint calls...

        <pre>
          https://63b2c8b75e490925c5218698.mockapi.io
        </pre>
      </template>
    </questions-list>
  </div>
</template>
