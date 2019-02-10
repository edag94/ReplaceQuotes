import * as assert from 'assert';
import {replaceString} from '../replace';

suite("Extension Tests", () => {
    //Double to Single Quotes
    test('Replace Works', () => {
        const stringToReplace = '"?"?"//\""/\?//"///\\\///\/\/\"\/\/\/\/\"\/\/\?/\"?//\"?"\/"\?\"';
        const SingleQuotesOnly = replaceString(stringToReplace,"\"","\'");
        const foundAt = SingleQuotesOnly.search("\"");
        assert.equal(-1,foundAt);
        console.log("Replace to Single Quotes only passed!");
    });
});