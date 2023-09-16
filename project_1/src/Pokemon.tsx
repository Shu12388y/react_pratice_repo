function Pokemon() {
  const randomNumber = Math.floor(Math.random() * 1000);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
  return (
    <>
      <h1>pokemon Number {randomNumber}</h1>
      <img src={url} alt="image" />
    </>
  );
}

export default Pokemon;
