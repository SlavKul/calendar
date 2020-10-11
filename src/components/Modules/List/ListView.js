import React from "react";
import MonthHeader from "./MonthHeader/MonthHeader";
import axios from "axios";
import MonthTitle from './MonthTitle/MonthTitle'

/*class List extends React.Component {
  state = {
    startDate: this.props.date
      .clone()
      .subtract(1, "month")
      .startOf("month")
      .format("YYYY-MM-DDThh:mm"),
    months: [],
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8083/v1/calendar/api/events/count?end= &start=${this.state.startDate}`
      )
      .then((response) => {
        return this.setState({
          months: response.data,
        });
      });
  }
  render() {
    console.log("RENDER LIST_VIEW");
    return (
      <div>
        <MonthTitle date={'Září 2020'}/>
        <MonthTitle date={'Rijen 2020'}/>
        <MonthTitle date={'Listopad 2020'}/>
        {this.state.months.reverse().map((month, index) => (
          <MonthHeader
            key={index}
            name={month.month}
            amount={month.count}
            isShown={
              month.month === this.props.date.format("YYYY-MM") ? true : false
            }
          />
        ))}
      </div>
    );
  }
}
*/
export default List;
