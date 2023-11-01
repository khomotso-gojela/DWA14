
export const increaseValue = () => {
    return {
        type: 'ADD'
    }
}

export const decreaseValue = () => {
    return {
        type: 'SUBTRACT'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}