<script>
  import Rando from "./Rando.svelte";
  import Todo from "./Todo.svelte";

  let name = "Alex";
  let count = 0;

  const handleClick = () => (count += 1);
  const handleInput = (e) => (name = e.target.value);
</script>

<main>
  <h1>Hello {name}!</h1>
  <input type="text" value={name} on:input={handleInput} />
  <button on:click={handleClick}>Click: {count}</button>

  <hr />
  <Rando {name} rando={count} />
  <hr />
  <h1>Todo in Svelte</h1>
  <Todo />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .center {
    padding: 70px 0;
    border: 3px solid #ff3e00;
    text-align: center;
    color: #4a4a55;
  }
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    margin-bottom: 20px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 2px solid rgb(241, 241, 241);
    background-color: white;
    outline: none;
    transition: 0.2s;
  }
  input[type="text"]:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  input[type="email"]:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  input[type="password"]:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  button {
    margin: 10px;
    padding: 7px;
    background-color: #fff;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #ff3e00;
  }

  button:hover {
    box-shadow: 0px 5px 7px rgba(236, 70, 70, 0.4);
    color: #fff;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  hr {
    border-top: 2px solid rgb(238, 238, 238);
    border-left: 2px solid rgb(238, 238, 238);
  }
</style>
