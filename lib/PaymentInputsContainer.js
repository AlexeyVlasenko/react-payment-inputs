'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./utils/cardTypes-b0f14c31.js');
require('./utils/validator-63e05af9.js');
require('./chunk-a9f30d9c.js');
require('./utils/formatter-8acbce77.js');
require('./utils/index.js');
require('react');
var usePaymentInputs = require('./usePaymentInputs.js');

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentInputs.default(props);
  return props.children(paymentInputs);
}

exports.default = PaymentInputsContainer;
