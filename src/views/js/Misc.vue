<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

const questions = [
  {
    title: "Refactor this code to shorthand version",
    image: new URL("/src/assets/shorthand-js.png", import.meta.url),
  },
  {
    title: "Refactor this line with template literals",
    image: new URL("/src/assets/js-template-literal.png", import.meta.url),
  },
  {
    title: "What is the result of following expression? explain.",
    image: new URL("/src/assets/js-typeof.png", import.meta.url),
  },
];
</script>

<template>
  <div class="container">
    <h1>Misc</h1>

    <questions-list title="Task # 1" :data="questions"> </questions-list>
  </div>
</template>
