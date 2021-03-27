'use strict';

const hashImport = require('../hash.js');


describe('Testing hash', () => {



  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('salmon', '#FA8072');

    expect(ht.get('salmon')).toEqual('#FA8072');
  });




  it('Test Get: Retrieving based on a key returns the value stored', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('salmon', '#FA8072');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    ht.set('purple', '#DDA0DD');
    ht.set('violet', '#DDA0DD');

    expect(ht.get('salmon')).toEqual('#FA8072');
  });




  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('salmon', '#FA8072');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    ht.set('purple', '#DDA0DD');
    ht.set('violet', '#DDA0DD');

    expect(ht.get('potatoes')).toEqual(undefined);
  });



  it('Successfully handle a collision within the hashtable', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');

    expect(ht.hash('maroon')).toEqual(8);
    expect(ht.hash('yellow')).toEqual(8);

  });




  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');

    expect(ht.get('maroon')).toEqual('#800000');
    expect(ht.get('yellow')).toEqual('#FFFF00');


  });



  it('Successfully hash a key to an in-range value', () => {

    const ht = new hashImport.HashTable(17);

    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('salmon', '#FA8072');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    ht.set('purple', '#DDA0DD');
    ht.set('violet', '#DDA0DD');

    expect(ht.hash('mediumvioletred')).toEqual(16);


  });


});


