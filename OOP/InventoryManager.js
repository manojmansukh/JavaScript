var rl=require('readline-sync');
var inventory=require('./utility/InventoryDetails')
var fs=require('fs');
var item=new inventory.InventoryDetails();

class InventoryManger {
    manage(){
        do{
            console.log("\t\t\nInventory Management");
            
            var ch =rl.questionInt("press\n1. add Inventory\n2. Delete Inventory\n3. Display \n4. calculate Price \n5. Exit\n");
            if (ch == 1) {
                item.add()
            }
            else if (ch == 2) {
                item.remove();
            }
            else if (ch == 3) {
                item.display();
            }
            else if (ch == 4) {
                item.inventorycalculate()
            }
            else if (ch == 5) {
                return;
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=5)    
    }
}  
var invent=new InventoryManger()
invent.manage();