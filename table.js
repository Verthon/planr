export default {
  columns: [
    {
      name: 'default',
      tasks: [
        {
          id: 1,
          description: 'Change the color of text inside of main article'
        },
        {
          id: 2,
          description: 'Change font size'
        },
        {
          id: 3,
          description: 'Change padding in buttons'
        }
      ]
    },
    {
      name: 'feature',
      tasks: [
        {
          id: 1,
          description: 'Add responsive navigation'
        },
        {
          id: 2,
          description: 'Add buttons to add/remove task'
        },
        {
          id: 3,
          description: 'Add responsive images'
        }
      ],
    },
    {
      name: 'bugfix',
      tasks: [
        {
          id: 1,
          description: 'Fix non responsive button'
        },
        {
          id: 2,
          description: 'Fix not rendering correctly list items'
        },
      ]
    }
  ]
};
