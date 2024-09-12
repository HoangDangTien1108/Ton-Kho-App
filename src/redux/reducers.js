const initialState = {
    openmenu: false,
    selectmenu: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'OPENMENU':
            return {
                openmenu: state.openmenu = true,
                ...state
            }
        case 'CLOSEMENU':
            return {
                openmenu: state.openmenu = false,
                ...state
            }
        case 'SELECTMENU':
            return {
                selectmenu: state.selectmenu = true,
                ...state
            }    
            
        default: 
            return state;
    }
}

export default rootReducer;