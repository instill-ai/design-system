import React from "react";
import SquareProgressBase, {
  SquareProgressBaseProps,
} from "../SquareProgressBase";

export type DarkBgSquareProgressProps = Omit<
  SquareProgressBaseProps,
  "bgColor" | "cubeColor" | "animationDuration"
>;

const DarkBgSquareProgress: React.FC<DarkBgSquareProgressProps> = (props) => {
  return (
    <SquareProgressBase
      isError={props.isError}
      isLoading={props.isLoading}
      bgColor="bg-instillGrey80"
      cubeColor="bg-instillBlue50"
      animationDuration={3}
    />
  );
};

export default DarkBgSquareProgress;
