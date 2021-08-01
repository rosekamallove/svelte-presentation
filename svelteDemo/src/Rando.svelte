<script>
  export let name;
  export let rando;
  const setRando = () => (rando = Math.random());

  /* Yes this is valid JavaScript */
  $: result = Math.round(rando) ? "Winner" : "Loser";
  /* If we wanted to do this in say React,
     We would have to create a state and use
        this.setState({result: Math.round(rando)...})
    or
        setState({...state, result: Math.round()...})
    with hooks.
  */
</script>

<main>
  <h1>{name}'s Child</h1>
  <p>The random Number is: <code> {rando} </code></p>

  <!-- A bad way to do this -->
  <pre> {Math.round(rando) ?  "Winner" : "Loser"} </pre>
  <pre> {Math.round(rando) ?  "Winner" : "Loser"} </pre>
  <!-- The better way -->
  <pre>Better {result}</pre>
  <button on:click={setRando}>Randomize</button>

  <!-- Isn't this way simpler than creating a onChange()=>{}  -->
  <input type="text" bind:value={rando} />
</main>

<style>
  input[type="text"] {
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
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  pre {
    font-size: 20px;
  }

  code {
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    padding: 2px;
    margin: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
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
</style>
