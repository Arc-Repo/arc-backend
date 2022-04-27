module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    secret: env('JWT_SECRET'),
  },
  forgotPassword: {
    from: 'technology.arc@outlook.com',
    replyTo: 'technology.arc@outlook.com',
  },
  url: '/dashboard',
});
