class SecretDiary{
    
// - lock()
//   - unlock()
//   - addEntry()
//   - getEntries()


entries=[];

isLocked = true;
    lock() {
      this.isLocked = true;
  }
    unlock() {
        this.isLocked = false;
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
        console.log(this.entries);
    }catch(e){
        console.log(e);
    }
}
}
module.exports = SecretDiary;