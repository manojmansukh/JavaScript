var ll=require('../DataStructure/Utility/LinkedList');
var util=require('./utility/utility')
var rl=require('readline-sync');
var fs=require('fs');

var list =new ll.LinkedList
class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.value=JSON.parse(content);
        //console.log(this.value);
        
    }
}
class StockLinkedList extends Stock{
    manage(){
        do {
            console.log("\n1. Add company\n2. Remove company\n3. Print list\n4. Write to file\n5. Exit\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.addCompany();
                    break;
                case "2":
                    this.removeCompany();
                    break;
                case "3":
                    this.printList();
                    break;
                case "4":
                    this.writeToFile();
                    break;
                case "5":
                    return;
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 5);
    }
    addList() {
        for (let key in this.value.Company) {
            list.addElement(this.value.Company[key]);
        }
       // list.printList().toString();
        this.manage();
    }
    addCompany(){
        var NameOfCompany = rl.question("Enter the name of company:");
        var Symbol = rl.question("Enter the symbol of company:");
        var NoOfShare = rl.question("Enter the number of share:");
        var Price = rl.question("Enter the price of share:"); 
        let newCompany = {
            "NameOfCompany": NameOfCompany,
            "NoOfShare": NoOfShare,
            "Price": Price,
            "Symbol": Symbol
        }

        list.addElement(newCompany);
    }
    printList(){
        var current=list.head;
        while (current !== null) {
            console.log("\nName Of the company:" + current.data.NameOfCompany);
            console.log("Symbol of the company:" + current.data.Symbol);
            console.log("Number of share:" + current.data.NoOfShare);
            console.log("Price:" + current.data.Price);
            current = current.next;
        }
    }
    removeCompany(){
        var current=list.head;
        var NameOfCompany=rl.question("enter the company name you delete:");
        while(current.data.NameOfCompany.toLowerCase()!=NameOfCompany.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            list.removeElement(current.data);
            console.log("Company detalis remove.Successfully...");
        }
        else{
            console.log("Company name not in the list");
            
        }
    }
    writeToFile(){
        this.value.Company=[];
        var current=list.head;
        while(current!=null){
            this.value.Company.push(current.data);
            current=current.next;
        }
        util.writeFile('./jsonFile/CompanyStock.json',this.value)
    }

}
var stock = new StockLinkedList();
stock.addList();
