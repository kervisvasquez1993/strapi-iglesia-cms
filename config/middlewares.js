module.exports = [
  'strapi::logger',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'backend-imagen-br.s3.us-east-2.amazonaws.com', // Tu bucket S3
            'backend-imagen-br.s3.amazonaws.com',
            '*.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'backend-imagen-br.s3.us-east-2.amazonaws.com', // Tu bucket S3
            'backend-imagen-br.s3.amazonaws.com',
            '*.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
