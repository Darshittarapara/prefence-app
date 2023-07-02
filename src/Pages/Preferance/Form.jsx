import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { RadioInput } from "../../components/RadioInput/RadioInput";
import Button from "../../components/Button/Button";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import MealsTitle from "../../components/Meals/MeaslTitle/MealsTitle";
import { addPrefenceAction } from "../../redux/MealsReducer";
import { store } from "../../redux/store";
const initalState = {
    name: "",
    breakFast: "",
    lunch: "",
    dinner: "",
}
const Form = () => {
    const [users, setUser] = useState(initalState);
    const { list } = useSelector((state) => state.MealsReducer);
    const [status, setStatus] = useState("");
    const dispatch = useDispatch()
    const breakFastList = list["breakFast"];
    const lunchList = list["lunch"];
    const dinnerList = list["dinner"]
    const { name, breakFast, lunch, dinner } = users;
    const updateState = (value, statekey) => {
        setStatus("")
        setUser((preViewState) => {
            return {
                ...preViewState,
                [statekey]: value
            }
        })
    }
    const handlerChange = (name, stateKey) => {
        updateState(name, stateKey)
    }
    const isEmpty = (value) => {
        return value === ''
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        const anyEmpty = Object.values(users).some((item) => isEmpty(item));
        if (anyEmpty) return

        setStatus("process");
        dispatch(addPrefenceAction(users))
        setTimeout(() => {
            setStatus("success");
            setUser(initalState)
        }, 500);
    }
    return (
        <form onSubmit={handlerSubmit}>
            <ul>
                <li>
                    <Input
                        type="text"
                        name="name"
                        onChange={handlerChange}
                        value={name}
                        label={"Name"}
                        id={name}
                    />
                </li>
                <li>
                    <MealsTitle title="Break Fast" />
                    {breakFastList?.map((item, index) => {
                        return (
                            <RadioInput
                                name="breakFast"
                                value={breakFast}
                                label={item.name}
                                stateId={"breakFast"}
                                onChange={handlerChange}
                                id={item.id}
                                key={item.id}
                            />
                        )
                    })}
                </li>
                <li>
                    <MealsTitle title="Lunch" />
                    {lunchList?.map((item) => {
                        return (
                            <RadioInput
                                name="lunch"
                                value={lunch}
                                onChange={handlerChange}
                                label={item.name}
                                stateId={"lunch"}
                                key={item.id}
                                id={item.id}
                            />
                        )
                    })}
                </li>
                <li>
                    <MealsTitle title="Dinner" />
                    {dinnerList?.map((item) => {
                        return (
                            <RadioInput
                                name="dinner"
                                value={dinner}
                                label={item.name}
                                stateId={"dinner"}
                                onChange={handlerChange}
                                id={item.id}
                                key={item.id}
                            />
                        )
                    })}
                </li>
                <li>
                    <Button type="submit" text="Add Prefence" disable={status === "process"} />
                </li>
                <li>
                    {status === "success" && <p>Your Prefence successfully add</p>}
                    {status === "process" && <p>Loading...</p>}
                </li>

            </ul>
        </form>
    );
};

export default Form;
