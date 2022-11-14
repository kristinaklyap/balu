import React, {useRef, useState} from "react";
import Button from "../UI/Button";
import btnClasses from "../UI/Button.module.scss"
import classes from "../Products/ProductTeaser.module.scss";
import Input from "../UI/Input";

const AddToCart = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    };

    return (
        <>
            {props.disabled === 'disabled' &&
                <p>Przepraszamy, produkt jest niedostępny</p>}
            {props.disabled !== 'disabled' &&
                <form onSubmit={submitHandler}>
                    <Input
                        ref={amountInputRef}
                        input={{
                            id: "amount_" + props.id,
                            type: "number",
                            min: "1",
                            max: props.max || "5",
                            step: "1",
                            defaultValue: "1",
                        }}
                    />

                    <Button
                        className={`${btnClasses[props.customClassName]} ${classes[props.customClassName]}`}
                        text={props.button_text}
                    />
                    {!amountIsValid && <p>please enter the valid amount (1-5) :)</p>}
                </form>
            }
        </>
    );
};

export default AddToCart;
