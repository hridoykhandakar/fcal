import React from "react";
import { useState } from "react";
import "./app.css";

const App = () => {
  const [price, setPrice] = useState();
  const [weight, setWeight] = useState([]);
  const [oprice, setOprice] = useState(0);
  const [oweight, setoWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalWeight, setTotalWeight] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [finalWeight, setFinalWeight] = useState(0);
  const [isAdd, setIsAdd] = useState(false);
  const [five, setFive] = useState(0);
  function calculate(price, weightArray) {
    let sum = 0;
    for (let i = 0; i < weightArray.length; i++) {
      sum += weightArray[i];
    }
    let P_mod = 5 * (sum / 100);
    let pWeight = sum - P_mod;

    let finalPrice = Math.floor((pWeight / 40) * price);
    setOprice(finalPrice);
    setoWeight(pWeight.toFixed(1));
  }
  const handleClick = (e) => {
    e.preventDefault();
    try {
      let cprice = parseInt(price);
      let myArray = weight.split("+");
      let weightArray = [];
      for (let i = 0; i < myArray.length; i++) {
        weightArray.push(parseFloat(myArray[i]));
      }
      calculate(cprice, weightArray);
      setIsAdd(true);
    } catch (error) {
      let notFound = error.message;
    }
  };
  const handleClick2 = () => {
    try {
      let cprice = parseInt(price);
      let myArray = weight.split("+");
      let weightArray = [];
      for (let i = 0; i < myArray.length; i++) {
        weightArray.push(parseFloat(myArray[i]));
      }
      calculate(cprice, weightArray);
    } catch (error) {
      console.log(error);
    }
  };

  const showMe = (e) => {
    setWeight(e.target.value);
    e.preventDefault();
    handleClick2();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrice(" ");
    setWeight([]);
  };
  const clsForm = (e) => {
    e.preventDefault();
    setPrice("");
    setWeight([]);
    console.log("you fuc");
  };
  const addValue = (e) => {
    e.preventDefault();
    try {
      setTotalPrice((oldPrice) => [...oldPrice, oprice]);
      setTotalWeight((oldWeight) => [...oldWeight, parseFloat(oweight)]);
      setOprice(0);
      setoWeight(0);
      setIsAdd(false);
    } catch (error) {
      return error.message;
    }
  };
  const finalOutputP = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    setFinalPrice(sum);
  };
  const finalOutputW = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    setFive(sum + (sum / 100) * 5);
    setFinalWeight(sum.toFixed(1));
  };
  const totalOutput = (e) => {
    e.preventDefault();
    // console.log(totalPrice, totalWeight);
    finalOutputP(totalPrice);
    finalOutputW(totalWeight);
  };
  const clear = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <main>
        {/* <h1>Fish Calculator</h1> */}
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="">Fish Price</label>

          <input
            className="input"
            type="textarea"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Fish Price"
          />
          <label htmlFor="">Fish Weight</label>
          <textarea
            className="input"
            onChange={showMe}
            placeholder="Fish Weight"
            value={weight}
            name=""
            id=""
            cols="30"
            rows="2"
          ></textarea>
          <div className="button-section">
            <button className="btn cls" onClick={clsForm}>
              Clear
            </button>
            {/* <input type="submit" value="Clear fuck" /> */}
            {/* <input
              onClick={clsForm}
              className="btn cls"
              type="submit"
              value="Clear fuck"
            /> */}
            <button onClick={handleClick} className="btn cal">
              Calculate
            </button>
          </div>
        </form>
        <div className="output">
          {/* <p>{notFound}</p> */}
          <p>
            Price : <span className="bold">{oprice}</span>
          </p>
          <p>
            Weight : <span className="bold">{oweight}</span>
          </p>
          {oprice !== 0 && isAdd ? (
            <button className="btn" onClick={addValue}>
              Add value
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="finalOutput">
          <form>
            <input className="input" value={totalPrice} />
            <input className="input" value={totalWeight} />
            <button className="btn" onClick={totalOutput}>
              Total
            </button>
          </form>
          <p>Total Price : {finalPrice}</p>
          <p>Total Weight : {finalWeight}</p>
          <p>Total 5%+Weight : {five}</p>
          <button type="submit" onClick={clear} className="btn cls">
            Clear All
          </button>
        </div>
      </main>
    </div>
  );
};
export default App;
