exports.api = {}

exports.home = (req, res) => res.render('home')

// **** these handlers are for browser-submitted forms 
exports.newsletterSignup = (req, res) => {
    //we will learn about CSRF later ... for now , we just  
    //provide a dummy value
    res.render('newsletter-signup', {csrf: 'CSRF token goes here'})
}
exports.newsletterSignupProcess = (req, res ) => {
    console.log('CSRF token (from hidden form field) :' + req.body._csrf)
    console.log('Name(from hidden form field) :' + req.body._name)
    console.log('Email(from hidden form field) :' + req.body._email)
    res.redirect (303, '/newletter-signup/thank-you')
}
exports.newsletterSignupthankYou = (req, res) => res.render ('newsletter=signup-thank-you')
// **** end browser-submitted form handlers 
exports.vacationPhotoContestAjax = (req, res ) => {
    const now  = new Date()
    res.render('contest/vacation=photo-ajax' , {year:now .getFullYear(), month : now.getMonth()})
}
exports.vacationPhotoContestProcess = (req, res, fields, files ) => {
    console.log('field data: ', fields)
    console.log('files:', files)
    res.redirect(303, '/contest/vacation-photo-thank-you ')
}
exports.vacationPhotoContestProcessError = (req, res, fields, files) => {
    res.redirect(303, '/contest/vacation-photo-error')
}
exports.vacationPhotoContestProcessThankYou = (req, res) => {
    res.render('contest/vacation-photo-thank-you')
}
exports.api.vacationPhotoContest = (req, res, fields, files ) => {
    console.log('field data: ', fields)
    console.log('files:', files)
    res.send({result: 'success'})
}
exports.api.vacationPhotoContestError = (req, res, message ) => {
    res.send({result: 'error', error :message})
}
// **** these handlers are for fetch/JSON form handlers 
exports.newsletter = (req, res ) =>{
    // we will learn about CSRF later...for now , we just
    //provide a dummy value
    res.render('newsletter', {csrf: 'CSRF token goes here'})
}
exports.api.newsletterSignup = (req, res) => {
    console.log('CSRF token (from hidden form field) :' + req.body._csrf)
    console.log('Name(from hidden form field) :' + req.body._name)
    console.log('Email(from hidden form field) :' + req.body._email)
    res.send({result: 'success'})
}
// **** end fetch/JSON form handlers 
exports.notFound = (req, res) => res.render ('404')

//express recognizes the error handler handler by way of its four
//argumetns, so we have to disable ESlint's no-unused-vars rule
/* eslint-disable no-unused-vars */
    exports.serverError = (err, req, res, next) => res.render('505')
/* eslint-enable no-unused-vars*/
