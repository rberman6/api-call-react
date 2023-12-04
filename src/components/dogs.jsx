export default async function Dogs() {
  const url = "https://dog.ceo/api/breeds/image/random/10";

  const response = await fetch(url);
  //   return console.log(response);
  const data = await response.json();
  const images = data.message;

  return (
    <div className="dog-container">
      {images.map((image) => {
        return <img src={image} className="dog-image" />;
      })}
    </div>
  );
}
