const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!(file instanceof Blob)) {
      return reject("File is not a Blob object");
    }

    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject("Base 64 error", error);

    reader.readAsDataURL(file);
  });
};

export default convertBase64;
