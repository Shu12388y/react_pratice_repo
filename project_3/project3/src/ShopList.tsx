function ShopList({ items }) {
  return (
    <>
      <ul>
        {items.map((i) => (
          <li style={{ color: i.completed ? "grey" : "red" }} key={i.item}>
            {i.item}-{i.amount}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShopList;
