import { Request, Response } from "express";
export declare class ContactController {
    addNewContact(req: Request, res: Response): void;
    getContacts(req: Request, res: Response): void;
    getContactWithID(req: Request, res: Response): void;
    updateContact(req: Request, res: Response): void;
    deleteContact(req: Request, res: Response): void;
}
