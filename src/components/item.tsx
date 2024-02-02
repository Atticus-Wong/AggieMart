import '../styles/item.css'

export default function Item() {
  return (
    <div className="item-item">
      <img className="item-preview_img" src=" " alt="image goes here"></img>
      <div className="item-description">
        <div className="item-text">
          <h2>Price</h2>
          <p>Item</p>
          <p>Location</p>
        </div>
      </div>
    </div>
  );
}
