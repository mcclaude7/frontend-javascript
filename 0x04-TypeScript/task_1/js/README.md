# Task 1 - Teacher Interface

## Description

This project demonstrates how to create a **TypeScript interface** for teachers with:

- Read-only attributes (`firstName`, `lastName`)
- Required attributes (`fullTimeEmployee`, `location`)
- Optional attribute (`yearsOfExperience`)
- Ability to add additional properties (`contract`, etc.)

## Example

```ts
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
