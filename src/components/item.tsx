import '../styles/item.css'
import { ItemData } from './itemData';
// Define the type for the item
type Item = {
  price: string;
  itemName: string;
  location: string;
  description?: string;
  phoneNumber?: string;
  address?: string;
  email?: string;
};

// Define the type for the ItemComponent props
type ItemComponentProps = {
  price: string;
  itemName: string;
  location: string;
};

// ItemComponent functional component
const ItemComponent: React.FC<ItemComponentProps> = ({ price, itemName, location }) => (
  <div className="item-component">
    <h3>{price}</h3>
    <p>{itemName}</p>
    <p>{location}</p>
  </div>
);

// Main Item functional component
const Item: React.FC = () => {
  return (
    <>
      {ItemData.map((item, index) => (
        <div className="item-item">
          <img className="item-preview_img" src=" " alt="image goes here" />
        <div className="item-description">
          <div className="item-text">
            <ItemComponent key={index} price={item.price} itemName={item.itemName} location={item.location} />
          </div>
        </div>
        </div>
    ))}
  </>
  );
};

export default Item;
