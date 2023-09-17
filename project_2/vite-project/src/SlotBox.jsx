import Slot from "./Slot";

function SlotBox() {
  let randomNumber1 = Math.floor(Math.random() * 3) + 1;
  let randomNumber2 = Math.floor(Math.random() * 3) + 1;
  let randomNumber3 = Math.floor(Math.random() * 3) + 1;

  const Imageurl = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg",
    "https://m.media-amazon.com/images/I/41EvGpCFECL._AC_UF1000,1000_QL80_.jpg",
    "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  ];
  return (
    <>
      <Slot
        value1={randomNumber1}
        value2={randomNumber2}
        value3={randomNumber3}
      />
    </>
  );
}

export default SlotBox;
