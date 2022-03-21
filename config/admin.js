module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ca26f81b9bcc1c1a99f50b26cf97160'),
  },
});
