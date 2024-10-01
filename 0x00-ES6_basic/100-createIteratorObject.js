const createDepartmentIterator = (report) => {
  const newArray = [];
  const { allEmployees } = report;

  for (const key in allEmployees) {
    if (Array.isArray(allEmployees[key])) {
      newArray.push(...allEmployees[key]);
    }
  }
  return newArray;
};

export default createDepartmentIterator;
