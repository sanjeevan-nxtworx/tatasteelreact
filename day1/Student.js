let student = {
  nameid: "Harish Singh",
  rollNum: 24,
  class: "Tenth Grade",
};

console.log(student);

student.rollNum = 30;
student["nameid"] = 50;
console.log(student);

for (let varStudent in student) {
  console.log(varStudent + "," + student[varStudent]);
}
