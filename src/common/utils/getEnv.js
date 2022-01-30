const getEnv = () => {
  if (window.location.hostname === "localhost") return "local";
  else return process.env.NODE_ENV;
};

export default getEnv;
