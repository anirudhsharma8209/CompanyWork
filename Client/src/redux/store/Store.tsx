import {createStore} from 'redux';
import createdReducer from  '../reducers/reducers';

const store = createStore(createdReducer);

export default store;