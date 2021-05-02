export default class Style {
    app: HTMLElement;

    constructor () {
        this.app = document.getElementById("body");
    }

    initStyle () {
        this.app.style.margin = "0";
        this.app.style.padding = "0";
        this.app.style.overflow = "hidden";
    }
}