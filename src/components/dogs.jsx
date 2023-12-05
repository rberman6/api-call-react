export default async function Dogs() {
  const url = "https://dog.ceo/api/breeds/image/random/10";

  const response = await fetch(url);
  //   return console.log(response);
  const data = await response.json();
  const images = data.message;

  return (
    <div>
      <h1>Can you catch them all?</h1>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:
        <a href="https://dog.ceo/api/breeds/image/random/10">
          "https://dog.ceo/api/breeds/image/random/10"
        </a>
      </p>
      <div className="dog-container">
        {images.map((image) => {
          return <img src={image} className="dog-image" />;
        })}
      </div>
      <hr />
    </div>
  );
}
