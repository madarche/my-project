module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //url: 'http://localhost:1337',
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ab2780a8c4a25778bb4ac0cd6957e8fc'),
    },
  },
});
