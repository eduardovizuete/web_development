export const authAPI = {
    //this login async function will take credentials = {email, passoword}
    api_login: async (credentials) => {
        return fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", //keep this its important, will tell later
            },
            // we need to send the JSON string of credentials as body 
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                // this is where we are catching the "throw Error("error message")" 
                // we made in backend (open the backend/modals/userModal.js and see)
                return { error };
            });
    },
    api_signup: async (credentials) => {
        return fetch("/api/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                return { error };
            });
    },
};