import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // If either `photo` or `user` is `null`, return `null` for both.
    if (photo === null || user === null) {
      return { photo: null, user: null };
    }
    return {
      photo,
      user,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
