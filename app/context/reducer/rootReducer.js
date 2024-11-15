import chatPopupReducer, { chatPopupinitStates } from "./chatPopupReducer"
import chatReducer, { chatInitialStates } from "./chatReducer"
import emailReducer, { emailInitialStates } from "./emailReducer"
import fmReducer, { fmlInitialStates } from "./fmReducer"
import layoutReducer, { layoutInitialStates } from "./layoutReducer"
import todoReducer, { todoInitialState } from "./todoReducer"


export const initialStates = {
    layoutState: layoutInitialStates,
    chatState: chatInitialStates,
    chatPopupState: chatPopupinitStates,
    emailState: emailInitialStates,
    fmState: fmlInitialStates,
    todoState: todoInitialState,
}

export const rootReducer = (state, action) => {
    return {
        layoutState: layoutReducer(state.layoutState, action),
        chatState: chatReducer(state.chatState, action),
        chatPopupState: chatPopupReducer(state.chatPopupState, action),
        emailState: emailReducer(state.emailState, action),
        fmState: fmReducer(state.fmState, action),
        todoState: todoReducer(state.todoState, action),
    }
}