class SecretDiary{
    
// - lock()
//   - unlock()
//   - addEntry()
//   - getEntries()


entries=[];

isLocked = true;
    lock() {
        return !this.isLocked;
  }
    unlock() {
        return !this.isLocked;
  }


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
        console.log(entries)
    }catch(e){
        console.log(e);
    }
}
}
module.exports = SecretDiary;