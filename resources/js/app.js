import "./bootstrap";
import { createApp } from "vue";
import Example from "./Components/Example.vue";
import App from "./Components/App.vue";

const app = createApp(App);

app.mount("#app");
