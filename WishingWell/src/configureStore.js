import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';

export default createStore(
    reducers,
    applyMiddleware(thunk)
);
