<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

const questions = [
  {
    title: "Refactor this code to shorthand version",
    image: "../src/assets/shorthand-js.png",
  },
  {
    title: "Refactor this line with template literals",
    image: "../src/assets/js-template-literal.png",
  },
];
</script>

<template>
  <div class="container">
    <h1>Misc</h1>

    <questions-list title="Task # 1" :data="questions"> </questions-list>
  </div>
</template>
