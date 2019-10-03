export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d9614bb22737055d7235970',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wjm7hs7z',
                  apiId: 'a17b0ea3-3e95-46c2-a36c-33b639dd0975'
                },
                {
                  buildHookId: '5d9614bb229f579ef7385fd6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7c5svu87',
                  apiId: '37aefc79-0249-40a6-8be3-4afcd0403f26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skanel/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7c5svu87.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
