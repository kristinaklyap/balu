import { useState } from "react";

const useInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFn(enteredValue);
  const hasError = !isValid && isTouched;

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true)
  }

  const onBlurHandler = (e) => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false)
  }

  return {
    enteredValue,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset
  }
}
export default useInput