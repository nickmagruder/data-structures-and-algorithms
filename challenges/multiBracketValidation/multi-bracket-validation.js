' use strict';


function multiBracketValidation(input) {

  let parens = 0;
  let brackets = 0;
  let curly = 0;
  /*   let other = 0; */

  for (let i = 0; i < input.length; i++) {

    let char = input[i];

    console.log(parens, 'PARENS');
    console.log(brackets, 'brackets');
    console.log(curly, 'curly');

    if (char === '(')
      parens++;
    else if (char === ')')
      parens--;
    else if (char === '[')
      brackets++;
    else if (char === ']')
      brackets--;
    else if (char === '{')
      curly++;
    else if (char === '}')
      curly--;
    /*     else {
      other++;
    } */
    console.log((parens+brackets+curly), 'TOTAL');
    if (parens + brackets + curly === 0) {
      return true;
    } else {
      return false;
    }
  }
}


/*     console.log(parens, 'Parens');
    console.log(brackets, 'brackets');
    console.log(curly, 'curly');
    console.log(other, 'other'); */


/*     else if (char !== '(' || ')' ||'[' ||']' ||'{' ||'}')
    other+1; */
/*     parens += (char === '(' ? 1 : 0);
        parens -= (char === ')' ? 1 : 0);
        brackets += (char === '[' ? 1 : 0);
        brackets -= (char === ']' ? 1 : 0);
        carrots += (char === '<' ? 1 : 0);
        carrots -= (char === '>' ? 1 : 0);

        console.log(parens, 'PARENS');
        console.log(brackets, 'brackets');
        console.log(carrots, 'carrots');

        if (parens < 0 || brackets < 0 || carrots < 0)
          return 0;
      }

      return ((parens + brackets + carrots) !== 0 ? 0 : 1); */

module.exports = {
  'multiBracketValidation': multiBracketValidation,
};

