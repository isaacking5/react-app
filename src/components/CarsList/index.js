import React from 'react';

let carListNumbes = [1];
class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: carListNumbes,
        };
    }

    addCarToCarsList = () => {
        const newId = this.state.id[carListNumbes.length - 1] + 1;
        carListNumbes.push(newId);
        this.setState({
            id: carListNumbes
        });
    }

    removeCarFromCarsList = (event) => {
        let index = Number(event.target.id);
        console.log("original", carListNumbes);
        let newCarListNumbes = (this.state.id).filter((eachEl) => {
            console.log(eachEl);
            return (eachEl !== index);
        });
        // console.log("newCar", newCarListNumbes);
        carListNumbes = newCarListNumbes;
        // console.log(carListNumbes);
        this.setState({
            id: carListNumbes,
        });
    }

    renderCarsList = () => {
        const numOfCars = this.state.id;
        let carListItems = numOfCars.map((eachEl) => {
            return (<li key={eachEl.toString()} className="cars-li-tag">{<Car carNumber={eachEl} remove={this.removeCarFromCarsList}/>}</li>);
        });
        return (carListItems);
    }
    render() {
        return (
            <div className = "main-car-container">
                <div className="add-car">
                <button className = "default-car-buttons add-car-button" onClick={this.addCarToCarsList}>Add Car</button>
                </div>
                <ul className="cars-ul-tag">{this.renderCarsList()}</ul>
            </div>
        );
    }
}


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            speed: 0,
            applyBreak: false,
        };
    }

    onStartOrStop = () => {
        this.setState(items => {
            items.status = !items.status;
            items.status ? items.applyBreak = "" : items.applyBreak = false;
            items.speed = 0;
            return items.status;
        });
    }

    onApplyBrake = () => {
        this.setState(items => {
            if (items.speed > 10)
                items.speed -= 10;
            else {
                items.speed = 0;
                items.applyBreak = false;
            }
            return items.speed;
        });
    }
    onAccelerate = () => {
        this.setState(items => {
            if (items.status === true) {
                items.speed += 10;
                items.applyBreak = true;
            }
            else
                items.speed = 0;
            return items.speed;

        });
    }
    displayStatusText() {
        if (this.state.speed >= 10 && this.state.status === true)
            return (`Running with speed of ${this.state.speed}kmph`);
        else
            return (this.state.status ? "Running" : "Stopped");
    }

    render() {
        return (<div className = "car-list-block">
        <div className = "car1">
        <div className = "car1-main-block">
            <p className ="carDisplayText car-list-number">Car : {this.props.carNumber}</p>
            <p className = "carDisplayText remove-car" id={this.props.carNumber}onClick = {this.props.remove}>X</p>
        </div>
            <button className ={this.state.status? "carSpeedControlButton stop-button":"carSpeedControlButton start-button"} onClick = {this.onStartOrStop}>
                {this.state.status ? "Stop":"Start"}
            </button>
            <p className="carDisplayText">Status:- {this.displayStatusText()}</p>
            <div className = "car-function">
                <button className={this.state.status ?"carSpeedControlButton accelerate-active":"carSpeedControlButton accelerate"} onClick = {this.onAccelerate}>Accelerate</button>
                <button className={this.state.applyBreak ? "carSpeedControlButton apply-break-active":"carSpeedControlButton apply-break"} onClick={this.onApplyBrake}>Apply Break</button>
            </div>
        </div>
        </div>);
    }
}

export { CarsList };
// ReactDOM.render(<CarsList/>, document.getElementById("root"));
