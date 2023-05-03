export function emailValidation(email) {
    // regex from https://www.abstractapi.com/tools/email-regex-guide
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
}