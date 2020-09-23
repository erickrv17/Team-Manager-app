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
    startingP: [],
    substituteP: []
}

const reducerManager = (state = initialState, action) => {
    return state
}

export default createStore(reducerManager)