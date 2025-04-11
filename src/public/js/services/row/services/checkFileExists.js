var checkFileExists = async (url) => {
  var response = await fetch(url);

  var { fileIsExists } = await response.json();

  return fileIsExists;
};

export default checkFileExists;
