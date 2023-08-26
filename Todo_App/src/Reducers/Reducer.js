const reducer = (state, action) => {
    if (action.type === "setInitialState") {
        state = action.payload.initialState
    }
    if (action.type === 'AddTodo') {
        if (action.payload.text === '') {
            alert("Please Enter Your Task!")
        } else {
            state.push({ text: action.payload.text, status: "Pending" })
            localStorage.setItem('myTask', JSON.stringify(state))
        }
    }
    if (action.type === 'updateTodo') {
        const index = action.payload.index
        if (state[index].status === "Pending") {
            state[index].status = "Completed"
        } else {
            state[index].status = "Pending"
        }
        localStorage.setItem('myTask', JSON.stringify(state))
    }
    if (action.type === 'deleteTodo') {
        const index = action.payload.index
        state.splice(index, 1)
        localStorage.setItem('myTask', JSON.stringify(state))
    }
    return [...state]

}

export default reducer;