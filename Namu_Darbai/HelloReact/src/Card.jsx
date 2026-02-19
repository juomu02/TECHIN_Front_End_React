import productImage from "./assets/spirgis.jpg";

function Card() {
  return (
    <div className="p-6 bg-slate-200 flex justify-center">
      <img src={productImage} alt="spirgis" />
      <h1>My card</h1>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default Card;
