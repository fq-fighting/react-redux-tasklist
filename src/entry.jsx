import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
//引入reducer
import reducer from './reducers/reducer';
//引入组件
import TaskCont from './containers/taskCont';
//存储state
const store = createStore(reducer);
// 配置路由

render(
    <Provider store={store}>
        <TaskCont />
    </Provider>,
    document.getElementById('bodycontext')
);
