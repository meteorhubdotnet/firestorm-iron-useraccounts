'use strict';

Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-useraccounts',
  summary: 'Fork of useraccounts:iron-routing for Firestorm',
  version: '1.0.0',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-useraccounts'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.2');

  api.use([
    'check',
    'meteorhubdotnet:firestorm-iron-router',
    'underscore',
    'meteorhubdotnet:firestorm-useraccounts-core',
  ], ['client', 'server']);

  api.imply([
    'meteorhubdotnet:firestorm-useraccounts-core',
    'meteorhubdotnet:firestorm-iron-router',
  ], ['client', 'server']);

  api.addFiles([
    'lib/core.js',
    'lib/server.js',
  ], ['server']);

  api.addFiles([
    'lib/core.js',
    'lib/client.js',
    'lib/templates_helpers/at_input.js',
  ], ['client']);
});
