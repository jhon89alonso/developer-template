import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

import router from "../routes/index";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "XXXXXXXXXXXXXXXXXXXXX";

export const useUserStore = defineStore("user", {
    state: () => ({
        authUser: null,
        loginErrors: null,
        loggedIn: false,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.loginErrors,
        isAuth: (state) => state.loggedIn,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
            console.log("error");
        },
        async getUser() {
            this.getToken();
            await axios
                .get("user")
                .then((response) => {
                    this.authUser = response.data;
                    this.loggedIn = true;
                })
                .catch((error) => {
                    console.log(error);
                    router.push("/login");
                });
        },
        async login(data) {
            this.loginErrors = [];
            console.log("login");
            this.getToken();
            await axios
                .post("login", data)
                .then((response) => {
                    this.getUser();
                    this.loggedIn = true;
                    router.push("/");
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        this.loginErrors = error.response.data.errors;
                    }
                });
        },
    },
});
