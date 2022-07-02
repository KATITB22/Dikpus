import { FailureCallbackFunction, GenericService, SuccessCallbackFunction } from ".";
import APIClient from '../utils/api-client';

class LinkGroupService extends GenericService {

    public async getLinks(slug: string,
        onSuccess?: SuccessCallbackFunction,
        onFail?: FailureCallbackFunction) {

        const response = await APIClient.GET(`/link-groups/${slug}`);
        this.handleResponse(response, onSuccess, onFail);
    }
}

const service = new LinkGroupService();
export default service;