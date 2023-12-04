export default async function Memes() {
  const url = "https://api.imgflip.com/get_memes";

  const response = await fetch(url);
  //   return console.log(response);
  const data = await response.json();
  const images = data.data.memes;

  return (
    <div className="dog-container">
      {images.map((image) => {
        return <img src={image.url} />;
      })}
    </div>
  );
}
