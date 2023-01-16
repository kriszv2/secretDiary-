const SecretDiary = require('./SecretDiary');

const secretDiery = new SecretDiary();
// secretDiery.addEntry('diary');
 console.log(secretDiery.isLocked);
secretDiery.unlock();
console.log(secretDiery.isLocked);
secretDiery.addEntry('string');
secretDiery.getEntries();