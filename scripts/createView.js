const fs = require('fs');
const readline = require('readline').Interface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Currently this can only used to create components suitable for the views folder,
 * Currently this script generates: less, jsx, test.jsx files,
 * Make sure that the variable you enter starts with a capital letter,
 */

const question = [
  'This script is used to create a new component for you project',

  'what is the file name?',
];

// const readAliases = fs.readFile('Config/webpack/aliases.json');

// console.log('aliases =>', readAliases,"",()=>{

// });

readline.question(question.join('\n'), name => {
  const files = [
    {
      extension: 'jsx',
      content: `import React from "react"\nimport PropTypes from "prop-types"\n import './${name}.less'\nconst ${name} = () => {\n  return    (\n     <div>\n\n     </div>\n    )\n }\n\n${name}.propTypes = {}\n\nexport default ${name}`,
    },
    {
      extension: 'test.jsx',
      content: `import react from 'React';\nimport { shallow } from 'enzyme'\nimport ${name} from './${name}'\n\ndescribe('<${name} />', () => {\n\n})
    `,
    },
    { extension: 'less' },
  ];

  fs.mkdir(`./src/views/${name}`, err => {
    if (err) throw err;
    console.log(`The folder ${name} was created`);
  });

  files.forEach(({ extension, content, fileName }) => {
    fs.writeFile(
      `./src/views/${name}/${fileName || name}.${extension}`,
      content || '',
      err => {
        if (err) throw err;
        console.log(
          `The file ${fileName || name}.${extension} has been written`
        );
      }
    );
  });

  readline.close();
});
