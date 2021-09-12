import React, { useState } from 'react';
import Plateau from './model/Plateau';
import Rover from './model/Rover';
import Validator from './lib/Validator';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';

function App() {
  const [plateauMaxX, setPlateauMaxX] = useState('');
  const [plateauMaxY, setPlateauMaxY] = useState('');
  const [initialPositionRover1, setInitialPositionRover1] = useState('');
  const [initialPositionRover2, setInitialPositionRover2] = useState('');
  const [commandsRover1, setCommandsRover1] = useState('');
  const [commandsRover2, setCommandsRover2] = useState('');
  const [outputRover1, setOutputRover1] = useState('');
  const [outputRover2, setOutputRover2] = useState('');

  function fillDemoValues() {
    setPlateauMaxX('10');
    setPlateauMaxY('10');
    setInitialPositionRover1('1 2 N');
    setInitialPositionRover2('3 3 E');
    setCommandsRover1('LMLMLMLMM');
    setCommandsRover2('MRRMMRMRRM');
  }

  function clearFields() {
    setPlateauMaxX('');
    setPlateauMaxY('');
    setInitialPositionRover1('');
    setInitialPositionRover2('');
    setCommandsRover1('');
    setCommandsRover2('');
    setOutputRover1('');
    setOutputRover2('');
  }

  function showErrorMessage(message) {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  }

  function initializeRovers(event) {
    event.preventDefault();
    const fields = { plateauMaxX, plateauMaxY, initialPositionRover1, initialPositionRover2, commandsRover1, commandsRover2, outputRover1, outputRover2 };

    const validator = new Validator(fields);

    if (validator.validateForm()) {
      try {
        //Create the Plateau rectangle (10 x 10)
        const plateau = new Plateau(plateauMaxX, plateauMaxY);
        const rover1 = new Rover(plateau);

        //Set initial position for the Rover 1
        rover1.startRover(initialPositionRover1);

        //Send the commands to the Rover 1
        rover1.sendCommands(commandsRover1);
        const currentPositionRover1 = rover1.getCurrentPosition(commandsRover1);
        setOutputRover1(currentPositionRover1);

        const rover2 = new Rover(plateau);

        //Set initial position for the Rover 2
        rover2.startRover(initialPositionRover2);

        //Send the commands to the Rover 2
        rover2.sendCommands(commandsRover2);
        const currentPositionRover2 = rover2.getCurrentPosition(commandsRover2);
        setOutputRover2(currentPositionRover2);
      } catch (e) {
        console.error(e);
        showErrorMessage(e);
      }
    } else {
      const errorMessages = validator.getErrorMessage();
      [...errorMessages].forEach(errorMessage => {
        showErrorMessage(errorMessage);
      });
    }
  }

  return (
    <div className="container">
      <div className="content">
        <p>Mars Rover in JavaScript.</p>
        <ToastContainer />
        <form id="rover_form" onSubmit={initializeRovers}>
          <label>Plateau max X and max Y:</label>
          <div className="row">
            <input
              type="text"
              id="plateauMaxX"
              placeholder="Max X"
              value={plateauMaxX}
              onChange={event => setPlateauMaxX(event.target.value)}
            />
            <input
              type="text"
              id="plateauMaxY"
              placeholder="Max Y"
              value={plateauMaxY}
              onChange={event => setPlateauMaxY(event.target.value)}
            />
          </div>

          <hr /><br />

          <label>Rover 1</label>
          <div className="row">
            <input
              type="text"
              id="initialPositionRover1"
              placeholder="0 0 N - Initial Position"
              value={initialPositionRover1}
              onChange={event => setInitialPositionRover1(event.target.value)}
            />
            <input
              type="text"
              id="commandsRover1"
              placeholder="LRM - Rover Commands"
              value={commandsRover1}
              onChange={event => setCommandsRover1(event.target.value)}
            />
          </div>

          <hr /><br />

          <label>Rover 2</label>
          <div className="row">
            <input
              type="text"
              id="initialPositionRover2"
              placeholder="0 0 N - Initial Position"
              value={initialPositionRover2}
              onChange={event => setInitialPositionRover2(event.target.value)}
            />
            <input
              type="text"
              id="commandsRover2"
              placeholder="LRM - Rover Commands"
              value={commandsRover2}
              onChange={event => setCommandsRover2(event.target.value)}
            />
          </div>

          <hr /><br />

          <div>
            <button className="btn-start" type="submit">Start Rovers</button>
            <button className="btn-demo" type="button" onClick={fillDemoValues}>Demo Values</button>
            <button className="btn-clear" type="button" onClick={clearFields}>Clear Fields</button>
          </div>

          <br /><hr /><br />

          <label>Output Rover 1:</label>
          <input
            type="text"
            id="outputRover1"
            placeholder=""
            value={outputRover1}
            onChange={event => setOutputRover1(event.target.value)}
            disabled
          />
          <label>Output Rover 2:</label>
          <input
            type="text"
            id="outputRover2"
            placeholder=""
            value={outputRover2}
            onChange={event => setOutputRover2(event.target.value)}
            disabled
          />
        </form>
      </div>
    </div >
  );
}

export default App;