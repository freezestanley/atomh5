export function getEnv() {
  return process.env.NODE_ENV
}
export const IS_DEV = getEnv() === 'development'
