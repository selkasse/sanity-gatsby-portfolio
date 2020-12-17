export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdac0dd7d0c0722581f00c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wpm7pr55',
                  apiId: '69c1c073-ab9f-4d82-95da-4eec3985016d'
                },
                {
                  buildHookId: '5fdac0dd2c735822fce68edd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-as3pzhuf',
                  apiId: '7fe4ba26-e59c-49ff-b1d9-2a43350dee2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-as3pzhuf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
