const kindof = require('kind-of');
// If feature is null, use default themes.
// If feature is a string, filter themes to find the entry
// If feature is an object, return is an an array
function filter(themes, feature) {
	const defaultTheme = themes.filter(theme => {
				return theme.name === 'default';
			})[0];
	
	switch (kindof(feature)) {
		case "string":
			return themes.filter(theme => {
				return theme.name === feature;
			});

		case "object":
			return [Object.assign({}, defaultTheme, feature)]

		case "null":
			return themes
	}	
}

module.exports = filter;