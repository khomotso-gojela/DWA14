import { reducer } from "./reducer.js";

const states = [{
    value: 0,
    status: 'NORMAL',
    alert: false
}]

export const getState = () => {
    return Object.freeze({ ...states[0] });
}

const subscribers = []

export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(getState() , action);

    subscribers.forEach( (sub)=> sub(prev,next) )

    states.unshift(next)
}

export const subscribe = (subscription) => {
    subscribers.push(subscription)
    
    const unsubscriibe = ( ) => {
        const newSub = subscribers.filter((sub) => sub != subscription)
        subscribers = newSub
    }

    return unsubscriibe
} 