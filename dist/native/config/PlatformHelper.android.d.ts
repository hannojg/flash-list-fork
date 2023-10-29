import { ScrollViewProps } from "react-native";
import { BaseItemAnimator } from "recyclerlistview";
declare const PlatformConfig: {
    defaultDrawDistance: number;
    invertedTransformStyle: {
        transform: {
            rotate: string;
        }[];
    };
    invertedTransformStyleHorizontal: {
        transform: {
            rotate: string;
        }[];
    };
};
declare const getCellContainerPlatformStyles: (inverted: boolean, parentProps: {
    x: number;
    y: number;
    isHorizontal?: boolean;
}) => {
    transform: string;
    WebkitTransform: string;
} | undefined;
declare const getItemAnimator: () => BaseItemAnimator | undefined;
declare const getFooterContainer: () => React.ComponentClass | undefined;
declare const getBidirectionalScrollView: (experimentalScrollPositionManagement: boolean, renderScrollComponent: React.FC<ScrollViewProps> | React.ComponentType<ScrollViewProps> | undefined) => (new (props: import("recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView").ScrollViewDefaultProps) => import("recyclerlistview").BaseScrollView) | undefined;
export { PlatformConfig, getCellContainerPlatformStyles, getItemAnimator, getFooterContainer, getBidirectionalScrollView, };
//# sourceMappingURL=PlatformHelper.android.d.ts.map