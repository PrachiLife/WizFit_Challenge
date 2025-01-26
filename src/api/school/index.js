import { httpClient } from "../httpClient";

export async function fetchSchoolDetails(payload) {
    try {
        const params = payload ? { search: payload } : {};
        const response = await httpClient.get("campaign/campaign_school_list/", {
            params,
        });
        return response.data;
    }catch(err){
        console.log(err);
    }
}