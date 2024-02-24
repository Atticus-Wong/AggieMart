import React, { useState } from 'react';
import { ItemData } from './ItemData';

const ItemList: React.FC = () => {
  const [items, setItems] = useState(ItemData);

  const deleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.itemName}</h2>
          <p>{item.price}</p>
          <p>{item.location}</p>
          <p>{item.description}</p>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
