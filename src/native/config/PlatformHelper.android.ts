import { Platform, ScrollViewProps } from "react-native";
import { BaseItemAnimator, RecyclerListViewProps } from "recyclerlistview";

import { BidirectionalScrollView } from "../../BiDirectionalScrollView";

const PlatformConfig = {
  defaultDrawDistance: 250,
  // Using rotate instead of scaleY on Android to avoid performance issues. Issue: https://github.com/Shopify/flash-list/issues/751
  invertedTransformStyle: { transform: [{ rotate: "180deg" }] },
  invertedTransformStyleHorizontal: { transform: [{ rotate: "180deg" }] },
};
const getCellContainerPlatformStyles = (
  inverted: boolean,
  parentProps: { x: number; y: number; isHorizontal?: boolean }
): { transform: string; WebkitTransform: string } | undefined => {
  return undefined;
};

const getItemAnimator = (): BaseItemAnimator | undefined => {
  return undefined;
};

const getFooterContainer = (): React.ComponentClass | undefined => {
  return undefined;
};

const getBidirectionalScrollView = (
  experimentalScrollPositionManagement: boolean,
  renderScrollComponent:
    | React.FC<ScrollViewProps>
    | React.ComponentType<ScrollViewProps>
    | undefined
) => {
  return experimentalScrollPositionManagement && Platform.OS === "android"
    ? (BidirectionalScrollView as unknown as RecyclerListViewProps["externalScrollView"])
    : (renderScrollComponent as unknown as RecyclerListViewProps["externalScrollView"]);
};

export {
  PlatformConfig,
  getCellContainerPlatformStyles,
  getItemAnimator,
  getFooterContainer,
  getBidirectionalScrollView,
};
