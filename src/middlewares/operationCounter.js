let operationCount = 0;

export const operationCounter = (req, res, next) => {
  operationCount++;
  req.operationCount = operationCount;
  next();
};

export const getOperationCount = (req, res) => {
  res.json({ Operaciones_totales: operationCount });
};