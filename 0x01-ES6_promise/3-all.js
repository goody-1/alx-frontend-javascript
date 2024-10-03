import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = async () => {
  try {
    const photoData = await uploadPhoto();
    const userData = await createUser();

    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};

export default handleProfileSignup;
