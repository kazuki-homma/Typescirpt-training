"use strict";
class Job {
    constructor(name, ganle) {
        this.name = name;
        this.ganle = ganle;
    }
    greeting() {
        console.log(`私は${this.name}です。ジャンルは${this.ganle}です。`);
    }
}
const job = new Job('消防士', '公務員');
job.greeting();
//# sourceMappingURL=practice.js.map