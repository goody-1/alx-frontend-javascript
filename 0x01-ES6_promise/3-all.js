const { uploadPhoto, createUser } = require('./utils');

const handleProfileSignup = async () => {
  try {
    const userData = await createUser();
    const photoData = await uploadPhoto();

    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};

export default handleProfileSignup;
