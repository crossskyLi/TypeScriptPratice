const path = require("path");

const resolve = (url = "", context = path.join(__dirname, "..")) => {
  return path.join(context, url);
};

exports.resolve = resolve;
