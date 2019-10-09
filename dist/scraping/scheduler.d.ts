export declare type Job = {
    cron: string;
    task: () => void;
};
export default class Scheduler {
    private jobs;
    addJob(job: Job): void;
    start(): void;
}
