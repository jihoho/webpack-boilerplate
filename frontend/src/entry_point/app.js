import "../common/style/reset.scss";
import "../common/style/global.scss";
import Router from "../router/router";

const router = new Router();

window.onload = () => {
    router.initialRoutes();
};
