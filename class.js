class student {
  constructor(stId, stName) {
    this.id = stId;
    this.name = stName;
    this.school = "dhaka collage";
  }
}
const student1 = new student(10, "ran");
const student2 = new student(11, "kan");
console.log(student1.name, student2.name);
