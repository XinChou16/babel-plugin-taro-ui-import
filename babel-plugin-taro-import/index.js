// const babel = require('@babel/core');
const types = require('@babel/types');


// import { AtButton } from 'taro-ui'
// import "taro-ui/dist/style/components/button.scss";
const defaultLib = 'taro-ui';
const options = {
  path: 'dist/style/components',
  styleType: 'scss'
}
function pureName(name) {
  return name.replace('At', '').toLowerCase();
}

const visitor = {
  ImportDeclaration(path) {
    const { specifiers, source } = path.node;
    
    // parse
    if (
      !types.isImportDefaultSpecifier(specifiers[0]) &&
      source.value === (options.libName || defaultLib)
    ) {
      console.log('====', source.value);

      // modify import declaration statement
      const declarations = specifiers.map(specifier => {
        let { styleType } = options;
        let stringLiteralValue = 
          `${source.value}/${options.path}/${pureName(specifier.local.name)}.${styleType}`;
        console.log('----stringLiteral', stringLiteralValue);
        return types.ImportDeclaration(
          [types.ImportDefaultSpecifier(specifier.local)],
          types.stringLiteral(stringLiteralValue)
        );
      })

      // replace
      path.replaceWithMultiple(declarations);
      console.log('declarations', specifiers.length);
      
    }

  }
}

module.exports = function(babel) {
  return { visitor }
}