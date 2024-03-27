import { Component } from "react";
import Statistics from "components/Statistics";
import Buttons from "components/FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";
import css from "components/App.module.css";


class Feedback extends Component {
  static defaultProps = {
    total: 0
  };

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

handleClick = event => {
    const { name } = event.target;

    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;

    return(

    <div className={css.container}>
      <Section title="Please leave feedback">
      <Buttons
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleClick} />
      </Section>
      <Section title="Statistics">
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()} />
        <Notification message="There is no feedback"></Notification>
        </Section>
    </div>)
  }
}

export default Feedback;