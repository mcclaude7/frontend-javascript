interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Elie',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'Kigali',
    contract: false,
};