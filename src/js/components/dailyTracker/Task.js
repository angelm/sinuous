import React from 'react';


let TaskTask = "foo";

class Task extends React.Component {

    constructor(props){
        super(props);

        this.unitCompletedStile = "unit fa fa-square";
        this.unitPendingStile = "unit fa fa-square-o";

    }

    renderUnits() {
        let unitsMarkup = [];
        for(let i = 0; i < this.props.totalUnits; i++){
            let unitClass = i < this.props.completedUnits ? this.unitCompletedStile : this.unitPendingStile;
            unitsMarkup.push(React.DOM.div({className: unitClass, key: i}));
        }
        return unitsMarkup;
    }

    render(){
        return (
            <li className="task">
                <span className="project">{this.props.project}: </span>
                <span className="name">{this.props.name}</span>
                <div className="units-completion-display">
                    {this.renderUnits()}
                </div>
            </li>
        );
    }
}

export default Task;
