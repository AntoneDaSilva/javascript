function initials(str, count) { /* Your logics here */
    console.log(str.split('')[0])
}

[

['John Doe Cool', 3, 'JDC'],

['John Doe Cool', 2, 'JD'],

['John Doe', 1, 'J'],

['John Doe of Snow', 3, 'JDS'],

['John', 5, 'J'],

['John Doe of Snow Cool', undefined, 'JDSC'],

['John Doe of Snow Cool', 0, ""]


].forEach(args => { const signature = `initials("${args[0]}",

$ {args[1]})`;

const result = initials (args[0], args[1]);

const success = result === args[2];

success

? console.log(' SUCCESS!', signature)

: console.error['FAILED!', signature, `Returned: "${result}", expected: ${args[2]}`]

});