import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./app/reducers";
import thunkMiddleware from "redux-thunk";


export default function configureStore(preloadedState?: any) {
    const composeEnhancer: typeof compose =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer(),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                thunkMiddleware
            )
        )
    );

    // // Hot reloading
    // if (module.hot) {
    //   // Enable Webpack hot module replacement for reducers
    //   module.hot.accept("./reducers", () => {
    //     store.replaceReducer(rootReducer(history));
    //   });
    // }

    // return store;
}
