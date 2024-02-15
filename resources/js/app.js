import "./bootstrap";
import { createApp } from "vue";

import router from "./routes/index";
import Example from "./Components/Example.vue";
import App from "./Components/App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
