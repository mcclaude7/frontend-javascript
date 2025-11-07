interface Student{
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "claude",
    lastname: "capelo",
    age: 11,
    location: "musanze"
};

const student2: Student = {
    firstname: "Eve",
    lastname: "laury",
    age: 22,
    location: "Huye"
};

const studentlist: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const headerName = document.createElement("th");
headerName.textContent = 'FirstName';
const headerLocation = document.createElement("th");
headerLocation.textContent = 'Location';

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentlist.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstname;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
