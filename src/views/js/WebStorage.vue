<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set # 1
const questions = [
  {
    title: "Set `is_auth` as `true` in local storage",
  },
  {
    title:
      "Get `is_auth` value from local storage and check if its truthy or falsey",
  },
  {
    title: "Update `is_auth` value to `false`",
  },
  {
    title: "Delete `is_auth` variable from local storage",
  },
];

// Questions Set # 2
const questions2 = [
  {
    title: "How local storage differs from session storage or cookies?",
  },
];

/** 1. Set `is_auth` as `true` in local storage. */

/** 2. Get `is_auth` value from local storage and check if its truthy or falsey.*/

/** 3. Update `is_auth` value to `false` */

/** 4. Delete `is_auth` variable from local storage */
</script>

<template>
  <div class="container">
    <h1>Web Storage</h1>

    <questions-list title="Task # 1" :data="questions">
      <template #context>
        Let's create a simple CRUD operations on browser's local storage to with
        variable name `is_auth`
      </template>
    </questions-list>

    <questions-list title="Task # 2" :data="questions2" />
  </div>
</template>
