var parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss');

module.exports = function(source) {

  var style = parseCss(source.replace(/\r?\n|\r/g, ""));
  
  var prefix = "", suffix = "";
  prefix = "module.exports = ";
  suffix = ";";
  var content = prefix + style + suffix
    return content;
};