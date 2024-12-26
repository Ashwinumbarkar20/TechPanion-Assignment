const mongoose = require('mongoose');

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Invalid ID' });
  }

  next();
};

module.exports = validateId;
