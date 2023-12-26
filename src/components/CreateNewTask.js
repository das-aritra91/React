import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';


export default function CreateNewTask({ open, handleClose }) {
    const [taskName, setTaskName] = useState('');
    const [completionTime, setCompletionTime] = useState('');
    const [error, setError] = useState('');

    const handleCloseDialog = () => {
        handleClose();
    };

    const handleButtonClick = () => {

        if (taskName.trim() === '' && completionTime.trim() === '') {
            console.log('Please provide a value.');
            setError('Please provide a value.'); // Show error message if input is empty
        } else {

            // Validate completion time
            const currentTime = new Date();
            const selectedTime = new Date(completionTime);

            if (selectedTime <= currentTime) {
                console.log('Completion time should be greater than the current time.')
                setError('Completion time should be greater than the current time.');
                return;
            }

            // Handle button click (you can replace this with your logic)
            console.log('Task Name:', taskName);
            console.log('Completion Time:', completionTime);

            // Reset form fields and error
            setTaskName('');
            setCompletionTime('');
            setError('');

            handleClose();
        }
    };

    // const closeModal = () => {
    //     {handleClose}
    // }


    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Create a task</DialogTitle>
                <DialogContent>
                    <div>
                        <label>
                            Task Name:
                            <input
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Completion Time:
                            <input
                                type="datetime-local"
                                value={completionTime}
                                onChange={(e) => setCompletionTime(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleButtonClick} autoFocus>
                        Add
                    </Button>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
            {/* </form> */}
        </div>
    );
}