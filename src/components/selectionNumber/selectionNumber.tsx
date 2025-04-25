import { ReactElement, ReactNode } from "react";

type SelectionNumberProps = {
  children: ReactNode;
};

const SelectionNumber = (props: SelectionNumberProps): ReactElement => (
  <span style={{ color: '#fff' }}>{props.children}</span>
);

export default SelectionNumber;
