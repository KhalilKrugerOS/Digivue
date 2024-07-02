import fetch from "node-fetch";

export const GetAllUsers = async (page: number, limit: number) => {
    try {
        const url = new URL("https://6683fa1f56e7503d1adee974.mockapi.io/api/v1/users");
        url.searchParams.append("page", page.toString());
        url.searchParams.append("limit", limit.toString());
        //const URL = url.toString();
        const res = await fetch(url, { headers: { 'content-type': 'application/json' } });
        const data = await res.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log(error)
    }
}
