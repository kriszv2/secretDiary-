class SecretDiary{
    
// - lock()
//   - unlock()
//   - addEntry()
//   - getEntries()
constructor(newEntries){
    this.newEntries = newEntries;


}

// entries=[];

isLocked = true;
    lock() {
      this.isLocked = true;
  }
    unlock() {
        this.isLocked = false;
  }


addEntry(str){
    // if(this.isLocked===true){
    //     throw new Error("Diary is locked!");
    // }
    // try{
        this.newEntries.addEntry(str);
        return this.newEntries.getEntries();
    // }catch(e){
    //     console.log(e);
    // }
}

// getEntries(){
//     if(this.isLocked===true){
//         throw new Error("Diary is locked!");
//     }
//     try{
//         console.log(this.entries);
//     }catch(e){
//         console.log(e);
//     }
// }
}
module.exports = SecretDiary;