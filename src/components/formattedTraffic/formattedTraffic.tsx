import SelectionNumber from "../selectionNumber/selectionNumber";
import { IData_TrafficItem } from "../../utils/interface";

const FormattedTraffic = (traffic: IData_TrafficItem) => {
  const { value, count } = traffic;
  const persentCount = (count * 100).toFixed(1);
  return (
    <>
      {value} <SelectionNumber>{persentCount}%</SelectionNumber>
    </>
  );
}

export default FormattedTraffic;
