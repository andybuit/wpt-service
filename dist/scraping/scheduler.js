"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron = __importStar(require("node-cron"));
// cron.schedule("* * * * *", () => {
//     console.log(`this message logs every minute`);
// });
class Scheduler {
    constructor() {
        this.jobs = [];
    }
    addJob(job) {
        this.jobs.push(job);
    }
    start() {
        for (const job of this.jobs) {
            cron.schedule(job.cron, job.task);
        }
    }
}
exports.default = Scheduler;
//# sourceMappingURL=scheduler.js.map