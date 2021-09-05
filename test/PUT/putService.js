


const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')

/* to log the info, require below modules */
var log4js = require("log4js");
var log = require("../../utils/logger")
log4js.configure(log.logging());
var logger = log4js.getLogger();

describe("PUT Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, './payload.json')))
    
    it("Verifique que el código de estado sea 200 y que el registro se haya actualizado ", (done) => {
        logger.info("PUT Service API TEST Starts")
        let uri = "/posts/1";
        url = baseUrl + uri;
     
        request
            .requestPromiseQuery(url, 'PUT', headers ,data)
            .then((response) => {
                logger.info("url in put service is", url)
                logger.info("response in put service is", JSON.stringify(response.body))
                expect(response.statusCode).to.equal(200);
                expect(response.body.id).to.equal(1)
                expect(JSON.stringify(response.body)).to.equal(JSON.stringify(data))
                logger.info("PUT Service API TEST ENDS")
                logger.info("********************************************************************")
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

})
