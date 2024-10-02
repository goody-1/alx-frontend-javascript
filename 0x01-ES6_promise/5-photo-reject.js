const uploadPhoto = (filename) => new Promise((reject) => {
  reject(new Error(`${filename} cannot be processed`));
});

export default uploadPhoto;
