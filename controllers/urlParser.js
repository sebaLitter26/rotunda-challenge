const { response, request } = require('express');

const urlToJson = (url) =>{
    
    const params = url.split('/');
    //{"version":"6","collection":"listings","id":"3","sort":"desc","limit":"10"}
    //[ '', 'url', '6', 'api', 'listings', '3?sort=desc&limit=10' ]
    if(!params) return {};

    const query = params.at(-1).split('?');
    if(!query) return obj;

    // split query string into its components
    var queryString = query[1].split('&');
    var obj = {
        version:params[1],
        collection:params[2],
        id:query[0],
    };
    if(!queryString) return obj;
    queryString.forEach(element => {
        const elem = element.split('=');
        obj[elem[0]] = elem[1];
    });
    
    return obj;
}

const urlGet = (req = request, res = response) => {

    //String handler solution
    console.log(urlToJson(req.url));

    res.json(
        {...req.params, ...req.query, stringHandler:'See console log for further solutions'}
    );
}

module.exports = {
    urlGet,
}