var componentsContext = require.context('./src', true, /\.jsx$/);
componentsContext.keys().forEach(componentsContext);

var appContext = require.context('./test/unit', true, /\.js/);
appContext.keys().forEach(appContext);