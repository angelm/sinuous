import React from 'react';

class DailySummary extends React.Component {

    constructor(props){
        super(props);
    }

    getEta(){
        let unitDuration = this.props.unitDuration;
        let breakDuration = this.props.breakDuration;
        let eta = new Date();
        eta.setMinutes(eta.getMinutes()
                       + (this.props.expected - this.props.completed)
                       * (unitDuration + breakDuration));
        return eta.getHours() % 12 + ':' + eta.getMinutes() + " " +
              (eta.getHours() >= 12 ? 'pm' : 'am');
    }

    render() {
        return (
            <div className="daily-summary">
                <div className="header">Daily Summary</div>
                <div className="daily-totals">
                    <div className="expected-units"><b>Units Expected:</b> {this.props.expected}</div>
                    <div className="completed-units"><b>Units Completed:</b> {this.props.completed}</div>
                    <div className="completion-time"><b>ETA:</b> {this.getEta()}</div>
                </div>
            </div>);
    }

}

export default DailySummary;