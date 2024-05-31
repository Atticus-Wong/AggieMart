async function HTTP_Description(resultSet) {
  try {
    console.log('sending to server');
    const response = await fetch('http://localhost:3000/description', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ resultSet })
    })
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

async function HTTP_Insert_Item(resultSet) {
  try {
    const response = await fetch('http://localhost:3000/insertItemQuery', {
      method: 'POST',
      headers: {
        'Content-type': 'application.json'
      },
      body: JSON.stringify({ resultSet })
    })
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Error: ', e);
  }
}
export {
  HTTP_Description,
  HTTP_Insert_Item
}
