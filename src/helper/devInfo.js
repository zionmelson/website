import developers from "../developerHash.json";

const devs = [];
const devInfo = {};

export const getDevInfo = () => {
  for (let key in developers) {
    // eslint-disable-next-line no-prototype-builtins
    if (developers.hasOwnProperty(key)) {
      console.log(`hash: ${key}, dev: ${developers[key]}`);
      devs.push(key);
      devInfo[key] = developers[key];
    }
  }

  return [devs, devInfo];
};
