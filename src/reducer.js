const INITIAL_STATE={
    routeIndex:0,
}

export default function Reducer(state=INITIAL_STATE, action){
switch(action.type){
    case "ROUTE_INDEX":{
        return{
            ...state,
            routeIndex:action.payload,
        }
    }
    default :return state
}
}