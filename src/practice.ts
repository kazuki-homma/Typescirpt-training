class Job {
    constructor(private name: string, private ganle: string) {

    }

    greeting(this: Job) {
        console.log(`私は${this.name}です。ジャンルは${this.ganle}です。`)
    }
}

const job = new Job('消防士', '公務員');
job.greeting();