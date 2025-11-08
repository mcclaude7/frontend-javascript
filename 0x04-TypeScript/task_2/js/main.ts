interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
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

class Teacher implements TeacherInterface{
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
export function createEmployee(salary: number | string): Director | Teacher {
        salary = Number(salary);  

    if (salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }  
}


export function isDirector(employee: Director | Teacher): employee is Director{
    return employee instanceof Director;
}

 export function executeWork(employee: Director | Teacher): string {
    if  (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else{
        return employee.workTeacherTasks();
    }
}

// // ✅ String literal type for allowed subjects
// export type Subjects = 'Math' | 'History';

// // ✅ teachClass function
// export function teachClass(todayClass: Subjects): string {
//   if (todayClass === 'Math') {
//     return 'Teaching Math';
//   } else {
//     return 'Teaching History';
//   }
// }
// export type Subjects = 'Math' | 'History';

// export function teachClass(todayClass: Subjects): string {
//   if (todayClass === 'Math') {
//     return 'Teaching Math';
//   } 
//   return 'Teaching History';
// }
// export type Subjects = 'Math' | 'History';

// export function teachClass(todayClass: Subjects): string {
//   if (todayClass === 'Math') {
//     return 'Teaching Math';
//   } else {
//     return 'Teaching History';
//   }
// }

// String literal type using constants
const MATH = "Math" as const;
const HISTORY = "History" as const;

type Subjects = typeof MATH | typeof HISTORY;

export function teachClass(todayClass: Subjects): string {
  if (todayClass === MATH) {
    return `Teaching ${MATH}`;
  } else {
    return `Teaching ${HISTORY}`;
  }
}

// Example usage:
console.log(teachClass(MATH));    // Teaching Math
console.log(teachClass(HISTORY)); // Teaching History


