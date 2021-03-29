const usersData = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

// function  filters users who has scoresGreaterThan85

    function fnFilter(){
        usersData.filter(user => {
            if(user.scores > 85){
                return console.log(user)
            }
        });
    }
    fnFilter()

// function that addUser to the user array only if the user does not exist.

    function addUser(){
        usersData.forEach(user => {
            if(user.name !== 'Vakul'){
               
                usersData.name = "Vakul",
                usersData.scores = 81,
                usersData.skills= ['HTM', 'CSS', 'JS'],
                usersData.age = 21
            }
        });
        // console.log(users);
    }
    addUser()

//  function that addUserSkill which can add skill to a user only if the user exist.

    function addUserSkill(){
        usersData.forEach(user => {
            if(user.name === 'John'){
                user.skills[1] = 'REACT'
            }
        });
         console.log(users)
    }
    addUserSkill()

//  function that editUser if the user exist in the users array.

    function editUser(){
        usersData.map(user => {
            if(user.name === 'Sara'){
                user.name = 'Brook'
            }
        });
      console.log(usersData)
    }
    editUser()