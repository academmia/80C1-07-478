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
declare class Attachment {
    id: number;
    name: string;
    description: string;
    private _owner;
    static admin: string;
    constructor(id: number, name: string, description: string);
    printInfo(): void;
    get owner(): string;
    set owner(newOwner: string);
}
declare class VideoAttachment extends Attachment {
    length: number;
}
declare class PdfAttachment extends Attachment {
    language: string;
    constructor(id: number, name: string, description: string, language: string);
    printInfo(): void;
}
export { WebProject, Attachment, VideoAttachment, PdfAttachment };
