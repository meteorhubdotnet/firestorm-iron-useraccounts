'use strict';

Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-useraccounts',
  summary: 'Fork of useraccounts:iron-routing for Firestorm',
  version: '1.0.5',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-useraccounts'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use([
    'check',
    'meteorhubdotnet:firestorm-iron-router@1.0.5',
    'underscore',
    'meteorhubdotnet:firestorm-useraccounts-core@1.0.5',
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
