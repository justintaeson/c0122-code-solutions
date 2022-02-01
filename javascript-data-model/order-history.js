var orderHistory = [
  // index 0
  {
    order: {
      orderPlaced: '2020-08-04',
      netCost: 34.00,
      shipTo: 'JS Masher',
      orderNumber: '114-3941689-8772232',
      deliveredDate: '2020-08-08'
    },
    item: {
      title: 'JavaScript for impatient programmers',
      author: 'Rauschmayer, Dr. Axel',
      returnWindowClose: '2020-09-07',
      grossCost: 31.55
    }
  },
  // index 1
  {
    order: {
      orderPlaced: '2020-07-19',
      netCost: 44.53,
      shipTo: 'JS Masher',
      orderNumber: '113-9984268-1280257',
      deliveredDate: '2020-07-20'
    },
    item: {
      title: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      returnWindowClose: '2020-08-19',
      grossCost: 41.33
    }
  },
  // index 2
  {
    order: {
      orderPlaced: '2020-07-04',
      netCost: 17.22,
      shipTo: 'JS Masher',
      orderNumber: '114-2875557-9059409',
      deliveredDate: '2020-07-07'
    },
    item: {
      title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      author: null,
      returnWindowClose: '2020-08-05',
      grossCost: 15.98
    }
  },
  // index 3
  {
    order: {
      orderPlaced: '2020-07-04',
      netCost: 17.22,
      shipTo: 'JS Masher',
      orderNumber: '114-2875557-9059409',
      deliveredDate: '2020-07-07'
    },
    item: {
      title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      author: null,
      returnWindowClose: '2020-08-05',
      grossCost: 15.98
    }
  },
  // index 4
  {
    order: {
      orderPlaced: '2020-07-03',
      netCost: 138.93,
      shipTo: 'JS Masher',
      orderNumber: '114-2875557-9059409',
      deliveredDate: '2020-07-07'
    },
    item: [
      {
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnWindowClose: '2020-08-04',
        grossCost: 94.95
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnWindowClose: '2020-08-04',
        grossCost: 33.99
      }
    ]
  }
];

console.log(orderHistory[4].item[1].title);
