const STUDENTS = [
  [
    "Neo",
    "neo@matrix.com",
    "Tacoma",
  ],
  [
    "Morpheus",
    "morpheus@matrix.com",
    "Tacoma",
  ],
  [
    "Trinity",
    "trinity@matrix.com",
    "Spokane",
  ],
  [
    "Cypher",
    "cypher@matrix.com",
    "Seattle",
  ],
  [
    "The Oracle",
    "oracle@matrix.com",
    "Marysville",
  ],
  [
    "Agent Smith",
    "smith@matrix.com",
    "Bellingham",
  ]
]

class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students) {
    this.name = name;
    this.level = level;
    this.students = [];
  }
  registerStudent(newStudent) {
    if (this.students.length == 0 || this.students.email !== newStudent.email) {
      this.students.push(newStudent);
      console.log(`Registering ${newStudent.email} to ${this.name}`);
      console.log(`${this.students}`);
    } else {
      console.log(`${newStudent.email} already registered to ${this.name}`);
    }
    console.log(this.students);
      return this.students;
  }
}

