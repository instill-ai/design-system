import { FC } from "react";
import IconBase, { IconBaseProps } from "../IconBase";

export type SnowflakeIconProps = Omit<IconBaseProps, "viewBox" | "color">;

const SnowflakeIcon: FC<SnowflakeIconProps> = (props) => {
  return (
    <IconBase
      viewBox="0 0 100 100"
      width={props.width}
      height={props.height}
      position={props.position}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.2325 39.4747C47.2325 40.5043 46.8888 41.3054 46.2026 41.9911C45.1729 43.0214 43.4569 43.2499 42.313 42.449L30.8723 35.8134C30.8148 35.8134 30.7861 35.7848 30.7574 35.7563C30.7288 35.7277 30.7001 35.6992 30.643 35.6992C29.0414 34.784 28.5841 32.7249 29.6138 31.1228C30.5286 29.5212 32.5881 29.0639 34.1898 30.0931L40.5965 33.869V26.3175C40.5965 24.4872 42.0837 23 43.9144 23C45.7449 23 47.2325 24.4872 47.2325 26.3175V39.4747ZM39.5666 47.0248C40.7107 47.5972 41.2831 48.7413 41.2831 49.9999C41.2831 51.2584 40.7107 52.4025 39.6815 52.9747L28.2401 59.6099H28.0115C26.2956 60.5251 24.3509 59.9536 23.4354 58.2376C22.52 56.5213 23.2066 54.5759 24.8082 53.6611L31.3294 49.8852L24.8082 46.1098C24.7511 46.1098 24.7226 46.0812 24.694 46.0526C24.6654 46.024 24.6368 45.9954 24.5796 45.9954C22.9779 45.0801 22.52 43.0212 23.5499 41.4189C24.4651 39.8173 26.5243 39.36 28.1263 40.3892L39.5666 47.0248ZM47.2325 73.6825V60.4111C47.3463 59.9536 47.1176 59.381 46.889 59.0381C45.974 57.3221 43.8002 56.7499 42.1986 57.6654L30.7572 64.301C30.6999 64.301 30.6713 64.3296 30.6427 64.3582C30.6142 64.3868 30.5856 64.4154 30.5286 64.4154C28.9269 65.3307 28.4694 67.39 29.4993 68.9919C30.4141 70.5935 32.4737 71.0508 34.0753 70.0215L40.5965 66.2459V73.6825C40.5965 75.5128 42.0837 77 43.9144 77C45.7449 77 47.2325 75.513 47.2325 73.6825ZM53.1813 73.6823V60.7544C53.0669 60.1823 53.2957 59.381 53.5241 58.8093C54.4394 57.2074 56.499 56.6352 58.1006 57.5507L69.5415 64.1863C69.5986 64.1863 69.6272 64.2149 69.6557 64.2435C69.6843 64.2721 69.7129 64.3008 69.7702 64.3008C71.3718 65.216 71.8298 67.2749 70.7998 68.8772C69.8846 70.4788 67.825 70.9361 66.2234 69.9069L59.8167 66.2457V73.6823C59.8167 75.5126 58.3295 76.9998 56.4992 76.9998C54.6685 76.9998 53.1813 75.5128 53.1813 73.6823ZM60.8466 47.0248C59.7025 47.5972 59.1307 48.7413 59.1307 49.9999C59.0163 51.2584 59.7025 52.4025 60.7324 52.8596L72.1731 59.4952C72.2303 59.4952 72.2589 59.5238 72.2875 59.5525C72.3161 59.581 72.3446 59.6096 72.4017 59.6096C74.1175 60.5249 76.0629 59.8389 76.9782 58.2373C77.8932 56.521 77.207 54.5757 75.6054 53.6609L69.0838 49.8852L75.6054 46.1098C75.6626 46.1098 75.6913 46.0812 75.7199 46.0525C75.7484 46.024 75.777 45.9954 75.834 45.9954C77.4359 45.0801 77.8932 43.0212 76.864 41.4189C75.9487 39.8173 73.8891 39.36 72.2875 40.3892L60.8466 47.0248ZM53.1813 26.3175V39.2458C53.0669 39.9319 53.2957 40.6188 53.5241 41.1905C54.4394 42.7921 56.499 43.3643 58.1006 42.4488L69.5415 35.8132C69.5986 35.8132 69.6272 35.7847 69.6557 35.7562C69.6843 35.7276 69.7129 35.699 69.7702 35.699C71.3718 34.7838 71.8298 32.7246 70.7998 31.1226C69.8846 29.5209 67.825 29.0637 66.2234 30.0929L59.8167 33.7541V26.3175C59.8167 24.4872 58.3295 23 56.4992 23C54.6685 23 53.1813 24.4872 53.1813 26.3175ZM50.7786 43.7074C51.1217 43.7074 51.351 43.8223 51.5797 44.0507L56.0412 48.6271C56.2701 48.8555 56.3848 49.0844 56.3848 49.4275V50.5721C56.3848 50.8007 56.2701 51.1438 56.1557 51.3726L51.5797 55.9491C51.351 56.1777 51.1217 56.2922 50.7786 56.2922H49.6345C49.2914 56.2922 49.0626 56.1777 48.8339 55.9491L44.2575 51.3726C44.0288 51.144 43.9144 50.9154 43.9144 50.5721V49.4275C43.9144 49.0846 44.0288 48.8558 44.2575 48.6271L48.8339 44.0507C49.0626 43.8223 49.2914 43.7074 49.6345 43.7074H50.7786ZM50.3211 47.8261C50.55 47.8261 50.7786 47.9405 50.8931 48.0554L52.2658 49.4277C52.38 49.5421 52.4949 49.7715 52.4949 50.0001C52.4949 50.229 52.38 50.4581 52.2658 50.5725L50.8931 51.945C50.7786 52.0593 50.5498 52.1741 50.3211 52.1741C50.0918 52.1741 49.8629 52.0593 49.7492 51.945L48.376 50.5725C48.2615 50.4581 48.1471 50.229 48.1471 50.0001C48.1471 49.7715 48.2615 49.5421 48.376 49.4277L49.7492 48.0554C49.8632 47.9405 50.0918 47.8261 50.3211 47.8261Z"
        fill="#31BEF0"
      />
    </IconBase>
  );
};

export default SnowflakeIcon;