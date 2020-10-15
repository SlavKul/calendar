import React from "react";
import moment from "moment";
import {
  useCalendarContext,
  CalendarContext,
  EventModel,
} from "../../App.definitions";
import MonthTitle from "./MonthTitle/MonthTitle";
import { sortMonthTitleDate } from "../../../utilities/moment-locale";

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
        console.log(response.data)
        return this.setState({
          months: response.data,
        });
      });
  }
  render() {
    console.log("RENDER LIST_VIEW");
    return (
      <div>
        <MonthTitle date={'Rijen 2020'}/>
        <MonthTitle date={'Listopad 2020'}/>
        {this.state.months.reverse().map((month, index) => (
          <MonthTitle date={month.month}/>
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
}*/

interface ListViewProps {
  data: any[];
}

const ListView: React.FC<ListViewProps> = ({ data }) => {
  console.log("LISTVIEW IS RENDERED");
  const listOfEvents = data
    .sort((a, b) => sortMonthTitleDate(a, b))
    .map((each) => (
      <MonthTitle key={each[0]} date={each[0]} events={each[1]} />
    ));
  return <>{listOfEvents}</>;
};

export default ListView;
