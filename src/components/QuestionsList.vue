<script setup>
// Import Modules
import { computed } from "vue";

// Define Props
const props = defineProps({
  title: {
    type: String,
    default: "Tasks",
  },
  domain: {
    type: String,
    required: true,
  },
  task: {
    type: [String, Number],
    required: true,
  },
});

const questions = computed(() => {
  let results;

  // CSS Questions
  if (props.domain === "css") {
    switch (props.task) {
      case "1": {
        results = [
          {
            title:
              "Create a simple layout of 10 divs like this using flexbox. Keeping gap between divs 10px horizontally and vertically.",
            image: "https://gcdnb.pbrd.co/images/0CnFTRMJxeaD.png?o=1",
          },
          {
            title:
              "Now lets assume; we the parent is RTL layout and show it like this",
            image: "https://gcdnb.pbrd.co/images/iLwyakOSGG99.png?o=1",
          },
          {
            title:
              "Now let's add horizontal gap of 15px and vertical gap of 30px",
            image: "https://gcdnb.pbrd.co/images/m8KMJIrV8tCV.png?o=1",
          },
        ];
        break;
      }

      case "2": {
        results = [
          {
            title:
              "Create 10 cells like following; where odd cells as red and even cells are styled blue. Also make sure the red and blue colors are stored in sass variables",
            image: "https://gcdnb.pbrd.co/images/ZQ4eAxelTNRc.png?o=1",
          },
          {
            title:
              "Make sure to apply hover styling on all cells accept 3 and 6 which has a class named `disabled`",
            image: "https://gcdnb.pbrd.co/images/Z4TNTB4KXXOe.jpg?o=1",
          },
          {
            title:
              "Create a comma separate list of `<ul><li>` items where all list items are inline separated by a red dash; except the last one",
            image: "https://gcdnb.pbrd.co/images/XNTRBivbxRL1.png?o=1",
          },
        ];
        break;
      }

      case "3": {
        results = [
          {
            title:
              "Given this HTML create this styling purely using CSS absolutely positioned flexbox items; use z-index for stacking effect and transform if needed.",
            image: "https://gcdnb.pbrd.co/images/OuQfCdE5oBDe.png?o=1",
          },
          {
            title: "What is different between following two rules..",
            image: "https://gcdnb.pbrd.co/images/Z4TNTB4KXXOe.jpg?o=1",
          },
        ];
        break;
      }
    }
  }

  // JS Questions
  if (props.domain === "js") {
  }

  // VUE Questions
  if (props.domain === "vue") {
  }

  return results;
});
</script>

<template>
  <hr />
  <div class="questions">
    <h2>{{ props.title }}</h2>
    <ol class="questions-list">
      <li v-for="(question, idx) in questions" :key="idx">
        <p>
          {{ question.title }}
        </p>
        <img :src="question.image" />
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
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
