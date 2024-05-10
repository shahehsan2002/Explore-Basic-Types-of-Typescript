{
    // spread operator
    // rest operator
    


    // Learn spread operator

    const bros1: string[] = ['x', 'y', 'z'];
    const bros2: string[] = ['a', 'b', 'c'];

    bros1.push(...bros2)

    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'mizan',
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'tanmoy',
        cloud: 'nahid',
    }

    const mentorList = {
        ...mentors1,
        ...mentors2,
    }

    // Learn rest operator


    const greetFriends = (...friends:string[]) =>{
        // console.log(`Hi ${friend1}${friend2}${friend3} `);

        friends.forEach((friend:string)=> console.log(`Hi ${friend}`));
         
        
        greetFriends('abul','babul', 'kabul')
    }
}