import { IWebProject } from './interfaces.js';
declare class WebProject implements IWebProject {
    id: number;
    code: string;
    name: string;
    closed: boolean;
    frontend_url: string;
    constructor(id: number, code: string, name: string, closed: boolean, frontend_url: string);
    closeProject(): boolean;
}
export { WebProject };
