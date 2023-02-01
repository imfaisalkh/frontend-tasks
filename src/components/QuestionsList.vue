<script setup>
// Define Props
const props = defineProps({
  title: {
    type: String,
    default: "Tasks",
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <hr />
  <div class="questions">
    <h2>{{ props.title }}</h2>
    <div class="context">
      <slot name="context"> </slot>
    </div>
    <ol class="questions-list">
      <li v-for="(question, idx) in props.data || questions" :key="idx">
        <p>
          {{ question.title }}
        </p>
        <img v-if="question.image" :src="question.image" />
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
}

pre {
  // background: #e1e1e1;
}

.context {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
}

hr {
  margin-top: 30px;
}
.questions {
  background: #e1e1e1;
  padding: 15px;
  border-radius: 8px;
  margin-top: 30px;

  h1 {
    margin-top: 0;
  }
}

.questions-list {
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    margin: 0 0 0 20px;

    img {
      max-width: 100%;
      width: 800px;
      height: auto;
    }
  }
}
</style>
