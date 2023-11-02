function shakeFunction(woordDatGeschuddledMoetWorden) {
    const chars = woordDatGeschuddledMoetWorden.split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    const geschuddledWoord = chars.join('');
    return geschuddledWoord;
  }
  
  var word1 = shakeFunction("Manga");
  console.log(word1);
  
  var word2 = shakeFunction("Sumimasen");
  console.log(word2);

  var word3 = shakeFunction("yourName.");
  console.log(word3);