import React from 'react';
import Task from './Task.js'

class TaskMamanger extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="task-manager">
                <ol className="inventory">
                    {this.props.tasks.map((task) => {
                        return (
                            <Task key={task.id} project={task.project} name={task.name}
                                  totalUnits={task.totalUnits} completedUnits={task.completedUnits}/> );
                    })}
                </ol>
            </div>
        );
    }

}

export default TaskMamanger;