module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6391953e986b735d0e4021841b116145'),
  },
});
