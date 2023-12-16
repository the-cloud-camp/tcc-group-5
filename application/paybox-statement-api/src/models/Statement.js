// create statement model for banking app
const mongoose = require('mongoose');
const { Schema } = mongoose;

const statementSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01, // Ensure a positive amount
  },
  type: {
    type: String,
    enum: ['deposit', 'withdraw', 'transfer'],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255, // Adjust the maximum length as needed
  },
  currency: {
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'THB'], // Adjust based on supported currencies
  },
  status: {
    type: String,
    enum: ['success', 'failed', 'pending'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'cash'],
    // required: true,
  },
  // Additional details related to the transaction (merchant, gateway details, etc.)
  // Add more fields as needed for your specific use case
  source: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    required: true,
  },
  destination: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: 'Merchant',
    // required: true,
  },
  // gatewayTransactionId: {
  //   type: String,
  //   trim: true,
  //   maxlength: 50,
  // },
});

// Indexes for faster query performance (if needed)
statementSchema.index({ user: 1, date: -1 });

// Virtual property for displaying the formatted date
statementSchema.virtual('formattedDate').get(function () {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }).format(this.date);
});

// Ensure virtual properties are included when converting to JSON
statementSchema.set('toJSON', { virtuals: true });

const Statement = mongoose.model('Statement', statementSchema);

module.exports = Statement;
