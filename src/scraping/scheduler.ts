import * as cron from "node-cron";

export type Job = {
    cron: string,
    task: () => void
}

// cron.schedule("* * * * *", () => {
//     console.log(`this message logs every minute`);
// });

export default class Scheduler {

    private jobs: Job[] = [];

    addJob(job: Job) {
        this.jobs.push(job);
    }

    start() {
        for (const job of this.jobs) {
            cron.schedule(job.cron, job.task);
        }
    }
}