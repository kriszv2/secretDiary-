const SecretDiary = require('./SecretDiary');
const Entries = require('./Entries');
const secretDiery = new SecretDiary(new Entries('Diary 1'));
// secretDiery.addEntry('diary');


 console.log(secretDiery.isLocked);
secretDiery.unlock();
console.log(secretDiery.isLocked);
secretDiery.addEntry('string');
// secretDiery.getEntries();