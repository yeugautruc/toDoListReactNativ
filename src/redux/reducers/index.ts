
import { combineReducers } from "redux";
import { ShoppingReducer } from "./shoppingReducers";
import { UserReducer } from "./userReduces";

const rootReducer = combineReducers({
    userReducer: UserReducer,
    shoppingReducer: ShoppingReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }