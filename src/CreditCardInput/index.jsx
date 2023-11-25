import { useState, useRef, useEffect, createRef } from "react";
import './style.css';

export const CreditCardInput = () => {

  const [cardInputFocus, setCardInputFocus] = useState(["", "", "", ""]);
  const [cardInputFocusIndex, setCardInputFocusIndex] = useState(0);
  const cardInputRef = useRef([createRef(), createRef(), createRef(), createRef()]);

  useEffect(() => {
    if (cardInputFocus[cardInputFocusIndex].length === 4 && cardInputFocusIndex < 3) {
      cardInputRef[cardInputFocusIndex + 1].focus();
      setCardInputFocusIndex(cardInputFocusIndex + 1);
    }
  }, [cardInputFocus]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      const newChar = value[value.length - 1];
      if (newChar >= 0 && newChar <= 9) {
        cardInputFocus[cardInputFocusIndex] = value;
        setCardInputFocus([...cardInputFocus]);
      }
    }   
  };

  const handleClick = (i) => {
    setCardInputFocusIndex(i);
  }

  return (
    <form>
      <label>Enter your credit card number:</label><br/>
      <div className="inputs">
        <input type="tel" inputMode="numeric" ref={el => cardInputRef[0] = el} value={cardInputFocus[0]} onClick={() => handleClick(0)} onChange={handleChange} name="field-1" maxLength={4} pattern="\d{4}" autoFocus />
        <input type="tel" inputMode="numeric" ref={el => cardInputRef[1] = el} value={cardInputFocus[1]} onClick={() => handleClick(1)} onChange={handleChange} name="field-1" maxLength={4} pattern="\d{4}" />
        <input type="tel" inputMode="numeric" ref={el => cardInputRef[2] = el} value={cardInputFocus[2]} onClick={() => handleClick(2)} onChange={handleChange} name="field-1" maxLength={4} pattern="\d{4}" />
        <input type="tel" inputMode="numeric" ref={el => cardInputRef[3] = el} value={cardInputFocus[3]} onClick={() => handleClick(3)} onChange={handleChange} name="field-1" maxLength={4} pattern="\d{4}" />
      </div>
      
    </form>
  );
};

export default CreditCardInput;