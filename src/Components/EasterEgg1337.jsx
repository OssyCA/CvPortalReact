import { useEffect } from "react";

const EasterEgg1337 = () => {
  const sequence = ["1", "3", "3", "7"];
  let inputSequence = [];
  let alerted = false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key; // Get the key from the event
      inputSequence.push(key);

      if (
        inputSequence
          .join("")
          .startsWith(sequence.join("").slice(0, inputSequence.length)) // check if the inputSequence matches the sequence
      ) {
        if (inputSequence.length === sequence.length && !alerted) {
          alerted = true; // avoid multiple alerts
          alert("You found the easter egg!");
          setTimeout(() => {
            alerted = false;
          }, 500); // reset after 500ms
          inputSequence = [];
        }
      } else {
        inputSequence = []; // Reset inputSequence
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // Ingen UI-rendering behövs
};

export default EasterEgg1337;
