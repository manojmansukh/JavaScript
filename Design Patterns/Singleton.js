 
/**************************************
 * @purpose :Demonstrate singleton pattern.
 * @file    :singleton.js
 * @author  :Mansukh Manoj D.
 *************************************/
/**
 * @purpose :To create one instance and return it.
 */
//var db=require('./Utility/Singleton');

class Database{
    constructor(data){
        if(Database.exist){
            return Database.instance;
        }
        this.data=data;
        Database.instance=this;
        Database.exist=true;
        return this;
    }
    get_data(){
        return this.data;
    }
    set_data(data){
        this.data=data;
    }
}
var sql=new Database('sql');
console.log(sql.get_data());

var mongo=new Database('mongo');
console.log(mongo.get_data())