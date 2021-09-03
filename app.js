const adverb = ["You will", "You must", "You can"];
const verb = ["achieve", "approach"];
const noun = ["love", "success", "trouble"];
const timeFrame = ["tomorrow", "in the future"];

indexNumber = (array) => {
        return Math.floor(Math.random() * array.length) 
}

phraseGenerator = () => {
    return adverb[indexNumber(adverb)] + " " + verb[indexNumber(verb)] + " " + noun[indexNumber(noun)] + " " + timeFrame[indexNumber(timeFrame)] + "!";
}

console.log(phraseGenerator());