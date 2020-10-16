export const MENUITEMS = [
   {
      title: 'About', type: 'sub', children: [
         { path: '/layouts/agency', title: 'Team', type: 'link' },
         { path: '/layouts/app1', title: 'FAQ', type: 'link' }
         
      ],
   },
   {
      title: 'REKTR', type: 'sub', children: [
         {
            title: 'REKTR Token', type: 'sub', children: [
               { path: '/blog/blog-grid/column-no-sidebar', title: 'No Sidebar', type: 'link' },
               { path: '/blog/blog-grid/column-left-sidebar', title: 'Left Sidebar', type: 'link' },
               { path: '/blog/blog-grid/column-right-sidebar', title: 'Right Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-no-sidebar', title: 'Full Width No Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-right-sidebar', title: 'Full Width Right Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-left-sidebar', title: 'Full Width Left Sidebar', type: 'link' }
            ]
         },
         {
            title: 'REKTR SALE', type: 'sub', children: [
               { path: '/blog/blog-list/list-no-sidebar', title: 'List No Sidebar', type: 'link' },
               { path: '/blog/blog-list/list-left-sidebar', title: 'List Left Sidebar', type: 'link' },
               { path: '/blog/blog-list/list-right-sidebar', title: 'List Right Sidebar', type: 'link' }]
         },
        
      ]
   },

   {
      title: 'Platform', type: 'sub', children: [
         { path: '/layouts/agency', title: 'Staking App', type: 'link' },
         { path: '/layouts/app1', title: 'DAO', type: 'link' }
         
      ],
   },
   {
      title: 'Contact', type: 'sub', children: [
         { path: '/layouts/agency', title: 'Telegram', type: 'link' },
         { path: '/layouts/app1', title: 'Twitter', type: 'link' }
         
      ],
   },
]
