' use strict';

const bracketTest = require('../multi-bracket-validation');


describe('Testing various bracket configurations ', () => {
/*   it('{} should return true', () => {

    expect(bracketTest.multiBracketValidation('{}')).toEqual(true);

  });

  it('{}(){} should return true', () => {

    expect(bracketTest.multiBracketValidation('{}(){}')).toEqual(true);

  });

  it('()[[Extra Characters]] should return true', () => {

    expect(bracketTest.multiBracketValidation('()[[Extra Characters]]')).toEqual(true);

  });

  it('(){}[[]] should return true', () => {

    expect(bracketTest.multiBracketValidation('(){}[[]]')).toEqual(true);

  }); */

  it('{}{Code}[Fellows](()) should return true', () => {

    /*     expect(bracketTest.multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true); */

  });


  it('[({}] should return false', () => {

    expect(bracketTest.multiBracketValidation('[({}]')).toEqual(false);

  });

  /*   it('(]( should return false', () => {

    expect(bracketTest.multiBracketValidation('(](')).toEqual(false);

  });

  it('{(}) should return false', () => {

    expect(bracketTest.multiBracketValidation('{(})')).toEqual(false);

  }); */

});


