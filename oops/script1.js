class Bank {
    constructor(bal, accNo, bcity, brName) {
        this.balance = bal
        this.accountNo = accNo
        this.bankcity = bcity
        this.branchName = brName
        this.transaction = []
    }

    withdrawl(ammount) {
        if (ammount < this.balance) {
            console.log('Ammount Withdrawl Successfully')
            this.balance = this.balance - ammount
            this.transaction.push(-ammount)
            return this.balance
        }
        else {
            console.log('Insufficient Account Balance')
        }
    }

    deposit(ammount) {
        this.balance = this.balance + ammount
        console.log('Successfully Deposited')
        this.transaction.push(ammount)
        return this.balance

    }
    last4Transaction() {
        return this.transaction.slice(-4)

    }

}

let suyog = new Bank(10000, 111, 'Sangamner', 'GaneshNagar')
console.log(suyog)
// o/p-->
// Bank {
//     balance: 10000,
//     accountNo: 111,
//     bankcity: 'Sangamner',
//     branchName: 'GaneshNagar',
//     transaction: []
//   }



let w1 = suyog.withdrawl(1000)
console.log(w1)
// o/p-->
// Ammount Withdrawl Successfully
// 9000


let d1 = suyog.deposit(500)
let d2 = suyog.deposit(200)
let w2 = suyog.withdrawl(7000)
let w3 = suyog.withdrawl(500)

console.log(suyog.transaction)

// o/p-->
// Ammount Withdrawl Successfully
// Successfully Deposited
// Successfully Deposited
// Ammount Withdrawl Successfully
// Ammount Withdrawl Successfully
// [ -1000, 500, 200, -7000, -500 ]


let last4tr = suyog.last4Transaction()
console.log(last4tr)
// o/p--> [ 500, 200, -7000, -500 ]

console.log("************************************************************************************")


// TOTAL DEPOSIT AMMOUNT
let totalDepositAmmount = suyog.transaction.filter((el) => { return el > 0 }).reduce((acc, el) => { return acc + el }, 0)
console.log(totalDepositAmmount)  // o/p--> 700

// TOTAL WITHDRAWL AMMOUNT
let totalWithdrawlAmmount = suyog.transaction.filter((el) => { return el < 0 }).reduce((acc, el) => { return acc + el }, 0)
console.log(totalWithdrawlAmmount)  // o/p--> -8500

console.log(Math.abs(totalWithdrawlAmmount))  //o/p--> 8500  --> it's use to convert negative value to positive value


// or
// // TOTAL DEPOSIT AMMOUNT
// let DepositAmmount = suyog.transaction.filter((el) => { return el > 0 })
// console.log(DepositAmmount)  // [ 500, 200 ]

// let totalDepositAmmount = DepositAmmount.reduce((acc, el) => { return acc + el }, 0)
// console.log(totalDepositAmmount)  // 700



// // TOTAL WITHDRAWL AMMOUNT
// let WithdrawlAmmount = suyog.transaction.filter((el) => { return el < 0 })
// console.log(WithdrawlAmmount) // [ -1000, -7000, -500 ]

// let totalWithdrawlAmmount = WithdrawlAmmount.reduce((acc, el) => { return acc + el }, 0)
// console.log(totalWithdrawlAmmount)  // -8500


