import { useState } from 'react';
import AddButton from './AddTask';
import AddIcon from '../assets/plus-solid.svg';
import MinusIcon from '../assets/minus-solid.svg';
import DeleteTask from './DeleteTask';
import { TaskList } from './TaskList';

/**Imported all appropriate parts from each of the components to run. Set up the TaskModal Typescript file to handle the modal that is created to list all of the available tasks. */

interface TaskModalProps {
    onClose: () => void;
    selectedDate: string | null;
}

/** Set up Interface props to tel the TaskModal what is expected to be taken in, including onClose and selectedDate. */

const TaskModal: React.FC<TaskModalProps> = ({ onClose }) => {
    const [tasks, setTasks] = useState(TaskList); //created a state change for the task list to update when there are tasks added to the task list.
    const addTask = () => {
        const newTask = { id: tasks.length, text: "" }; 
        setTasks([...tasks, newTask]); //Created an 'addTask' function that will add in a new blank task when the plus button is clicked within the modal.
    };

    const deleteTask = (idToDelete: number) => {
        setTasks(tasks.filter(task => task.id !== idToDelete));
    }; //Created a 'deleteTask' function that will filter out the task that the "minus button", when clicked will close out.

    const handleTaskChange = (id: number, newText: string) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    }; //Created a task change handler for when the blank is created, it will accept the incoming text as the task.

    return (
        <div className="modal" tabIndex={-1} style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-scrollable" style={{ width: '500px', maxWidth: '100%', height: '500px', maxHeight: '100%' }}>
                <div className="modal-content" style={{ width: '100%', height: '100%' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">TaskModal</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {tasks.map(task => (
                            <div key={task.id} className="task-item">
                                <input
                                    type="text"
                                    value={task.text}
                                    onChange={(e) => handleTaskChange(task.id, e.target.value)} //displays the task text from the task list.
                                />
                                <DeleteTask icon={MinusIcon} onClick={() => deleteTask(task.id)} /> 
                            </div>// Created the modal layout and included the "deleteTask" button for each of the task that will call the 'deleteTask' function and refer to the task id.
                        ))}
                    </div>
                    <div className="modal-footer">
                        <AddButton icon={AddIcon} onClick={addTask} /> 
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div> 
            </div>
        </div>
    ); //Included a modal footer that includes an Add Button that will create a new task within the list, as well as a button to close and a button to save changes 'not usable right now'.
};

export default TaskModal;
