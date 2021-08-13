async function client(endpoint: any, { body, ...customConfig }: any = {}): Promise<any> {
    const headers: any = {};
    let requestBody: any = body;

    if (body && !(body instanceof FormData)) {
        requestBody = JSON.stringify(body);
        headers["content-type"] = "application/json";
    }

    const config: RequestInit = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        }
    };

    if (requestBody) {
        config.body = requestBody;
    }

    const response = await window.fetch(`${endpoint}`, config);

    try {
        return await response.json();
    } catch (err) {
        return response;
    }
}

const graphqlClient = async (query: string, variables?: Record<string, any>): Promise<any> => {
    const response = await client('http://localhost:5000/graphql', {
        body: {
            query,
            variables: variables || {},
        },
    });
    return response;
};

export default graphqlClient;

// const query = `
//     mutation spotifyLogin($input: SpotifyLoginInput!){
//         spotifyLogin(input : $input){
//           access_token,
//           refresh_token,
//           expires_in
//         }
//     }
//     `
// let input = "sample body input"
// let { data } = await graphqlClient(query, { input })
