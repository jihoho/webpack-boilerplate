
export default class Router {
    initialRoutes() {
        window.onpopstate = () => this.renderHTML(window.location.pathname);
        this.renderHTML(window.location.pathname);
    }

    historyRouterPush(pathName) {
        window.history.pushState({}, pathName, window.location.origin + pathName);
        this.renderHTML(pathName);
    }

    renderHTML(path) {
        let $article = document.querySelector("#article");
        let $header = document.querySelector("#header");
        let $footer = document.querySelector("#footer");
        if (path === "/") {
            $article.innerHTML='<h1>hello!!</h1>';
        } 
    }
}
