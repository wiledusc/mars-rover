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

  function clearOuputs() {
    setOutputRover1('');
    setOutputRover2('');
  }

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

  function executeRover1(plateau) {
    const rover1 = new Rover(plateau);

    rover1.startRover(initialPositionRover1);
    rover1.sendCommands(commandsRover1);

    const currentPositionRover1 = rover1.getCurrentPosition(commandsRover1);

    setOutputRover1(currentPositionRover1);
  }

  function executeRover2(plateau) {
    const rover2 = new Rover(plateau);

    rover2.startRover(initialPositionRover2);
    rover2.sendCommands(commandsRover2);

    const currentPositionRover2 = rover2.getCurrentPosition(commandsRover2);

    setOutputRover2(currentPositionRover2);
  }

  function initializeRovers(event) {
    event.preventDefault();
    const fields = { plateauMaxX, plateauMaxY, initialPositionRover1, initialPositionRover2, commandsRover1, commandsRover2, outputRover1, outputRover2 };

    const validator = new Validator(fields);

    if (validator.validatePlateau() && (validator.validateRover1() || validator.validateRover2())) {
      try {

        const plateau = new Plateau(plateauMaxX, plateauMaxY);

        if (validator.validateRover1()) {
          executeRover1(plateau);
        }

        if (validator.validateRover2()) {
          executeRover2(plateau);
        }

      } catch (e) {
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
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={plateauMaxX}
              onChange={event => {clearOuputs(); setPlateauMaxX(event.target.value)}}
            />
            <input
              type="text"
              id="plateauMaxY"
              placeholder="Max Y"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={plateauMaxY}
              onChange={event => {clearOuputs(); setPlateauMaxY(event.target.value)}}
            />
          </div>

          <hr /><br />

          <label>Rover 1</label>
          <div className="row">
            <input
              type="text"
              id="initialPositionRover1"
              placeholder="0 0 N - Initial Position"
              onKeyPress={(event) => {
                if (!/[0-9 0-9 NSEW]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={initialPositionRover1}
              onChange={event => {clearOuputs(); setInitialPositionRover1(event.target.value)}}
            />
            <input
              type="text"
              id="commandsRover1"
              placeholder="LRM - Rover Commands"
              value={commandsRover1}
              onKeyPress={(event) => {
                if (!/[LRMlrm]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={event => {clearOuputs(); setCommandsRover1(event.target.value)}}
            />
          </div>

          <hr /><br />

          <label>Rover 2</label>
          <div className="row">
            <input
              type="text"
              id="initialPositionRover2"
              placeholder="0 0 N - Initial Position"
              onKeyPress={(event) => {
                if (!/[0-9 0-9 NSEW]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={initialPositionRover2}
              onChange={event => {clearOuputs(); setInitialPositionRover2(event.target.value)}}
            />
            <input
              type="text"
              id="commandsRover2"
              placeholder="LRM - Rover Commands"
              onKeyPress={(event) => {
                if (!/[LRMlrm]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={commandsRover2}
              onChange={event => {clearOuputs(); setCommandsRover2(event.target.value)}}
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