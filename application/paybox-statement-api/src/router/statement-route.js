// create statement route

const express = require('express');
const router = express.Router();
const {
  getStatementsBySource,
  getStatementById,
  createStatement,
  updateStateMent,
} = require('../controller/statement-controller');

// GET STATEMENT by source (from USER ID)
// GET STATEMENT Detail (from STATEMENT_ID)
// POST STATEMENT

// console.log(typeof getStatementsBySource);
router.get('/history/:userId', getStatementsBySource);
router.get('/:statementId', getStatementById);
router.patch('/:statementId', updateStateMent);
router.post('/', createStatement);

module.exports = router;
