import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const jokeApi = "https://official-joke-api.appspot.com/jokes/random";

  const [joke, setJoke] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    mansGotJoke();
  }, []);

  const mansGotJoke = () => {
    fetch(jokeApi)
      .then((response) => response.json())
      .then((data) => {
        setisLoading(false);
        return setJoke(data);
      });
  };

  const renderJSX = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>{joke ? joke.setup : null}</h1>
      <p>{joke && joke.punchline}</p>
      <button onClick={mansGotJoke}>Get joke</button>
    </>
  );

  return <div className="App">{renderJSX}</div>;
}

export default App;
