const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('express'); 
const should = chai.should();

chai.use(chaiHttp);

describe('CustomerController', () => {
  it('should return customer data for a valid token', (done) => {
    chai.request(app)
      .get('/get-customer-data?token=validToken') 
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        res.body.should.have.property('cellular');
        done();
      });
  });

  it('should return an error for an invalid token', (done) => {
    chai.request(app)
      .get('/get-customer-data?token=invalidToken') 
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.error.should.equal('Token is required');
        done();
      });
  });

  it('should return an error for an API request failure', (done) => {
    chai.request(app)
      .get('/get-customer-data?token=validToken') 
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('error');
        res.body.error.should.equal('Internal server error');
        done();
      });
  });
});
