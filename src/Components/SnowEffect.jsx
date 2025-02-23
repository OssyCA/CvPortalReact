import { useEffect, useState } from "react";

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState([]); // array of snowflakes

  const createSnowflake = () => {
    const screenWidth = window.innerWidth; // get screen width
    const maxWidth = screenWidth * 0.95; // 95% of screen width

    // ajust snowflake size and duration based on screen width
    let size, duration;
    if (screenWidth < 768) {
      size = Math.random() * 10 + 5; // less than 768px
      duration = Math.random() * 3 + 2; // faster fall on small screens
    } else if (screenWidth < 1200) {
      size = Math.random() * 15 + 10;
      duration = Math.random() * 5 + 3;
    } else {
      size = Math.random() * 20 + 15; //larger than 1200px
      duration = Math.random() * 7 + 5; // slower fall on large screens
    }

    const newSnowflake = {
      id: Date.now(), // unique id
      left: Math.random() * maxWidth,
      size: size,
      opacity: Math.random() * 0.8 + 0.2, // random opacity between 0.2 and 1
      duration: duration,
    };

    setSnowflakes((prevSnowflakes) => [...prevSnowflakes, newSnowflake]);

    // Remove snowflake from array after duration
    setTimeout(() => {
      setSnowflakes((prevSnowflakes) =>
        prevSnowflakes.filter((flake) => flake.id !== newSnowflake.id)
      );
    }, newSnowflake.duration * 1000);
  };

  useEffect(() => {
    // createSnowflake varje 300 ms
    const interval = setInterval(() => {
      createSnowflake();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {snowflakes.map(
        (
          flake // map through snowflakes array
        ) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
            }}
          >
            ❄
          </div>
        )
      )}
    </>
  );
}
