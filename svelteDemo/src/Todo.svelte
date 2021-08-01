<script>
  let todos = [
    { done: false, text: "eat" },
    { done: false, text: "sleep" },
    { done: false, text: "code" },
    { done: false, text: "repeat" },
  ];

  function toggleDone(t) {
    todos = todos.map((todo) => {
      if (todo === t) return { done: !t.done, text: t.text };
      return todo;
    });
  }
  let hideDone = false;

  const filtered = hideDone ? todos.filter((todo) => !todo.done) : todos;
</script>

<label class="hide-done">
  <input type="checkbox" bind:checked={hideDone} />

  Hide Done
</label>

<ul>
  {#each filtered as todo}
    <li on:click={() => toggleDone(todo)}>
      {todo.done ? "👍" : ""}
      {todo.text}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }

  .hide-done {
    font-size: 24px;
  }
</style>
