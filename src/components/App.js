import React, { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((image) => {
        setDogImage(image.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img src={dogImage} alt={"A Random Dog"}></img>
    </div>
  );
}

export default App;
