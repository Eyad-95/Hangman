const input = require('sync-input');
let words= ['that', 'with', 'they', 'have', 'this', 'from', 'word', 'what', 'some', 'other', 'were', 'there', 'when', 'your', 'said', 'each', 'which', 'their', 'time', 'will', 'about', 'many', 'then', 'them', 'write', 'would', 'like', 'these', 'long', 'make', 'thing', 'look', 'more', 'could', 'come', 'number', 'sound', 'most', 'people', 'over', 'know', 'water', 'than', 'call', 'first', 'down', 'side', 'been', 'find', 'work', 'part', 'take', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'year', 'came', 'show', 'every', 'good', 'give', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'help', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'same', 'tell', 'does', 'three', 'want', 'well', 'also', 'play', 'small', 'home', 'read', 'hand', 'port', 'large', 'spell', 'even', 'land', 'here', 'must', 'high', 'such', 'follow', 'change', 'went', 'light', 'kind', 'need', 'house', 'picture', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'four', 'between', 'state', 'keep', 'never', 'last', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'draw', 'left', 'late', 'while', 'press', 'close', 'night', 'real', 'life', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'table', 'travel', 'less', 'morning', 'simple', 'several', 'vowel', 'toward', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fall', 'lead', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'quick', 'develop', 'ocean', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'wonder', 'laugh', 'thousand', 'check', 'game', 'shape', 'equate', 'miss', 'brought', 'heat', 'snow', 'tire', 'bring', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 'ball', 'wave', 'drop', 'heart', 'present', 'heavy', 'dance', 'engine', 'position', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'subject', 'region', 'energy', 'hunt', 'probable', 'brother', 'ride', 'cell', 'believe', 'fraction', 'forest', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 'exercise', 'wall', 'catch', 'mount', 'wish', 'board', 'winter', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'edge', 'sign', 'visit', 'past', 'soft', 'bright', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 'jump', 'baby', 'eight', 'village', 'meet', 'root', 'raise', 'solve', 'metal', 'whether', 'push', 'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 'safe', 'century', 'consider', 'type', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'beat', 'excite', 'natural', 'view', 'sense', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'lake', 'moment', 'scale', 'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 'experiment', 'bottom', 'iron', 'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody', 'trip', 'office', 'receive', 'mouth', 'exact', 'symbol', 'least', 'trouble', 'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'blow', 'blood', 'touch', 'grew', 'cent', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 'choose', 'fell', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'student', 'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital', 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'rather', 'crowd', 'corn', 'compare', 'poem', 'string', 'bell', 'depend', 'meat', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 'triangle', 'planet', 'hurry', 'chief', 'colony', 'clock', 'mine', 'enter', 'major', 'fresh', 'search', 'send', 'yellow', 'allow', 'print', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 'chart', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 'noise', 'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 'especially', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 'similar', 'guide', 'experience', 'score', 'apple', 'bought', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'dream', 'evening', 'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'double', 'seat', 'arrive', 'master', 'track', 'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'glad', 'original', 'share', 'station', 'bread', 'charge', 'proper', 'offer', 'segment', 'slave', 'duck', 'instant', 'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 'range', 'steam', 'motion', 'path', 'liquid', 'meant', 'quotient', 'teeth', 'shell', 'neck'];
guessCounter=8;
letterCounter=0;
guessLetters=[];
winCounter=0;
loseCounter=0;


function errors() {
    if (guess.length !== 1) {
        console.log('Please, input a single letter.');
        requestGuess();
    }
    else if (guess==guess.toUpperCase(guess) || guess==Number(guess)) {
        console.log('Please, enter a lowercase letter from the English alphabet.');
        requestGuess();
    }
    else {
        compareLetter();
    }
}

function replaceAllCharacters() {
    dashes="";
    for (let x=0; x < randomWord.length; x++) {
        dashes+="-";
    }
}

function requestGuess() {
    if (letterCounter==0) {
        replaceAllCharacters();
        guess=input(`
${dashes}
Input a letter: `);
        errors();
    }
    else if (dashes==randomWord) {
        console.log(`
You guessed the word ${randomWord}!
You survived!`
);
        guessCounter=0;
        winCounter++;
        words.pop(randomWord);
        userChoice();
    }
    else {
        guess=input(`
${dashes}
Input a letter: `);
        errors();
    }

}

function compareLetter() {
    while (dashes!=randomWord || guessCounter!=0) {
        if (dashes.includes(guess) || guessLetters.includes(guess)) {
            guessLetters.push(guess);
            console.log(`You've already guessed this letter.`);
            requestGuess();
        }
        else if (randomWord.includes(guess)) {
            fadedLetters=dashes.split('');
            fadedLetters[randomWord.indexOf(guess, randomWord.indexOf(guess))]=guess;
            let j;
            for (j=0; j < randomWord.length; j++) {
                if (randomWord[j]==guess) {
                    letterCounter+=1;
                }
                else{
                    continue;
                }
            }
            if (letterCounter>1) {
                fadedLetters[randomWord.indexOf(guess, randomWord.indexOf(guess)+1)]=guess;
            }
            dashes=fadedLetters.join('');
            requestGuess();
        }
        else if(!(randomWord.includes(guess))) {
            if (guessCounter==1) {
                console.log(`That letter doesn't appear in the word.
        
You lost!`);
                console.log(`The word is ${randomWord}
                `);
                guessCounter--;
                loseCounter++;
                userChoice();
                break;
            } else if (guessCounter!=0) {
                guessLetters.push(guess);
                console.log("That letter doesn't appear in the word.");
                guessCounter--;
                requestGuess();
            }
        }
        else{
            break;
        }
        break;
    }
}

console.log('H A N G M A N');
function userChoice() {
    let choice=input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: `);
    switch(choice) {
        case "play":
            randomWord= words[Math.floor(Math.random()*words.length)];
            guessLetters=[];
            letterCounter=0;
            guessCounter=8;
            requestGuess();
            break;
        case "results":
            console.log(`You won: ${winCounter} times.
You lost: ${loseCounter} times.`);
            userChoice();
            break;
        case "exit":
            break;
        default:
            userChoice();
            break;
    }
}

userChoice();