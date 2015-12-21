import React from 'react';
import ReactDOM from 'react-dom';

import DailyTracker from './components/dailyTracker/DailyTracker.js';

let tasks = [ {
    id: 9993,
    project: "Holidays Fun",
    name: "Buy StarWars tickets",
    totalUnits: "1",
    completedUnits: "0"
},{
    id: 9994,
    project: "Personal Development",
    name: "Learn ClojureScript",
    totalUnits: "5",
    completedUnits: "3"
}, {
    id: 9995,
    project: "Personal Development",
    name: "Finish ES6 Katas",
    totalUnits: "3",
    completedUnits: "2"
} ];

let dailyTrackerContainerNode = document.getElementById("daily-tracker-container");

ReactDOM.render(<DailyTracker tasks={tasks}/>, dailyTrackerContainerNode);