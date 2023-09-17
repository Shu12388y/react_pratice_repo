import "./App.css";
import ShopList from "./ShopList";

function App() {
  const data = [
    { item: "eggs", amount: 5, completed: false },
    { item: "milk", amount: 15, completed: true },
    { item: "cake", amount: 2, completed: false },
  ];
  return (
    <>
      <h1>welcome to shopping list</h1>
      <ShopList items={data} />
    </>
  );
}

export default App;
