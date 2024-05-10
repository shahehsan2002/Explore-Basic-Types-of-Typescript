{
    // Learning Function
    // Normal Function
    // Arrow Function
    // callback function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2
    }

    // add(2,'2')

    const addArrow = (num1: number, num2: number): number => num1 + num2

    // object -> function -> method

    const poorUser = {
        name: 'ehsan',
        balance: 0,
        addBalance(balance: number): string {
            // return this.balance+balance
            return `My new balance is : ${this.balance + balance}`
        }
    }

    const arr: number[] = [1, 4, 7];

    const newArray: number[] = arr.map((elem: number): number => elem * elem);
}