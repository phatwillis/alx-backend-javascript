interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
      } else {
        return new Director();
      }
}

function isDirector(employee: Director | Teacher) {
    const directorobj = new Director()
    return directorobj.workDirectorTasks();
}

function executeWork(employee: Director | Teacher) {
    if (employee === new Director) {
        return isDirector(employee);
    } else {
        const teacherobj = new Teacher()
        return teacherobj.workTeacherTasks();
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}
