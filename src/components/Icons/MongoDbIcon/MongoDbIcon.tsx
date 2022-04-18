import React from "react";
import IconBase, { IconBaseProps } from "../IconBase";

export type MongoDbIconProps = Omit<
  IconBaseProps,
  "viewBox" | "color" | "fill"
>;

const MongoDbIcon: React.FC<MongoDbIconProps> = (props) => {
  return (
    <IconBase
      viewBox="0 0 30 30"
      width={props.width}
      height={props.height}
      position={props.position}
      fill="none"
    >
      <path
        d="M16.8813 7.27514C16.0445 6.3071 15.3234 5.31707 15.177 5.11391C15.174 5.10962 15.1699 5.10612 15.1652 5.10369C15.1605 5.10127 15.1552 5.10001 15.1499 5.10001C15.1446 5.10001 15.1393 5.10127 15.1346 5.1037C15.1299 5.10612 15.1258 5.10963 15.1228 5.11392C14.9764 5.31708 14.2555 6.3071 13.4187 7.27514C6.24599 16.2322 14.5508 22.2754 14.5508 22.2754L14.6181 22.3213C14.6811 23.2563 14.8375 24.6 14.8375 24.6H15.4625C15.4625 24.6 15.6183 23.2621 15.6815 22.3274L15.7492 22.2754C15.7492 22.2754 24.054 16.2322 16.8813 7.27514ZM15.15 22.1441C15.15 22.1441 14.7777 21.8328 14.6772 21.6769L14.6763 21.6601L15.1266 11.9084C15.1269 11.9025 15.1295 11.8969 15.1338 11.8928C15.1382 11.8887 15.144 11.8864 15.15 11.8864C15.156 11.8864 15.1618 11.8887 15.1662 11.8928C15.1706 11.8969 15.1731 11.9025 15.1734 11.9084L15.6237 21.6601L15.6229 21.6768C15.5224 21.8327 15.15 22.1441 15.15 22.1441Z"
        fill="#00684A"
      />
    </IconBase>
  );
};

export default MongoDbIcon;
