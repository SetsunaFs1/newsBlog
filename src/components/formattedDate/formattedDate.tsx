import dayjs from "dayjs";
import SelectionNumber from "../selectionNumber/selectionNumber";

const FormattedDate = (time: string) => {
  const date = dayjs(time);
  const monthAndYear = dayjs(date).format(" MMM YYYY");
  return (
    <span>
      <SelectionNumber>{date.date()}</SelectionNumber>
      {monthAndYear}
    </span>
  );
}

export default FormattedDate;
