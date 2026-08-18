export function requireEnv(name:string){const value=process.env[name];if(!value)throw new Error(`${name} is not configured`);return value}
export function isValidHttpUrl(value:string){try{const u=new URL(value);return u.protocol==='http:'||u.protocol==='https:'}catch{return false}}
