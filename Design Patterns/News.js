
class News
{
    constructor()
    {
        this.observer=[];
        this.msg=null;
        //this.location=null;
        this.changed=false;
    }
    /**
     * @purpose :observer register to the topic
     */
    register(object)
    {
        this.observer.push(object);
    }
    /**
     * @purpose :message post in the topic
     */
    // postMessage(msg)
    // {
    //     this.msg=msg;
    //     this.changed=true;
    //     this.notifyObserver()
    // }
    postMessage(msg,location)
    {   
        if(location==null && location==undefined){
        this.msg=msg;
        this.changed=true;
        this.notifyObserver()
        }
        else{
            for(var i=0;i<this.observer.length;i++){
                //console.log("value "+i);
                //console.log("obseever value:"+this.observer[i].name);
                //console.log("loaction:"+JSON.stringify(location));
                
                //if(this.observer[i].name==location){
                if(this.observer[i].name===location.name){
                    //console.log("obseever value in if:"+this.observer[i].name);
                //console.log("loaction:"+JSON.stringify(location));
                    this.msg=msg;
                    this.observer[i].update(this.msg)
                }   
            }
        }
       
    }
    /**
     * @purpose :Any changes notify the observer
     */
    notifyObserver()
    {
        this.observer.forEach(element => {
            element.update(this.msg);
          });
    }
}
/**
 * @purpose :MyTopicSubscriber is the observer(Object that watch on the state of another object)
 */
class MyTopicSubscriber
{
    constructor(name){
        this.name=name;
    }

    setSubject(sub){
        this.topic=sub;
    }
    update(msg)
    {
        if(msg==null)
        {
            console.log('No new Message');
        }
        else
        {
            console.log(`${this.name} consuming message: ${msg}`)
        }
    }
}
var news = new News();	
//create observers
var mumbai = new MyTopicSubscriber("Mumbai");
var pune = new MyTopicSubscriber("Pune");
var banglore = new MyTopicSubscriber("Banglore");

//var banglore = new MyTopicSubscriber("Banglore");
var	headcouter= new MyTopicSubscriber("Headcouter");
//register observers to the subject
news.register(mumbai);
news.register(pune);
news.register(banglore);
news.register(headcouter);
//console.log(news.observer);


//attach observer to subject
mumbai.setSubject(news);
pune.setSubject(news);
banglore.setSubject(news);
//check if any update is available
//headcouter.update(news.msg);
		
//now send message to subject
//news.postMessage("mj");
//news.postMessage("news of India",banglore.name)
news.postMessage("news of India",new MyTopicSubscriber("Banglore"))
