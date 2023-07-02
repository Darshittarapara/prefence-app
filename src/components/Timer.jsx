import React, { useEffect, useRef, useState } from 'react';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';

const Timer = ({ id, onStop, activeTimerId }) => {
    const timerId = useRef();
    const { activeTaskId } = useSelector((state) => state.TimerReducer)
    const [timerState, setTimerState] = useState({
        minute: 0,
        running: false
    });

    useEffect(() => {
        if (activeTaskId !== id) {
            clearInterval(timerId.current);
            setTimerState((preViewState) => {
                return {
                    ...preViewState,
                    minute: 0
                }
            })
        }
        if (activeTaskId === id) {

            timerId.current = setInterval(() => {
                setTimerState((preViewState) => {
                    return {
                        ...preViewState,
                        running: true,
                        minute: timerState.minute + 1
                    }
                })
            }, 1000);

        }
        return () => {
            clearInterval(timerId.current);
        };
    }, [activeTaskId, id, timerState.minute]);

    const startTimerHandler = () => {
        onStop(id); // Notify the parent component to stop other timers
        localStorage.setItem("preViewId", id);
        setTimerState((preViewState) => {
            return {
                ...preViewState,
                running: true,
                minute: timerState.minute + 1
            }
        })
    };

    const endTimerHandler = () => {
        setTimerState((preViewState) => {
            return {
                ...preViewState,
                running: false,
            }
        })
        clearInterval(timerId.current);
    };

    return (
        <div>
            {timerState.running ? (
                <Button onClick={endTimerHandler} text={'End task'} />
            ) : (
                <Button onClick={startTimerHandler} text={'Start task'} />
            )}
            {timerState.minute}
        </div>
    );
};

const Button = ({ text, onClick }) => {
    return <button type="button" onClick={onClick}>{text}</button>;
};
export default Timer