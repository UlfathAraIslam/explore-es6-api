class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}
class Instructor extends TeamMember {
    designation = ' Web Course Instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    // method
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuize(module) {
        console.log(`please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Developer extends TeamMember{
    designation = ' Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    // method
    developerFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}
class JobPlacement extends TeamMember{
    designation = ' Job Placement Commandos'
    team = 'Job Placement'
    location;
    region;
    constructor(name, location, region) {
        super(name, location);
        this.tech = tech;
        this.region = region;
    }
    // method
    provideResume(feature){
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasha', ('kolkata', 'India'));
console.log(bipasha);