requirejs.config({
	baseUrl: "libs",
	paths: {
		app: '/src',
		"jquery": "jquery/jquery",
		"underscore": "underscore"
	},
	shim: {
		"underscore": {
			exports: '_'
		}
	}
});