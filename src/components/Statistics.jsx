import { Component } from "react";


class Statistics extends Component {

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return <div >
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
        </div>
    }
}

export default Statistics;