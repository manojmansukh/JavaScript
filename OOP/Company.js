var ll=require('../DataStructure/Utility/LinkedList');
var util=require('./utility/utility')
var comp=require('./utility/Company')
var rl=require('readline-sync');
var fs=require('fs');

var company=new comp.Company();
class Company {
    company(){
        company.addList();
        do {
            console.log("\n1. Add company\n2. Remove company\n3. Print list\n4. Exit");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    company.addCompany();
                    company.writeToFile();
                    break;
                case "2":
                    company.removeCompany();
                    company.writeToFile();
                    break;
                case "3":
                    company.printList();
                    break;
                case "4":
                    return;    
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 4);
    }
    

}
//var stock = new Company();
//stock.company();
module.exports={
    Company
}