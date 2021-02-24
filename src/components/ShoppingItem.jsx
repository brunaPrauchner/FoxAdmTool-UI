const ShoppingItem = ({ arrayItems = [] }) => {
  const listItems = arrayItems.map((item, i) => <li key={i}> {item.name} {item.sku} {item.price}</li>);
  return (
    <ul>{listItems}</ul>
  )
}

export default ShoppingItem;