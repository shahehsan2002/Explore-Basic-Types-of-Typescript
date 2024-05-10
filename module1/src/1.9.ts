{
    // Type Alias

    type Student = {
        name:string;
        age:number;
        gender:string;
        contactNo?: string;
        address:string;
    }

    const student1:Student = {
       
        name: 'ehsan',
        age: 22,
        gender: 'male',
        contactNo: '876584395',
        address: 'sylhet',
    };

    const student2:Student={
        name:'x',
        age:40,
        gender:'male',
        address:'dhaka'
    };

    type UserName = string
    type IsAdmin = boolean
    
    const userName: UserName = 'Ehsan'
    const isAdmin: IsAdmin = true

    type Add = (num1: number, num2:number) =>number;

    const add :Add = (num1,num2) => num1+num2

    // 
}