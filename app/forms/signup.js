var form = require('express-form'),
    field = form.field;

module.exports = form(
    field("email")
      .trim()
      .isEmail().required(),

    field("username")
      .trim()
      .required()
      .is(/^[a-z]+$/i),

    field("password")
        .trim()
        .required(),

    field('confirmPassword')
        .required()
        .equals('field::password', 'Repeat password does not match')
  );
