export function buildPassword({ longitud, mayusculas, numeros, simbolos }) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums  = '0123456789';
    const syms  = '!@#$%^&*()_+[]{}|;:,.<>?';
    let chars = lower;
    if (mayusculas) chars += upper;
    if (numeros)    chars += nums;
    if (simbolos)   chars += syms;
  
    let pwd = '';
    for (let i = 0; i < longitud; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pwd;
  }
  