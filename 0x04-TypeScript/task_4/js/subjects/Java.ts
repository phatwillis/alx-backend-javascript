namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number,
    }
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava == undefined) {
                return 'No available teacher'
            } else if (this.teacher.experienceTeachingJava <= 0){
                return 'No available teacher'
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}
