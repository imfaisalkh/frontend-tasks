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
    switch (props.task) {
      case "1": {
        results = [
          {
            title: "Create an array with only product names",
          },
          {
            title:
              "Create an array which only includes products which are in stock",
          },
          {
            title:
              "Find and return object of the product with name 'Product # 3'",
          },
          {
            title: "Return index of product with 47 price",
          },
          {
            title: "Calculate total cart value using reduce method",
          },
          {
            title:
              "Iterate through each array item and print it's index in the console",
          },
          {
            title:
              "Select second last item in the array; assuming length of the array would be dynamic",
          },
          {
            title:
              "Return a boolean after checking if all items in the cart is in stock e.g. `areAllProductsInStock`",
          },
          {
            title:
              "Return a boolean after checking if any item in the cart has a price more than $100. e.g. `isAnyProductExpensive`",
          },
          {
            title:
              "Create an array with same length and items but in reverse order",
          },
        ];
        break;
      }

      case "2": {
        results = [
          {
            title:
              "Use array de-structuring  to name each role as `role1`, `role2` and `role3`",
          },
          {
            title: "Check if the array has the moderator role",
          },
          {
            title:
              "Add a new user role named 'guest' at start and end of array",
          },
          {
            title: "Remove one user role from start and end of array",
          },
        ];
        break;
      }

      case "3": {
        results = [
          {
            title: "Create a flat array having only unique items in the array",
          },
        ];
        break;
      }

      case "promise-1": {
        results = [
          {
            title:
              "How wait for all promises to be full-filled before moving forward? (do in parallel)",
          },
          {
            title:
              "How wait for any promise to be full-filled before moving forward?",
          },
          {
            title:
              "How wait for all promises to be settled before moving forward.",
          },
        ];
        break;
      }

      case "promise-2": {
        results = [
          {
            title:
              "What would be the order of console statements in case of promise failure?",
          },
          {
            title: "Write async/await alternative of the above code",
          },
        ];
        break;
      }
    }
  }

  // VUE Questions
  // if (props.domain === "vue") {
  // }

  return results;
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
      <li v-for="(question, idx) in questions" :key="idx">
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
