export function convertTemperature(req, res) {
    const { valor, unidad } = req.body;
    if (typeof valor !== 'number' || !['C','F','K'].includes(unidad)) {
      return res.status(400).json({ message: 'No es una unidad válida' });
    }
  
    let C, F, K;
    switch (unidad) {
      case 'C':
        C = valor;
        F = valor * 9/5 + 32;
        K = valor + 273.15;
        break;
      case 'F':
        C = (valor - 32) * 5/9;
        F = valor;
        K = C + 273.15;
        break;
      case 'K':
        C = valor - 273.15;
        F = C * 9/5 + 32;
        K = valor;
        break;
    }
  
    return res.json({
      C: parseFloat(C.toFixed(2)),
      F: parseFloat(F.toFixed(2)),
      K: parseFloat(K.toFixed(2))
    });
  }
  