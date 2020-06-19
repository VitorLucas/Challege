import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../root-reducer'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [logger];
const state = "Debug"

let store;

if ( state === "Release") {    
    store = createStore(persistedReducer, applyMiddleware(...middlewares));
}else
{
    const composeEnhancer =composeWithDevTools( { maxAge: 400 } );
    store = createStore(persistedReducer, composeEnhancer(
        applyMiddleware(...middlewares),  
      ));    
};

let persistor = persistStore(store);

export {store, persistor};