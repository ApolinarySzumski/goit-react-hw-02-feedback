import React, { Component } from 'react';
import Statictics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    // Complicated this maths, so first multiplication set value in percentage,
    // second with division is for set number in format with two decimal places

    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100 * 100) /
      100
    );

    // Code below this commentery could be useful in situation without conditional rendering,
    // simple write above code as variable (result)

    // if (isNaN(result)) {
    //   return 0;
    // }
    // return result;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
