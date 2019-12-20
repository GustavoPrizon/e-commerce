import { createStore } from 'redux';

import rootReducer from './modules/rooteReducer';

const store = createStore(rootReducer);

export default store;
