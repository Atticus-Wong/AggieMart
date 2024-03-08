import '../styles/item.css'
import { ItemData } from './itemData';
import { useEffect } from 'react';
import { useState } from 'react';
// Define the type for the item
type Item = {
  price: string;
  itemName: string;
  location: string;
  previewImage: string;
  description: string;
  phoneNumber?: string;
  address?: string;
  email?: string;
};

// Define the type for the ItemComponent props
// type definition that specifies the expected properties for the ItemComponent.
type ItemComponentProps = {
  price: string;
  itemName: string;
  location: string;
  previewImage: string;
};

// ItemComponent functional component
// indicates that ItemComponent is a React functional component (React.FC) that accepts properties of type ItemComponentProps
const ItemComponent: React.FC<ItemComponentProps> = ({ price, itemName, location, previewImage }) => (

        <div className="item-item">
          <div className="item-preview_img">
          <img  src={previewImage} alt="image goes here" />
          </div>
        <div className="item-description">
          <div className="item-text">
            <div className="item-component">
              <h3>{price}</h3>
              <p>{itemName}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        </div>
);

// Main Item functional component
const Item: React.FC = () => {
  // Use state to manage the items
  const [items, setItems] = useState<Item[]>(ItemData);

  // Use useEffect to update the items when ItemData changes
  useEffect(() => {
    setItems(ItemData);
  }, [ItemData]);

  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} price={item.price} itemName={item.itemName} location={item.location} previewImage={item.previewImage} />
      ))}
    </>
  );
};

export default Item;
