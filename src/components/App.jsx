import 'modern-normalize';
import css from "./App.module.css";
import React, { Component } from "react";

import { Section } from "./Section/Section";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleOnButtons = type => {
    this.setState((state) => ({
      [type]: state[type] + 1
    }))
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;

  };

  countPositiveFeedbackPercentage = () => {
    let part = ((this.state.good) * 100) / (this.state.good + this.state.neutral + this.state.bad)
    return Math.round(part)
  }
  
  render() {
    return (
    <div className={css.wrapper}>
        
        <Section title={"Please leave feedback"} state={this.state} onButtons={this.handleOnButtons} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </div>
  );
  }
  
};
