{
    // destructuring


    const user = {
        id: 567,
        name: {
            firstName: 'Shah',
            middleName: 'Ehsanul',
            lastName: 'Haque'
        },
        contactNumber: '01389564678',
        address: 'Sylhet,Bangladesh',
    }

    const { contactNumber,
        name: { middleName: midName },
    } = user;


    //  array destructuring


    const myFriends = ['q','w','e', 'r','y','u']

    const [,, bestFriend,...rest] = myFriends;



}