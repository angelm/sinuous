import React from 'react';

import UnitTimer from './UnitTimer.js';
import DailySummary from './DailySummary.js';
import TaskManager from './TaskManager.js';


class DailyTracker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unitDuration: 25, // 25 min in millisecs
            breakDuration: 5  // 5 min in millisecs
        };
    }

    render(){
        return (
            <div id="tracker" className="daily-tracker">
                <UnitTimer unitDuration={this.state.unitDuration}/>
                <DailySummary completed="5" expected="9"
                              unitDuration={this.state.unitDuration}
                              breakDuration={this.state.breakDuration}/>
                <TaskManager tasks={this.props.tasks} />
            </div> );
    }
}

export default DailyTracker;