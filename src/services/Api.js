import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const saveJobsApi = async (data, header) => {
    return await commonRequest("POST", `${BASE_URL}/api/h1/jobs`, data, header);
}

export const allJobsDataApi = async () => {
    return await commonRequest("GET", `${BASE_URL}/api/h1/jobs`, "");
}

export const deleteSingleJobApi = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/api/h1/jobs/${id}`);
}

