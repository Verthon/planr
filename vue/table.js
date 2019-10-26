import uuid from 'uuid/v4'
export default {
  columns: [
    {
      name: 'oczekujące',
      tasks: [
        {
          id: uuid(),
          description: 'Change the color of text inside of main article',
          type: 'default',
        },
        {
          id: uuid(),
          description: 'Fix non responsive button',
          type: 'bugfix'
        },      
        {
          id: uuid(),
          description: 'Add responsive images',
          type: 'feature'
        }
        
      ]
    },
    {
      name: 'w realizacji',
      tasks: [
        {
          id: uuid(),
          description: 'Add responsive navigation',
          type: 'feature',
        },
        {
          id: uuid(),
          description: 'Add buttons to add/remove task',
          type: 'feature',
        },
        {
          id: uuid(),
          description: 'Change padding in buttons',
          type: 'default',
        }
      ],
    },
    {
      name: 'wykonane',
      tasks: [
        {
          id: uuid(),
          description: 'Change font size',
          type: 'default',
        },
        {
          id: uuid(),
          description: 'Fix not rendering correctly list items',
          type: 'bugfix'
        },
      ]
    }
  ]
};
