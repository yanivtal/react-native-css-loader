var parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss');

module.exports = function(source) {
	return parseCss(source.replace(/\r?\n|\r/g, ""));
};