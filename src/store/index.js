import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe( () => {
    console.log('STATE\n', store.getState());
});

export default store;