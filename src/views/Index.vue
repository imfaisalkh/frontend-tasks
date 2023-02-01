<template>
  <div class="questions-set">
    <h1 class="title">Front End Tasks</h1>
    <div class="questions">
      <h2 class="title">CSS</h2>

      <ol class="questions-nav">
        <li>
          <RouterLink to="/css/task-1">Task: Flexbox</RouterLink>
        </li>
        <li>
          <RouterLink to="/css/task-2">Task: Pseudo Classes</RouterLink>
        </li>
        <li>
          <RouterLink to="/css/task-3">Task: Misc</RouterLink>
        </li>
      </ol>
    </div>

    <div class="questions">
      <h2 class="title">JS</h2>

      <ol class="questions-nav">
        <li>
          <RouterLink to="/js/arrays">Task: Arrays</RouterLink>
        </li>
        <li>
          <RouterLink to="/js/promises">Task: Promises</RouterLink>
        </li>
        <li>
          <RouterLink to="/js/web-storage">Task: WebStorage</RouterLink>
        </li>
        <li>
          <RouterLink to="/js/misc">Task: Misc</RouterLink>
        </li>
      </ol>
    </div>

    <div class="questions">
      <h2 class="title">Vue</h2>

      <ol class="questions-nav">
        <li>
          <RouterLink to="/vue/task-1">Task # 1</RouterLink>
        </li>
      </ol>
    </div>
  </div>

  <div class="notes">
    <p>
      Note: Please clone the repo from the following link and perform the tasks
      in your local IDE..
    </p>
    <a href="https://github.com/imfaisalkh/frontend-tasks"
      >https://github.com/imfaisalkh/frontend-tasks</a
    >
  </div>
</template>

<style lang="scss">
.notes {
  max-width: 1000px;
  margin: 30px auto;
}

.questions-set {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  h1.title {
    width: 100%;
    margin: 30px 0 0 0;
  }

  .questions {
    flex: 1;
    padding: 15px 30px;

    h2.title {
      margin-top: 10px;
    }

    ol.questions-nav {
      margin: 0;
      padding: 0 0 0 20px;

      li {
        margin: 0;
        padding: 0;
        line-height: 1.7;
      }
    }
  }
}
</style>
