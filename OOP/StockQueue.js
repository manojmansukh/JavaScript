var u = require('./utility/utility');
var fs = require('fs');
var rl = require('readline-sync');
var dst = require('../DataStructure/Utility/QueueUsingLinkList')

class Queue {
    constructor() {
        var company = fs.readFileSync('./jsonFile/CompanyStock1.json', 'utf8');
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync('./jsonFile/CustumerDetails1.json');
        this.cust = JSON.parse(customer);
        
    }
}
class StockQueue extends Queue {

    addQueue() {
        this.queue = new dst.QueueUsingLinkList();
        do {
            console.log("1. Buy shares\n2. Sell shares\n3. Print company record\n4. Print customer record\n5. Write to file\n6. Print Queue\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.buyQueue();
                    break;
                case "2":
                    this.sellQueue();
                    break;
                case "3":
                    this.printCompanyQ();
                    break;
                case "4":
                    this.printCustomerQ();
                    break;
                case "5":
                    this.writeToFileQueue();
                    break;
                case "6":
                    this.printQueue();
                    break;
                default:
                    console.log("Enter valid choice");

            }
        } while (ch <= 6);
    }
    buyQueue() {
        var dd = new Date();
        var userName = rl.question("Enter customer name:");
        var NameOfCompany = rl.question("Enter name of the company:");
        var found = false;
        var symbol;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
                symbol = this.comp.company[key].symbol;
            }
        }
        if (found == true) {
            this.buyShareQ(userName);
            this.queue.enqueue(symbol + "'s share bought on " + dd.getDate() + "/" +  (dd.getMonth() + 1) + "/" + dd.getFullYear() + " at " + dd.getHours() + ":" + dd.getMinutes() + ":" + dd.getSeconds());
        }
        else {
            console.log("Company not found");
        }

    }

    sellQueue() {
        var d = new Date();
        var userName = rl.question("Enter customer name:");
        var NameOfCompany = rl.question("Enter name of the company:");
        var found = false;
        var symbol;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
                symbol = this.comp.company[key].symbol;
            }
        }
        if (found == true) {
            this.sellShareQ(userName);
            this.queue.enqueue(symbol + "'s share sold on " + d.getDate() + "/" +  (d.getMonth() + 1) + "/" + d.getFullYear() + " at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        }
        else {
            console.log("Company not found");
        }
    }

    buyShareQ(userName) {
        let symbol1 = rl.question("Enter symbol of the company to buy share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].symbol == symbol1) {
                i = key;
                check = true;
                break;
            }
        }
        if (check) {
            let num = rl.questionInt("Enter number of shares you want to buy:");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.comp.company[i].NoOfShare) {
                        this.cust.customer[key].share += num;
                        this.cust.customer[key].amount -= num * this.comp.company[i].Price;
                        this.comp.company[i].NoOfShare -= num;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }

    sellShareQ(userName) {
        let symbol2 = rl.question("Enter symbol of the company to sell share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].symbol == symbol2) {
                i = key;
                console.log(this.comp.company[i].NoOfShare)
                check = true;
                break;
            }
        }
        if (check) {
            let num = rl.questionInt("Enter number of shares you want to sell:");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.cust.customer[key].share) {
                        this.cust.customer[key].share -= num;
                        this.comp.company[i].NoOfShare += num;
                        this.cust.customer[key].amount += num * this.comp.company[i].price;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }

    printCompanyQ() {
        for (let key in this.comp.company) {
            console.log(this.comp.company[key]);
        }
    }

    printCustomerQ() {
        for (let key in this.cust.customer) {
            console.log(this.cust.customer[key]);
        }
        
    }

    printQueue() {
        this.queue.display()
    }

    writeToFileQueue() {
        fs.writeFileSync('./jsonFile/CompanyStock1.json', JSON.stringify(this.comp));
        fs.writeFileSync('./jsonFile/CustumerDetails1.json', JSON.stringify(this.cust));
    }

}
var que = new StockQueue();
que.addQueue();