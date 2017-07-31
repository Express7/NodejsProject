const { expect } = require('chai');
const sinon = require('sinon');

const User = require('../../../../models/user.model');
const emailMatcher = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);

describe('User model tests', () => {
    const model = new User();
    it('Expect model to be valid.', () => {
        expect(User.isValid('yes')).to.be.true;
    });
})