let initialState = {
  isLoading: true
}

export default function WeatherList( state = initialState, action) {
  console.log(state)
  switch( action.type ) {
    case 'FETCH_DATA_SUCCESS':
      return Object.assign({},
        state,
        { 'forecastData': action.forecastData },
        { 'isLoading': action.isLoading} )
    default:
      return state
  }
}
