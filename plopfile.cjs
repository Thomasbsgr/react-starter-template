module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Créer un composant React avec SCSS module',
    prompts: [
      {
        type: 'input',
        name: 'destinationpath',
        message: 'Destination du composant (auto gérée par l’extension)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Nom du composant',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{destinationpath}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: '{{destinationpath}}/{{pascalCase name}}.module.scss',
        templateFile: 'plop-templates/component.module.scss.hbs',
      },
    ],
  })
}
