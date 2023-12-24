const Statement = require('../models/Statement');

exports.getStatementsBySource = async (req, res, next) => {
  try {
    const { userId } = req.params;

    // need find by sourceId or destinationId
    const statements = await Statement.find({
      $or: [{ source: userId }, { destination: userId }],
    });

    res.status(200).json(statements);
  } catch (error) {
    next(error);
  }
};

exports.getStatementById = async (req, res, next) => {
  try {
    const { statementId } = req.params;
    console.log(statementId);
    const statement = await Statement.findById(statementId);
    console.log(statement);
    res.status(200).json(statement);
  } catch (error) {
    next(error);
  }
};

exports.createStatement = async (req, res, next) => {
  try {
    const { amount, type, description, currency, paymentMethod, source, destination } = req.body;
    const statement = await Statement.create({
      amount,
      type,
      description,
      currency,
      paymentMethod,
      source,
      destination,
    });
    res.status(201).json(statement);
  } catch (error) {
    next(error);
  }
};

exports.updateStateMent = async (req, res, next) => {
  const { statementId } = req.params;
  // update to succuss
  console.log('statementId', statementId);
  try {
    const statement = await Statement.findByIdAndUpdate(
      statementId,
      { status: 'success' },
      { new: true }
    );
    res.status(200).json({ ...statement, status: 'success' });
  } catch (error) {
    next(error);
  }
};
