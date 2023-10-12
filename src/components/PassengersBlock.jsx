import { PassengersItem } from "./PassengersItem";
import { AddPassengers } from "./AddPassengers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PassengersBlock = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(
        Array(2)
      .fill()
      .map((e, i) => i + 1)
    )

    const handleClick = () => {
        navigate('/payment')
    }

    return (
        <>
            <section className="passengers-block">
                { count.map((item) => (
                    <PassengersItem id={item}/>
                ))
                }
                <AddPassengers count={count} setCount={setCount}/>
                <button className="btn passengers-block-next" onClick={handleClick}>Далее</button>
            </section>
        </>
    )
}