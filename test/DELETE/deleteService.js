

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')

/* para registrar la información, requiere los siguientes módulos */
var log4js = require("log4js");
var log = require("../../utils/logger")
log4js.configure(log.logging());
var logger = log4js.getLogger();

describe("Eliminar API de servicio ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();

    

    it("Verifique que el código de estado sea 200 y que el registro se haya eliminado ", (done) => {
        logger.info("BORRAR INICIOS DE PRUEBA DE API DE SERVICIO")
        let uri = "/posts/1";

        url = baseUrl + uri;
        console.log("url es", url)
        request
            .requestQuery(url, "DELETE", headers, function (err, resp) {
                if (err) {
                    logger.error("Error en DELETE Service API", err)
                    done();

                } else {
                    console.log("El código de estado para los datos eliminados es ", resp.body, resp.statusCode)
                    logger.info("response del api delete es", JSON.stringify(resp.body))
                    expect(resp.statusCode).to.equal(200)
                    logger.info("BORRAR FIN DE PRUEBA DE API DE SERVICIO")
                    logger.info("********************************************************************")
                    done();
                }
            })
       
    })
})
