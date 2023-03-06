import { useState, useEffect } from "react";
function CountDown() {
  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(
    function () {
      if (targetSeconds == null) return;

      setElapsedSeconds(0);
      let interval = setInterval(() => {
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    [targetSeconds]
  );

  function parseForm(event) {
    event.preventDefault();
    let seconds = parseInt(event.target.seconds.value);
    setTargetSeconds(seconds);
  }

  if (elapsedSeconds >= targetSeconds && targetSeconds != null) {
    return (
      <>
        <h1>Termiando</h1>
        <button onClick={() => setTargetSeconds(null)}>reiniciar</button>
      </>
    );
  }
  if (targetSeconds != null) {
    return (
      <div>
        <h1>
          Faltan {targetSeconds - elapsedSeconds}
        </h1>
      </div>
    );
  }

  return (
    <>
      <p>segundos en la cuenta</p>
      <form action="#" onSubmit={(event) => parseForm(event)}>
        <input type="number" name="seconds" />
        <button>Iniciar</button>
      </form>
    </>
  );
}

export default CountDown;
