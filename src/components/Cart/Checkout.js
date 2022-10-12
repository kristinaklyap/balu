import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button";

const validateTextInput = (val) => val.trim() !== "";
const addOrderHandler = async (props, order) => {
  console.log(order);

  //POST
  const response = await fetch(
    "https://react-http-1e246-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  props.clearCart();
  props.onCancel();
};
const Checkout = (props) => {
  let formIsValid = false;

  const {
    enteredValue: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    onChangeHandler: nameInputOnChange,
    onBlurHandler: nameInputOnBlur,
    reset: nameInputReset,
  } = useInput(validateTextInput);

  const {
    enteredValue: streetInput,
    isValid: streetInputIsValid,
    hasError: streetInputHasError,
    onChangeHandler: streetInputOnChange,
    onBlurHandler: streetInputOnBlur,
    reset: streetInputReset,
  } = useInput(validateTextInput);

  const {
    enteredValue: postalInput,
    isValid: postalInputIsValid,
    hasError: postalInputHasError,
    onChangeHandler: postalInputOnChange,
    onBlurHandler: postalInputOnBlur,
    reset: postalInputReset,
  } = useInput(validateTextInput);

  const {
    enteredValue: cityInput,
    isValid: cityInputIsValid,
    hasError: cityInputHasError,
    onChangeHandler: cityInputOnChange,
    onBlurHandler: cityInputOnBlur,
    reset: cityInputReset,
  } = useInput(validateTextInput);

  if (
    nameInputIsValid &&
    streetInputIsValid &&
    postalInputIsValid &&
    cityInputIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    console.log("items", props.order);
    console.log("total", props.total);

    addOrderHandler(props, {
      order_items: props.order,
      total: props.total,
      customer_details: {
        name: nameInput,
        street: streetInput,
        postal: postalInput,
        city: cityInput,
      },
    });

    nameInputReset();
    streetInputReset();
    cityInputReset();
    postalInputReset();
  };
  return (
    <form className={classes.checkout_form} onSubmit={formSubmissionHandler}>
      <div
        className={`${classes["form-control"]}  ${
          nameInputHasError ? `${classes["has-error"]}` : ""
        }`}
      >
        <label htmlFor={"name"}>Name</label>
        <input
          id={"name"}
          type={"text"}
          value={nameInput}
          onChange={nameInputOnChange}
          onBlur={nameInputOnBlur}
        />
        {nameInputHasError && (
          <p className={classes.error}>Please provide your name</p>
        )}
      </div>
      <div
        className={`${classes["form-control"]}   ${
          streetInputHasError ? `${classes["has-error"]}` : ""
        }`}
      >
        <label htmlFor={"street"}>Street</label>
        <input
          id={"street"}
          type={"text"}
          value={streetInput}
          onChange={streetInputOnChange}
          onBlur={streetInputOnBlur}
        />
        {streetInputHasError && (
          <p className={classes.error}>Please provide the adress</p>
        )}
      </div>
      <div
        className={`${classes["form-control"]}  ${
          postalInputHasError ? `${classes["has-error"]}` : ""
        }`}
      >
        <label htmlFor={"postal"}>Postal code</label>
        <input
          id={"postal"}
          type={"text"}
          value={postalInput}
          onChange={postalInputOnChange}
          onBlur={postalInputOnBlur}
        />
        {postalInputHasError && (
          <p className={classes.error}>Please provide the postal code</p>
        )}
      </div>
      <div
        className={`${classes["form-control"]}  ${
          cityInputHasError ? `${classes["has-error"]}` : ""
        }`}
      >
        <label htmlFor={"city"}>City</label>
        <input
          id={"city"}
          type={"text"}
          value={cityInput}
          onChange={cityInputOnChange}
          onBlur={cityInputOnBlur}
        />
        {cityInputHasError && (
          <p className={classes.error}>Please provide the city</p>
        )}
      </div>
      <Button type={"button"} onClick={props.onCancel} text={"Cancel"} />
      <Button
        className={"button--primary"}
        disabled={!formIsValid}
        text={"Confirm"}
      />
    </form>
  );
};

export default Checkout;
