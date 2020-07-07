import getEnv from './env';

export default function () {
  const env = getEnv();
  let loginURL = '';
  console.log('envvvvv', env);
  if (env == 'local') {
    loginURL = 'https://demo.com';
  } else if (env == 'dev') {
    loginURL = 'https://demo.com';
  } else if (env == 'uat') {
    loginURL = 'https://sso-uat.demo.com';
  } else if (env == 'pre') {
    loginURL = 'https://sso-pre.demo.com';
  } else if (env == 'test') {
    loginURL = 'https://demo.com';
  } else if (env == 'prd') {
    loginURL = 'https://sso.demo.io';
  }
  return loginURL;
}
