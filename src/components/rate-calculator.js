import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayRate: 10,
            hours: 2
        };
    }

    setDayRate(rate) {
        this.setState({
            dayRate: rate
        });
    }

    setHours(hours) {
        this.setState({
            hours: hours
        });
    }

    calculateHourly() {
      return (this.state.dayRate / this.state.hours).toFixed(2);
    }


    render() {
        // const rate = 10;
        return (
            <form>
                <NumberInput 
                  id="day-rate" 
                  label="Day rate" 
                  min={0} 
                  max={5000} 
                  onChange={value => this.setDayRate(value)} 
                  value={this.state.dayRate} 
                />

                <NumberInput 
                  id="hours" 
                  label="Hours" 
                  min={1} 
                  max={12} 
                  onChange={value => this.setHours(value)} 
                  value={this.state.hours}
                />

                <Output 
                  id="hourly-rate" 
                  label="Hourly rate" 
                  value={this.calculateHourly()} 
                />

            </form>
        );
    }
}

