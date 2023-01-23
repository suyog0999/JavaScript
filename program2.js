let employee=[
        {
          firstName: 'Suyog',
          lastName: 'Rahane',
          age: 22,
          city: 'Sangamner',
          skills: [ 'Javascript', 'Java', 'c', 'salesforce' ]
        },
        {
          firstName: 'Amol',
          lastName: 'Vetal',
          age: 23,
          city: 'Talegoan',
          skills: [ 'SQL', 'Selenium', 'MangoDB', 'salesforce' ]
        },
        {
          firstName: 'Mansi',
          lastName: 'Khatode',
           age: 32,
          city: 'Sangamner',
         skills: [ 'Java', 'Cypress', 'Manual', 'salesforce' ]
        }]





employee.forEach(el => 
    {
        console.log(el.firstName+':'+el.skills.length)
    })