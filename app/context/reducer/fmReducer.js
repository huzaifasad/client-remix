export const fmlInitialStates = {
    showInfo: false,
};

const fmReducer = (state = fmlInitialStates, action) => {
    switch (action.type) {
        case "show_fmInfo":
            return {
                ...state,
                showInfo: action.showInfo
            };
        default:
            return state;
    }
};

export default fmReducer