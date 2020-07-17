import storage from 'redux-persist/lib/storage/index'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import basketReducer from './basket'
import configReducer from './config'

const persistedBasketReducer = persistReducer({ 
    key: 'basket', 
    storage: storage 
}, basketReducer)

const persistedConfigReducer = persistReducer({ 
    key: 'config', 
    storage: storage 
}, configReducer)


const rootReducer = combineReducers({
    basket: persistedBasketReducer,
    config: persistedConfigReducer,
});

export default rootReducer