import { getEnv } from "../utils";

const ENV = getEnv();

const development = {
  // START: LOCAL CONFIG
  ENV: ENV,
  BASE_API: process.env.REACT_APP_BASE_API,
  // BASE_API: "https://autoapi.techbyheart.in",

  // START: FIREBASE CONFIG
  // END: FIREBASE CONFIG
};

const production = {
  ...development,
  // CONFIG CHANGES FOR PRODUCTION (if required) SHOULD BE HERE (↓)
};

const staging = {
  ...development,
  // CONFIG CHANGES FOR STAGING (if required) SHOULD BE HERE (↓)
};

const local = {
  ...development,
  // CONFIG CHANGES FOR LOCAL (if required) SHOULD BE HERE (↓)
};

const configs = {
  production,
  staging,
  development,
  local,
};

const currentConfig = configs[ENV];
const config = {
  // START: LOCAL CONFIG
  ENV: ENV,
  BASE_API: currentConfig.BASE_API,
  // END: LOCAL CONFIG

  // START: FIREBASE CONFIG
  // END: FIREBASE CONFIG
};

export default config;
