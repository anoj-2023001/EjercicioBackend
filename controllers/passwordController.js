import { buildPassword } from '../utils/passwordGenerator.js';

export function generatePassword(req, res) {
  const { longitud, mayusculas, numeros, simbolos } = req.body;
  if (typeof longitud !== 'number' || longitud < 1) {
    return res.status(400).json({ message: 'Longitud no válida' });
  }
  const pwd = buildPassword({ longitud, mayusculas, numeros, simbolos });
  return res.json({ password: pwd });
}
