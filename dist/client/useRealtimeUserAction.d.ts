import { RealtimeUserAction } from "../models/RealtimeUserAction";
declare const _default: (callback?: ((actionId: string, value: string, userInfo?: {
    name: string;
    color: string;
    avator: string;
} | undefined) => void) | undefined) => {
    loading: boolean;
    pushUserAction: (args: any) => void;
    createdUserAction: (args: any) => void;
    userActionList: RealtimeUserAction[];
} | {
    pushUserAction: (actionId: string, value: string) => void;
    createdUserAction: RealtimeUserAction | undefined;
    userActionList: RealtimeUserAction[];
    loading?: undefined;
};
export default _default;
