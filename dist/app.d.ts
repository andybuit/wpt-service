import { User } from "./entities/user";
export interface Context {
    user: User;
}
declare class App {
    private app;
    private routePrv;
    private scheduler;
    private mongoUrl;
    constructor();
    private config;
    private schedule;
    private mongoSetup;
    private apolloServerSetup;
    start(PORT: any): void;
}
export default App;
