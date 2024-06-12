import {createStore} from 'redux';
import createdReducers from '../reducers/Features';

const store = createStore(createdReducers);

export default store;