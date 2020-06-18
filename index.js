const fiscaldata = require('@marketto/codice-fiscale-utils')

function fiscalValidation(fiscalCode, type, typeValue) {
    const { Validator } = fiscaldata
    let isValid = false

    if (!type && !typeValue) {
        isValid = Validator.codiceFiscale(fiscalCode).valid
    } else {
        switch (type) {
            case 'firstname':
                isValid = Validator.codiceFiscale(fiscalCode).matchFirstName(typeValue)
                break
            case 'lastname':
                isValid = Validator.codiceFiscale(fiscalCode).matchLastName(typeValue)
                break
            case 'dob':
                isValid = Validator.codiceFiscale(fiscalCode).matchBirthDate(typeValue)
                break
            case 'gender':
                isValid = Validator.codiceFiscale(fiscalCode).matchGender(typeValue)
                break
            case 'placeofbirth':
                isValid = Validator.codiceFiscale(fiscalCode).matchBirthPlace(typeValue)
                break
            default:
                break
        }
    }
    return isValid
}

exports.fiscalValidation = fiscalValidation