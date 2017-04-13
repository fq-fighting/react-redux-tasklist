import Immutable  from "immutable";
const initState = {
    taskFilter:"all",
    list:[]
}

const reducer = (state = initState,action)=>{
    switch(action.type){
        case "CHANGE_FILTER":
            return {...state,taskFilter:action.payLoad};
        case "ADD_TASK":
            return {...state,list:[...state.list,{text:action.payLoad,complete:false}]};
        case "COMPLETE_TASK":
            return Immutable.fromJS(state).setIn(["list",action.payLoad,"complete"],true).toJS();
        default:
            return state;
    }
}

export default reducer;