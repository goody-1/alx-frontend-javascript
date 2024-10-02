const { uploadPhoto } = require('./utils');
const { createUser } = require('./utils');

const handleProfileSignup = () => {
  uploadPhoto()
    .then((photoData) => {
      createUser(photoData)
        .then((data) => console.log(photoData.body, data.firstName, data.lastName))
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
};

export default handleProfileSignup;
