const uploadPhoto = (filename) => new Promise((resolve, reject) => {
  reject(new Error(`${filename} cannot be processed`));
});

export default uploadPhoto;
