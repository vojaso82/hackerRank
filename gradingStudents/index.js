function gradingStudents(grades) {
   let allGrades = grades.map((each) => { 
    return each >= 38 && each % 5 >= 3  ? each - (each % 5) + 5 : each;         
   }); 
  return allGrades; 
}