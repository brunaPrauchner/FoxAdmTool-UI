const ShoppingItem = () => {
    const ITEMS = [{name: 'Lipstick', price: '$33.45', amount: '2'},
                   {name: 'Foundation ', price: '$77.19', amount: '1'},
                   {name: 'Face Primer', price: '$13.25', amount: '3'}]

    const listItems = ITEMS.map((item, i) => <li key={i}>{item.name} {item.price} {item.amount}</li>);
    return(
        <>
            <ul>{listItems}</ul> 
        </>
     
    
    )
};
export default ShoppingItem;