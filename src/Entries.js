class Entries {

 entries = [];


    addEntry(str){
    if(this.isLocked===true){
        throw new Error("Diary is locked!");
    }
    try{
        this.entries.push(str);
    }catch(e){
        console.log(e);
    }


}

getEntries(){
    if(this.isLocked===true){
        throw new Error("Diary is locked!");
    }
    try{
        console.log(this.entries);
    }catch(e){
        console.log(e);
    }
}
}

module.exports = Entries;