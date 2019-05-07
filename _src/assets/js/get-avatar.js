const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
const getImage = e => {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
const writeImage = event => {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;

  const key = 'photo';
  const value = fr.result;
  fillUserDataObject(key, value);
  saveCache();
};

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
const fakeFileClick = () => {
  fileField.click();
};

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
