<script setup>
// Import Components
import QuestionsList from "../../components/QuestionsList.vue";

// Questions Set # 1
const questions = [
  {
    title:
      "How wait for all promises to be full-filled before moving forward? (do in parallel)",
  },
  {
    title: "How wait for any promise to be full-filled before moving forward?",
  },
  {
    title: "How wait for all promises to be settled before moving forward.",
  },
];

// Questions Set # 2
const questions2 = [
  {
    title:
      "What would be the order of console statements in case of promise failure?",
  },
  {
    title: "Write async/await alternative of the above code",
  },
];

// Define Data
const cartItems = [
  { name: "Product # 1", quantity: 1, price: 27, in_stock: true },
  { name: "Product # 2", quantity: 1, price: 20, in_stock: false },
  { name: "Product # 3", quantity: 3, price: 15, in_stock: true },
  { name: "Product # 4", quantity: 1, price: 47, in_stock: false },
  { name: "Product # 5", quantity: 2, price: 95, in_stock: true },
];

/** 1. Create an array with only product names. */
const r1 = cartItems;

/** 2. Create an array which only includes products which are in stock.*/

/** 3. Find and return object of the product with name "Product # 3"*/

/** 4. Return index of product with 47 price.*/

/** 5. Calculate total cart value using reduce method.*/

/** 6. Iterate through each array item and print it's index in the console.*/

/** 7. Select second last item in the array; assuming length of the array would be dynamic.*/

/** 8. Return a boolean after checking if all items in the cart is in stock e.g. `areAllProductsInStock`*/

/** 9. Return a boolean after checking if any item in the cart has a price more than $100. e.g. `isAnyProductExpensive`*/

/** 10. Create an array with same length and items but in reverse order.*/

const userRoles = ["admin", "moderator", "user"];

/** 11. Use array de-structuring  to name each role as `role1`, `role2` and `role3` */

/** 12. Check if the array has the moderator role */

/** 13. Add a new user role named "guest" at start and end of array */

/** 14. Remove one user role from start and end of array. */

const numbers = [0, [1, 2, 3], [2, 3, 4]];

/** 15. Create a flat array having only unique items in the array. */
</script>

<template>
  <div class="container">
    <h1>Promises</h1>

    <questions-list title="Task # 1" :data="questions">
      <template #context>
        Given following JS promises...

        <pre>
          const p1 = fetch('http://example.com/api/v1/bookings')
          const p2 = fetch('http://example.com/api/v1/services')
          const p3 = fetch('http://example.com/api/v1/users')
        </pre>
      </template>
    </questions-list>

    <questions-list title="Task # 2" :data="questions2">
      <template #context>
        Given this array...

        <pre>
          console.log('Before promises...')

          p1
            .then(() => console.log('Promise # 1 full resolved'))
            .catch(() => console.log('Promise # 1 rejected'))
            .finally(() => console.log('Proise # 1 is settled'))
            
          console.log('After promises...')
        </pre>
      </template>
    </questions-list>
  </div>
</template>
