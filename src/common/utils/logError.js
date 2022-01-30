// common error logger

const logError = (error, fnName = "", metaData = "") => {
  console.info("ERROR LOG: ", error, fnName, metaData);

  // LOG ERROR TO EXTERNAL TOOL LIKE BUGSNAG HERE:
};

export default logError;
