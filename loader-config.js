import configConstants from './config-constants.js';
import DEFAULT_APP_CONFIG from "./utils/defaultConfigConstants.js";

window.LOADER_GLOBALS = configConstants;

let linkElement = document.createElement("link");
let theme = LOADER_GLOBALS.THEME;
linkElement.href = "assets/css/" + theme + ".css";
linkElement.type = "text/css";
linkElement.rel = "stylesheet";
document.head.appendChild(linkElement);


if (LOADER_GLOBALS.PLUGIN_SCRIPT) {
  let scriptElement = document.createElement("script");
  scriptElement.src = LOADER_GLOBALS.PLUGIN_SCRIPT;
  scriptElement.type = "module";
  document.body.appendChild(scriptElement);
}


import env from "./environment.js";

LOADER_GLOBALS.environment = env;

LOADER_GLOBALS.LOCALSTORAGE_CREDENTIALS_KEY = env.appName + "-credentials";
LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY = env.appName + "-pincode";

let encrypt = function (key, dataObj) {
  if (typeof require !== 'undefined') {
    const crypto = require("opendsu").loadAPI("crypto");
    const encryptionKey = crypto.deriveEncryptionKey(key);
    const encryptedCredentials = crypto.encrypt(JSON.stringify(dataObj), encryptionKey);
    return JSON.stringify(encryptedCredentials);
  }
}

let decrypt = function (key, dataObj) {
  if (typeof require !== 'undefined') {
    const crypto = require("opendsu").loadAPI("crypto");
    const encryptionKey = crypto.deriveEncryptionKey(key);
    const decryptData = crypto.decrypt($$.Buffer.from(JSON.parse(dataObj)), encryptionKey);
    return JSON.parse(decryptData.toString());
  }
}

LOADER_GLOBALS.saveCredentials = function () {
  const encryptedCredentials = encrypt(configConstants.DEFAULT_PIN, LOADER_GLOBALS.credentials);
  localStorage.setItem(LOADER_GLOBALS.LOCALSTORAGE_CREDENTIALS_KEY, encryptedCredentials);
}

LOADER_GLOBALS.savePinCodeCredentials = function (pincode, credentials) {
  const encryptedCredentials = encrypt(pincode, credentials);
  localStorage.setItem(pincode, encryptedCredentials);
  addPin(pincode);
}

function addPin(pinCode) {
  let pinArr = localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_PINCLOCALSTORAGE_PINCODE_KEYODE_KEY);
  if (!pinArr) {
    pinArr = [pinCode];
  } else {
    pinArr = JSON.parse(pinArr);
    pinArr.push(pinCode);
  }
  localStorage.setItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY, JSON.stringify(pinArr));
}

function removePin(pinCode) {
  let pinArr = localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY);
  if (pinArr) {
    pinArr = JSON.parse(pinArr);
    pinArr = pinArr.filter(elem => elem !== pinCode);
  } else {
    return
  }
  localStorage.setItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY, JSON.stringify(pinArr));
}

LOADER_GLOBALS.loadPinCodeCredentials = function (pincode) {
  let pinCodeCredentials = localStorage.getItem(pincode);
  if (!pinCodeCredentials) {
    pinCodeCredentials = {};
  } else {
    pinCodeCredentials = decrypt(pincode, pinCodeCredentials);
  }
  LOADER_GLOBALS.credentials = pinCodeCredentials;
}

LOADER_GLOBALS.changePinCode = function (newPin, oldPin) {
  const pinCredentials = localStorage.getItem(oldPin);
  localStorage.setItem(newPin, pinCredentials);
  localStorage.removeItem(oldPin);
}

LOADER_GLOBALS.hasPinCodes = function () {
  return !!localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY);
}

LOADER_GLOBALS.getLastPinCode = function () {
  let pinArr = localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY);
  if (!pinArr) {
    return null;
  } else {
    pinArr = JSON.parse(pinArr);
    return pinArr[pinArr.length - 1];
  }
}

LOADER_GLOBALS.pinCodeExists = function (pinCode) {
  let pinArr = localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_PINCODE_KEY);
  if (!pinArr) {
    return false;
  } else {
    return pinArr.indexOf(pinCode) >= 0;
  }
}

LOADER_GLOBALS.loadCredentials = function () {
  let knownCredentials = localStorage.getItem(LOADER_GLOBALS.LOCALSTORAGE_CREDENTIALS_KEY);
  if (!knownCredentials) {
    knownCredentials = {};
  } else {
    knownCredentials = decrypt(configConstants.DEFAULT_PIN, knownCredentials);
  }
  LOADER_GLOBALS.credentials = knownCredentials;
}

LOADER_GLOBALS.clearCredentials = function () {
  localStorage.removeItem(LOADER_GLOBALS.LOCALSTORAGE_CREDENTIALS_KEY);
  LOADER_GLOBALS.credentials = {};
}


if (typeof require !== 'undefined') {
  let config = require("opendsu").loadApi("config");
  config.autoconfigFromEnvironment(LOADER_GLOBALS.environment);
}

/**
 *  patching configuration
 * **/

let missingConfiguration = false;
let patchConfiguration = (existingConfiguration, requiredConfiguration) => {
  Object.keys(requiredConfiguration).forEach((key) => {
    if (typeof existingConfiguration[key] === "undefined") {
      existingConfiguration[key] = requiredConfiguration[key];
      missingConfiguration = true;
    } else if (typeof existingConfiguration[key] === "object" && typeof requiredConfiguration[key] === "object") {
      patchConfiguration(existingConfiguration[key], requiredConfiguration[key])
    }
  })
}

patchConfiguration(LOADER_GLOBALS, DEFAULT_APP_CONFIG);
LOADER_GLOBALS.loadCredentials();

if (missingConfiguration) {
  console.error("The trust-loader configuration is not up to date! Please update it using config-constants.js-template file",)
}
/** end patching configuration **/
