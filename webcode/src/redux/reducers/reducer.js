const initialState = {
    dataTables : [],
};

const dataReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
        case "Get_API" : 
            return {...state, dataTables: payload};
        default : return state;
       
    }
}

export default dataReducers;