import store from '../utils/store';

export default function getEnv(){
  let env = store.getKey('env');
  console.log('get env',env)
  if(env){
    console.log('getenv')
    return env;
  }
  let url = window.location.host;
  if(url.indexOf('localhost')>-1){
    return 'local'
  }else if(url.indexOf('dev.annchaincloud.net')>-1){
    return 'dev'
  }else if(url.indexOf('test.annchaincloud.net')>-1){
    return 'test'
  }else if(url.indexOf('uat.annchaincloud.net')>-1){
    return 'uat'
  }else if(url.indexOf('pre.annchaincloud.net')>-1){
    return 'pre'
  }else if(url.indexOf('annchaincloud.net')>-1){
    return 'prd'
  }
}