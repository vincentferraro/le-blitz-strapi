export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx): string | string[] => {
        const origin = ctx.request.header.origin;
        if (origin === 'http://localhost:3000') {
          return origin; // The returns will be part of the Access-Control-Allow-Origin header
        }
        
        return ''; // Fail cors check
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  }
];
