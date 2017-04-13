import React from "react";
import {connect} from "react-redux";
import actionCreator from "../actions/actionCreator";
import {Button,Menu,SubMenu} from "antd";

class TaskCont extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {state, addTask, filterAll, filterComplete, filterActive ,completeTask} = this.props;
        console.log(state);
        let list;
        if(state.taskFilter == "all"){
            list = state.list.map((task,index)=>{
                if(task.complete === true){
                    return task.text;
                } else{
                    return <a key={index} onClick={()=>completeTask(index)}>{task.text}</a>;
                }
            });
        }else if(state.taskFilter == "complete"){
            list  = state.list.map((task,index)=>{
                if(task.complete === true){
                    return task.text;
                }
            });
        }
        else if(state.taskFilter == "active"){
            list  = state.list.map((task,index)=>{
                if(task.complete === false){
                    return <a key={index} onClick={()=>completeTask(index)}>{task.text}</a>;
                }
            });
        }
        let list2 = [];
        list.map(item=>{
            if(typeof item !== "undefined"){
                list2.push(item);
            }
        });
        return (<div>
            <div id="inset">
                <input ref="input" />
                <button onClick={()=>{addTask(this.refs.input.value);this.refs.input.value = ""}}>inset</button>
            </div>
            <div id="list">
                <Menu>
                    {
                        list2.map((task,index)=><Menu.Item key={index}>{task}</Menu.Item>)
                    }
                </Menu>
            </div>
            <div id="filter">
                <Button className={state.taskFilter=="all" ? "focus" : "gray"} onClick={filterAll}>all</Button>
                <Button className={state.taskFilter=="complete" ? "focus" : "gray"} onClick={filterComplete}>complete</Button>
                <Button className={state.taskFilter=="active" ? "focus" : "gray"} onClick={filterActive}>active</Button>
            </div>
        </div>);
    }
}
const mapStateToProps = (state)=>{
    return{
        state:state
    };
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addTask:text=>{dispatch(actionCreator.addTask(text))},
        filterAll:()=>{dispatch(actionCreator.changeFilter("all"))},
        filterComplete:()=>{dispatch(actionCreator.changeFilter("complete"))},
        filterActive:()=>{dispatch(actionCreator.changeFilter("active"))},
        completeTask:index=>{dispatch(actionCreator.completeTask(index))},
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(TaskCont);