import React, { FC } from "react";
import IconBase, { IconBaseProps } from "../IconBase";

export type IdIconProps = Omit<IconBaseProps, "viewBox" | "fill">;

const IdIcon: FC<IdIconProps> = (props) => {
  return (
    <IconBase
      viewBox="0 0 30 30"
      width={props.width}
      height={props.height}
      color={props.color}
      position={props.position}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1583 6C20.0332 6 19.9213 6.07757 19.8774 6.19466L18.6 9.60088H13.6497L14.8479 6.40571C14.9215 6.20959 14.7765 6.00037 14.567 6.00037H12.9579C12.8328 6.00037 12.7209 6.07795 12.677 6.19504L11.3998 9.60088H8.09981C7.93412 9.60088 7.79981 9.73519 7.79981 9.90088V11.1008C7.79981 11.2665 7.93413 11.4008 8.09981 11.4008H10.7248L8.70005 16.8001H6.3C6.13431 16.8001 6 16.9344 6 17.1001V18.3001C6 18.4658 6.13432 18.6001 6.3 18.6001H8.02507L6.15209 23.5947C6.07855 23.7908 6.22353 24 6.43299 24H8.04215C8.1672 24 8.27914 23.9224 8.32305 23.8053L10.275 18.6001H15.2253L13.3525 23.5943C13.2789 23.7904 13.4239 23.9996 13.6334 23.9996H15.2425C15.3676 23.9996 15.4795 23.9221 15.5234 23.805L17.4753 18.6001H21.8997C22.0654 18.6001 22.1997 18.4658 22.1997 18.3001V17.1001C22.1997 16.9344 22.0654 16.8001 21.8997 16.8001H18.1503L20.175 11.4008H23.6995C23.8652 11.4008 23.9995 11.2665 23.9995 11.1008V9.90088C23.9995 9.73519 23.8652 9.60088 23.6995 9.60088H20.85L22.0483 6.40534C22.1219 6.20921 21.9769 6 21.7674 6H20.1583ZM15.9003 16.8001L17.925 11.4008H12.9747L10.95 16.8001H15.9003Z"
      />
    </IconBase>
  );
};

export default IdIcon;
