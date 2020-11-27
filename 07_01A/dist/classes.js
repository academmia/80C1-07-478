class WebProject {
    constructor(id, code, name, closed, frontend_url) {
        this.closed = false;
        this.id = id;
        this.code = code;
        this.name = name;
        this.closed = closed;
        this.frontend_url = frontend_url;
    }
    closeProject() {
        console.log('Closing project...' + this.code);
        this.closed = true;
        return true;
    }
}
export { WebProject };
//# sourceMappingURL=classes.js.map