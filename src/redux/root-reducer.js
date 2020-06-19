import { combineReducers } from 'redux';
import linksReducer from './links/link.reducer';
// import readingReducer from './readings/readings.reducer';
// import chartDataReducer from './chartData/chartData.reducer';

export default combineReducers({
    links: linksReducer,
    // reading: readingReducer,
    // chartData: chartDataReducer
});