import { APIErrorObject } from '../utils/api-error-object';

export type SuccessCallbackFunction = (response: Record<string, any>) => void;
export type FailureCallbackFunction = (error: APIErrorObject) => void;

export abstract class GenericService {
    protected handleResponse(
        response: Record<string, any> | APIErrorObject,
        onSuccess?: SuccessCallbackFunction,
        onFail?: FailureCallbackFunction
    ) {
        if (response instanceof APIErrorObject) {
            if (!onFail) return;

            return onFail(response);
        }
        if (onSuccess) {
            onSuccess(response);
        }
    }
}
