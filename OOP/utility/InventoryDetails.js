
var rl=require('readline-sync');
var utility=require('./utility')
var fs=require('fs');



class InventoryDetails{
    //read json file & store in inventory variable
    constructor(){
        var content=utility.readFile('./jsonFile/inventoryManager.json');
        this.data=JSON.parse(content);
    }

    add(){
        console.log("...Inventory Details...");
        var ch =rl.questionInt("choose Item for Update : \n1.Rice \n2.Pulses\n3.Wheat");
        if(isNaN(ch))throw "enter valid choice."
            switch(ch){
                case 1:
                    this.addRice();
                    break;        
                case 2:
                    this.addPulse();
                    break;
                case 3:
                    this.addWheats();
                    break;
            }
            var content=utility.writeFile('./jsonFile/inventoryManager.json',this.data)
    }
    remove(){
        console.log("...Inventory Details...");
        var ch =rl.questionInt("choose Item for remove : \n1.Rice \n2.Pulses\n3.Wheat");
        if(isNaN(ch))throw "enter valid choice."
            switch(ch){
                case 1:
                    this.removeRice();
                    break;        
                case 2:
                    this.removePulse();
                    break;
                case 3:
                    this.removeWheats();
                    break;
            }
        var content=utility.writeFile('./jsonFile/inventoryManager.json',this.data)
    }
    display(){
        console.log(this.data);
    }

    //taking user input
    addRice(){
        var _name=rl.question('enter the name :');
        var _price=rl.questionInt('enter the price : ');
        var _weight=rl.questionInt('enter the weight :');        
        this.data.Rice.push({
            name:_name,
            weight:_weight,
            price:_price

         })
    }
    addPulse(){
        var _name=rl.question('enter the name :');
        var _price=rl.questionInt('enter the price : ');
        var _weight=rl.questionInt('enter the weight :');          
        this.data.Pulses.push({
            name:_name,
            weight:_weight,
            price:_price
          }) 
    }
    addWheats(){
        var _name=rl.question('enter the name :');
        var _price=rl.questionInt('enter the price : ');
        var _weight=rl.questionInt('enter the weight :');
        this.data.Wheats.push({
            name:_name,
            weight:_weight,
            price:_price
  
         })
    }
    removeRice(){
        var rice="absent";
        var item=rl.question("Enter the rice Name:");
        for(var i=0;i<this.data.Rice.length;i++){
            if (this.data.Rice[i].name == item) {
                rice="present";
                var index = this.data.Rice.indexOf(this.data.Rice[i]);
                this.data.Rice.splice(index, 1);
                console.log(item+" rice remove from Inventory Details");
            }
        }
        if(rice=="absent")
        console.log("enter valid details.");
    }
    removePulse(){
        var Pulses="absent";
        var item=rl.question("Enter the Pulse Name:");
        for(var i=0;i<this.data.Pulses.length;i++){
            if (this.data.Pulses[i].name == item) {
                Pulses="present";
                var index = this.data.Pulses.indexOf(this.data.Pulses[i]);
                this.data.Pulses.splice(index, 1);
                console.log(item+" Pulse remove from Inventory Details");
            }
        }
        if(Pulses=="absent")
        console.log("enter valid details.");
    }
    removeWheats(){
        var Wheats="absent";
        var item=rl.question("Enter the Wheat Name:");
        for(var i=0;i<this.data.Wheats.length;i++){
            if (this.data.Wheats[i].name == item) {
                Wheats="present";
                var index = this.data.Wheats.indexOf(this.data.Wheats[i]);
                this.data.Wheats.splice(index, 1);
                console.log(item+" Wheats remove from Inventory Details");
            }
        }
        if(Wheats=="absent")
        console.log("enter valid details.");
    }
// userInput(){
//     var _name=rl.question('enter the name :');
//     var _price=rl.question('enter the price : ');
//     var _weight=rl.question('enter the weight :');
//     var value=new InventoryDetails(_name,_price,_weight);
// return value;
// }
inventorycalculate(){
    //taking user input
    console.log("Inventory Details: \n1.Rice \n2.Pulses\n3.Wheat");
    var ch =rl.questionInt("Enter your choice:");
    if(isNaN(ch))throw "enter valid choice."

    switch(ch){
        case 1: 
            var weight=rl.questionInt("enter how many kg you require:");
            for(var i=0;i<this.data.Rice.length;i++){
                console.log();
                console.log("\tRise:"+this.data.Rice[i].name+"\n\tPrice:"+this.data.Rice[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.data.Rice[i].price);
            }
            break;

            case 2:
            var weight=rl.questionInt("enter how many kg you require:");
            for(var i=0;i<this.data.Pulses.length;i++){
                console.log();
                console.log("\tRise:"+this.data.Pulses[i].name+"\n\tPrice:"+this.data.Pulses[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.data.Pulses[i].price);                
            }  
            break;

            case 3:
            var weight=rl.questionInt("enter how many kg you require:");
            for(var i=0;i<this.data.Wheats.length;i++){
                console.log();
                console.log("\tRise:"+this.data.Wheats[i].name+"\n\tPrice:"+this.data.Wheats[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.data.Wheats[i].price);
            } 
            break;
    }
}


}
module.exports={
    InventoryDetails
}
//var minv  =new MInvent();
//minv.invManager();