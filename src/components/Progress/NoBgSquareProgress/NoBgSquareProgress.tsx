import React from "react";
import SquareProgressBase, {
  SquareProgressBaseProps,
} from "../SquareProgressBase";

export type NoBgSquareProgressProps = Omit<
  SquareProgressBaseProps,
  "bgColor" | "cubeColor" | "animationDuration"
>;

const NoBgSquareProgress: React.FC<NoBgSquareProgressProps> = (props) => {
  return (
    <SquareProgressBase
      isError={props.isError}
      isLoading={props.isLoading}
      bgColor=""
      cubeColor="bg-instillBlue50"
      animationDuration={3}
    />
  );
};

export default NoBgSquareProgress;
