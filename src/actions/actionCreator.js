const actionCreator = {
    changeFilter:type => ({
        type:"CHANGE_FILTER",
        payLoad:type
    }),
    addTask:text => ({
        type:"ADD_TASK",
        payLoad:text
    }),
    completeTask:index => ({
        type:"COMPLETE_TASK",
        payLoad:index
    })
}

export default actionCreator;