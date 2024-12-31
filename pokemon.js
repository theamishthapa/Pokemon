async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    //clearing error message if success
    const errorElement = document.getElementById("error-message");
    errorElement.innerHTML = "";
    errorElement.style.display = "none";
  } catch (error) {
    console.error(error);
    const errorElement = document.getElementById("error-message");
    errorElement.innerHTML = "No such Pokémon found";
    errorElement.style.display = "block";

    // Hide the image if an error occurs
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.style.display = "none";
  }
}

const inputField = document.getElementById("pokemonName");
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchData();
  }
});
