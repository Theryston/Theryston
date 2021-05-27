class InternalService {
    constructor() { }

    async status(): Promise<number> {
        return 200;
    }
}

export { InternalService }