const signUpUser = (firstName, lastName) => new Promise((resolve) => {
  resolve({ firstName, lastName });
});

export default signUpUser;
