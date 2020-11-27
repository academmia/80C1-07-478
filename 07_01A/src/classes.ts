import {Task, IUpperText, IWebProject, IApiProject} from './interfaces.js';

class WebProject implements IWebProject {
    id: number;
    code: string;   
    name: string;
    closed: boolean = false;
    frontend_url: string;
    constructor(id: number, code: string, name: string, closed: boolean, frontend_url: string) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.closed = closed;
        this.frontend_url = frontend_url;
    }
    closeProject(): boolean {
        console.log('Closing project...' + this.code);
        this.closed = true;
        return true;
    }
}

export {WebProject}