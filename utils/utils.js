/**
 * Return path to file relative to the `loader` folder
 *
 * @param {string} file
 * @return {string}
 */
function getUrl(file) {
  let pathSegments = window.location.pathname.split("/");
  let loaderPath = pathSegments.pop();
  if (!loaderPath) {
    loaderPath = pathSegments.pop();
  }

  return `${loaderPath}/${file}`;
}

function hash(arr) {
  const crypto = require("opendsu").loadApi("crypto");
  let hsh = crypto.sha256(encodeURI(arr.join("/")));
  return hsh;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandom(length) {
  let charactersSet = characters;
  let result = '';
  const charactersLength = charactersSet.length;
  for (let i = 0; i < length; i++) {
    result += charactersSet.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function goToLandingPage() {
  window.location.replace("./");
};

function encrypt(key, dataObj) {
  try {
    if (typeof require !== 'undefined') {
      const crypto = require("opendsu").loadAPI("crypto");
      const encryptionKey = crypto.deriveEncryptionKey(key);
      const encryptedCredentials = crypto.encrypt(JSON.stringify(dataObj), encryptionKey);
      return JSON.stringify(encryptedCredentials);
    }
  } catch (e) {
    throw e;
  }
}

function createXMLHttpRequest(url, method, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status != 200) {
      callback({errorStatus: xhr.status});
    } else {
      callback(undefined, xhr.response);
    }
  };
  xhr.onerror = function () {
    callback("Request failed");
  };
  return xhr;
}

function decrypt(key, dataObj) {
  try {
    if (typeof require !== 'undefined') {
      const crypto = require("opendsu").loadAPI("crypto");
      const encryptionKey = crypto.deriveEncryptionKey(key);
      const decryptData = crypto.decrypt($$.Buffer.from(JSON.parse(dataObj)), encryptionKey);
      return JSON.parse(decryptData.toString());
    }
  } catch (e) {
    throw e
  }
}

export {
  getUrl,
  hash,
  generateRandom,
  goToLandingPage,
  encrypt,
  decrypt,
  createXMLHttpRequest
}
