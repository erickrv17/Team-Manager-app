import {createStore} from "redux"

const initialState = {
    players: [{
        id: 1,
        name: "Lionel Messi", 
        picture:"https://i2-prod.football.london/incoming/article18882096.ece/ALTERNATES/s615/0_GettyImages-1266331344.jpg"
    }, {
        id: 2,
        name: "Cristiano Ronaldo", 
        picture:"https://vignette.wikia.nocookie.net/futbol/images/e/e9/Cr7.jpg/revision/latest?cb=20190806210828"
    }],
    starting: [],
    substitute: []
}

const reducerManager = (state = initialState, action) => {
    if(action.type === "Add_Starting"){
        return {
            ...state,
            starting: state.starting.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }
    if(action.type === "Add_Substitute"){
        return{
            ...state,
            substitute: state.substitute.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if(action.type === "remove_Starting"){
        return{
            ...state,
            starting: state.starting.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }

    if(action.type === "remove_Substitute"){
        return{
            ...state,
            substitute: state.substitute.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }
    

    return state
}

export default createStore(reducerManager)