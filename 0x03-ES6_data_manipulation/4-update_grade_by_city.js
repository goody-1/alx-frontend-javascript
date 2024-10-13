const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city) // Filter students by city
  .map((student) => {
    // Find the grade object for the current student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // Return the student object with the new or default grade
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

export default updateStudentGradeByCity;
