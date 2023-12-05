export default async function Memes() {
  const url = "https://api.imgflip.com/get_memes";

  const response = await fetch(url);
  //   return console.log(response);
  const data = await response.json();
  const images = data.data.memes;

  return (
    <div className="meme-container">
      <h3>Memes</h3>
      <p>
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      <div className="meme-image-container">
        {images.map((image) => {
          return <img src={image.url} className="meme-image" />;
        })}
      </div>
      <hr />
    </div>
  );
}
