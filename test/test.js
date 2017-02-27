let chai = require('chai')
let chaiHttp = require('chai-http');
let server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Correctly formatted natural language dates:', function() {
	it('December 7, 1998', function(done) {
		chai.request(server)
		    .get('/December 7, 1998')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property("unix", 912988800);
		      res.body.should.have.deep.property("natural", "December 7, 1998");
		      done();
		    });
	});
	it('January 1, 1970', function(done) {
		chai.request(server)
		    .get('/January 1, 1970')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', 0);
		      res.body.should.have.deep.property('natural', 'January 1, 1970');
		      done();
		    });
	});
	it('October 19, 1900', function(done) {
		chai.request(server)
		    .get('/October 19, 1900')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', -2183846400);
		      res.body.should.have.deep.property('natural', 'October 19, 1900');
		      done();
		    });
	});
});

describe('Incorrectly formatted natural language dates:', function() {
	it('dec 07 1998', function(done) {
		chai.request(server)
		    .get('/dec 07 1998')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property("unix", 912988800);
		      res.body.should.have.deep.property("natural", "December 7, 1998");
		      done();
		    });
	});
	it('Jan 1,   1970', function(done) {
		chai.request(server)
		    .get('/Jan 1,   1970')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', 0);
		      res.body.should.have.deep.property('natural', 'January 1, 1970');
		      done();
		    });
	});
	it('octob 19 1900', function(done) {
		chai.request(server)
		    .get('/octob 19 1900')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', -2183846400);
		      res.body.should.have.deep.property('natural', 'October 19, 1900');
		      done();
		    });
	});
});

describe('Correctly formatted UNIX Epoch dates:', function() {
	it('912988800', function(done) {
		chai.request(server)
		    .get('/912988800')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property("unix", 912988800);
		      res.body.should.have.deep.property("natural", "December 7, 1998");
		      done();
		    });
	});
	it('0', function(done) {
		chai.request(server)
		    .get('/0')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', 0);
		      res.body.should.have.deep.property('natural', 'January 1, 1970');
		      done();
		    });
	});
	it('-2183846400', function(done) {
		chai.request(server)
		    .get('/-2183846400')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', -2183846400);
		      res.body.should.have.deep.property('natural', 'October 19, 1900');
		      done();
		    });
	});
});

describe('Should return null:', function() {
	it('91298880f0', function(done) {
		chai.request(server)
		    .get('/91298880f0')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property("unix", null);
		      res.body.should.have.deep.property("natural", null);
		      done();
		    });
	});
	it('2015 December 1st', function(done) {
		chai.request(server)
		    .get('/2015 December 1st')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', null);
		      res.body.should.have.deep.property('natural', null);
		      done();
		    });
	});
	it('wrenchintheworks', function(done) {
		chai.request(server)
		    .get('/wrenchintheworks')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.deep.property('unix', null);
		      res.body.should.have.deep.property('natural', null);
		      done();
		    });
	});
});