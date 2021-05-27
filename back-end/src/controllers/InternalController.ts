import { InternalService } from './../services/InternalServices';
import { Request, Response } from "express";


class InternalController {
    internalService = new InternalService();

    constructor() {
    }

    async status(req: Request, res: Response) {
        res.sendStatus(await this.internalService.status())
    }
}

export { InternalController };