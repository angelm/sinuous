import React from 'react';

class UnitTimer extends React.Component {

    constructor(props) {
        super(props);
        let time = new Date();
        time.setMinutes(props.unitDuration || 25);
        time.setSeconds(0);
        this.state = {
            timeoutId: null,
            remainingTime: time
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        this.setState({timeoutId: setTimeout(this.onInterval.bind(this), this.state.interval)});
    }

    pauseTimer() {
        if(this.state && this.state.timeoutId){
            clearTimeout(this.state.timeoutId);
        }
    }

    resetTimer() {
        if(this.state && this.state.timeoutId){
            clearTimeout(this.state.timeoutId);
        }
        let time = new Date();
        time.setMinutes(this.props.unitDuration || 25);
        time.setSeconds(0);
        this.setState({remainingTime: time});
    }

    onInterval(){
        var mins = this.state.remainingTime.getMinutes();
        var secs = this.state.remainingTime.getSeconds();

        let remainingTime = new Date(this.state.remainingTime.getTime());
        remainingTime.setSeconds(remainingTime.getSeconds() - 1);

        this.setState({remainingTime: remainingTime});

        if(mins == 0 && secs == 0){
            this.onCountdownEnded()
        } else {
            clearTimeout(this.state.timeoutId);
            this.setState({timeoutId: setTimeout(this.onInterval.bind(this), 1000)});
        }
    }

    onCountdownEnded() {
        // Todo: notify of unit complete to the TaskManager and DailySummary
        console.log("Unit Completed");
    }

    formatClock(){

        let mins = this.state.remainingTime.getMinutes();
        let secs = this.state.remainingTime.getSeconds();

        let strMins = mins < 10 ? "0" + mins : mins;
        let strSecs = secs < 10 ? "0" + secs : secs;

        return  strMins + ':' + strSecs;
    }

    render() {
        return (
            <div className="timer">
                <div className="clock">{this.formatClock()}</div>
                <div className="control-panel">
                    <div className="control time start fa fa-play-circle"
                         onClick={this.startTimer}></div>
                    <div className="control stop fa fa-pause-circle"
                         onClick={this.pauseTimer}></div>
                    <div className="control reset fa fa-stop-circle"
                         onClick={this.resetTimer}></div>
                </div>
            </div>
        );
    }
}

export default UnitTimer;