import { useState } from "react";
import "./App.css";
import Cells from "./component/cells/Cells";

function App() {
  // to keep that order  follow
  const [order, setOrder] = useState([]);
  // to keep that unorder follow
  const [unorder, setUnorder] = useState(false);

  const arr = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  // deactivatedCells
  const deactivatedCells = () => {
    setUnorder(true);
    const timer= setInterval(()=>{
      // very letest value get 
      setOrder((originalOrder)=>{
        const NewOrder= originalOrder.slice() 
        // the  is courrect to delete form the array 
        NewOrder.pop()

        if(NewOrder.length===0){
          clearInterval(timer)
          setUnorder(false)
        }
        return NewOrder
      })
    },300)
    // to diable the box time intervels add
  };

  const activatedCells = (index) => {
    // this funtion is filled the color
    const NewOrder = [...order, index];
    setOrder(NewOrder);
    // console.log(NewOrder);
    // unfilled the box
    if (NewOrder.length === arr.flat(1).filter(Boolean).length) {
      deactivatedCells();
    }
  };

  return (
    <>
      <div className="waraper">
      <h1 className="">Grid-light</h1>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${arr[0].length}, 1fr)`,
          }}
        >
          
          {arr
            .flat(1)
            .map((value, index) =>
              value ? (
                <Cells
                  key={index}
                  filled={order.includes(index)}
                  onClick={() => activatedCells(index)}
                  isDisabled={order.includes(index)||unorder}
                />
              ) : (
                <span />
              )
            )}
        </div>
      </div>
    </>
  );
}

export default App;
