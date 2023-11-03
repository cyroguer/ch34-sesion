let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const elementosComunes = student1Courses.filter(commonC => student2Courses.includes(commonC));
console.log("The common curse is: " + elementosComunes);




