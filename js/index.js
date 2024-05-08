const words = { // tried to use json, didnt figure out how to read it from js...
    "a": {
        "text": "interj - ah, ha, uh, oh, ooh, aw, well (emotion word)",
        "synonyms": "ah, ha, uh, oh, ooh, aw, well"
    },
    "akesi": {
        "text": "n - non-cute animal, reptile, amphibian",
        "synonyms": "animal, reptile, amphibian"
    },
    "ala": {
        "text": "mod - no, not, none, un-<br>n - nothing, negation, zero",
        "synonyms": "no, not, none, zero"
    },
    "alasa": {
        "text": "vt - gather, hunt, forage",
        "synonyms": "gather, hunt, forage"
    },
    "ale": {
        "text": "n - everything, anything, life, universe<br>mod - all, every, complete, whole",
        "synonyms": "everything, all, complete, whole"
    },
    "ali": {
        "text": "n - everything, anything, life, universe<br>mod - all, every, complete, whole",
        "synonyms": "everything, all, complete, whole"
    },
    "anpa": {
        "text": "n - bottom, lower part, under, below, floor, beneath<br>mod - low, lower, bottom, down, lowly, humble, dependant",
        "synonyms": "bottom, lower, under, floor, down, below, humble"
    },
    "ante": {
        "text": "n - difference<br>mod - different<br>conj - otherwise, or else<br>vt - change, alter, modify",
        "synonyms": "difference, different, otherwise, change, modify"
    },
    "anu": {
        "text": "conj - or",
        "synonyms": "or"
    },
    "awen": {
        "text": "vi - stay, wait, remain<br>vt - keep<br>mod - remaining, stationary, permanent, sedentary",
        "synonyms": "stay, wait, keep, remaining, stationary, permanent, sedentary"
    },
    "e": {
        "text": "sep - (introduces a direct object)",
        "synonyms": "e"
    },
    "en": {
        "text": "conj - and (used to coordinate head nouns)",
        "synonyms": "and"
    },
    "esun": {
        "text": "n - market, shop, business, trading, selling, buying",
        "synonyms": "market, shop, business, trading, selling, buying"
    },
    "ijo": {
        "text": "n - thing, something, stuff, anything, object<br>mod - of something",
        "synonyms": "thing, stuff, anything, object"
    },
    "ike": {
        "text": "mod - bad, negative, wrong, evil, overly complex, (figuratively) unhealthy<br>interj - oh dear! woe! alas!<br>n - negativity, badness, evil<br>vt - to make bad, to worsen, to have a negative effect upon<br>vi - to be bad, to suck",
        "synonyms": "bad, negative, wrong, evil, unhealthy, oh, woe, alas, negativity, worsen, suck, complex"
    },
    "ilo": {
        "text": "n - tool, device, machine, thing used for a specific purpose",
        "synonyms": "tool, device, machine, thing"
    },
    "insa": {
        "text": "n - inside, inner world, centre, stomach<br>mod - inner, internal",
        "synonyms": "inside, centre, stomach, inner, internal"
    },
    "jaki": {
        "text": "mod - dirty, gross, filthy<br>n - dirt, pollution, garbage, filth<br>vt - pollute, dirty<br>interj - ew! yuck!",
        "synonyms": "dirty, gross, filthy, dirt, pollution, garbage, filth, pollute, ew, yuck, poop, shit, crap"
    },
    "jan": {
        "text": "n - person, people, human, being, somebody, anybody<br>mod - human, somebody's, personal, of people<br>vt - personify, humanize, personalize",
        "synonyms": "person, human, somebody, personal"
    },
    "jelo": {
        "text": "mod - yellow, light green",
        "synonyms": "yellow, light green"
    },
    "jo": {
        "text": "vt - have, contain<br>n - having<br>kama receive, get, take, obtain",
        "synonyms": "have, contain, receive, get, take, obtain"
    },
    "kala": {
        "text": "n - fish, sea creature",
        "synonyms": "fish, sea creature"
    },
    "kalama": {
        "text": "n - sound, noise, voice<br>vi - make noise<br>vt - sound, ring, play (an instrument)",
        "synonyms": "sound, noise, voice, make noise, ring, play"
    },
    "kama": {
        "text": "vi - come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to<br>n - event, happening, chance, arrival, beginning<br>mod - coming, future<br>vt - bring about, summon",
        "synonyms": "come, become, arrive, happen, event, arrival, future, bring about, summon"
    },
    "kasi": {
        "text": "n - plant, leaf, herb, tree, wood",
        "synonyms": "plant, leaf, herb, tree, wood"
    },
    "ken": {
        "text": "vi - can, is able to, is allowed to, may, is possible<br>n - possibility, ability, power to do things, permission<br>vt - make possible, enable, allow, permit<br>cont - it is possible that",
        "synonyms": "can, may, possible, possibility, ability, enable, permit"
    },
    "kepeken": {
        "text": "vt - use<br>prep - with",
        "synonyms": "use, with"
    },
    "kili": {
        "text": "n - fruit, vegetable, mushroom",
        "synonyms": "fruit, vegetable, mushroom"
    },
    "kin": {
        "text": "mod - also, too, even, indeed (emphasizes the word(s) before it)",
        "synonyms": "also, too, even, indeed"
    },
    "kipisi": {
        "text": "n - part, partition<br>vt - split, cut, divide",
        "synonyms": "part, partition, split, cut, divide"
    },
    "kiwen": {
        "text": "mod - hard, solid, stone-like, made of stone or metal<br>n - hard thing, rock, stone, metal, mineral, clay",
        "synonyms": "hard, solid, rock, stone, metal, mineral, clay"
    },
    "ko": {
        "text": "n - semi-solid or squishy substance, e.g. paste, powder, gum",
        "synonyms": "substance, paste, powder, gum"
    },
    "kon": {
        "text": "n - air, wind, smell, soul<br>mod - air-like, ethereal, gaseous",
        "synonyms": "air, wind, smell, soul, gaseous"
    },
    "kule": {
        "text": "n - colour, paint<br>mod - colourful<br>vt - colour, paint",
        "synonyms": "colour, paint, colourful"
    },
    "kulupu": {
        "text": "n - group, community, society, company, people<br>mod - communal, shared, public, of the society",
        "synonyms": "group, community, society, public"
    },
    "kute": {
        "text": "vt - listen, hear<br>mod - auditory, hearing",
        "synonyms": "listen, hear, auditory, hearing"
    },
    "la": {
        "text": "sep - (between adverb or phrase of context and sentence)",
        "synonyms": ""
    },
    "lape": {
        "text": "n, vi - sleep, rest<br>mod - sleeping, of sleep",
        "synonyms": "sleep, rest, sleeping"
    },
    "laso": {
        "text": "mod - blue, blue-green",
        "synonyms": "blue, blue-green"
    },
    "lawa": {
        "text": "n - head, mind<br>mod - main, leading, in charge<br>vt - lead, control, rule, steer",
        "synonyms": "head, mind, main, lead, control, rule, steer"
    },
    "len": {
        "text": "n - clothing, cloth, fabric",
        "synonyms": "clothing, cloth, fabric"
    },
    "lete": {
        "text": "n - cold<br>mod - cold, uncooked<br>vt - cool down, chill, freeze, frozen",
        "synonyms": "cold, cool down, chill, freeze, frozen"
    },
    "li": {
        "text": "sep - (between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
        "synonyms": "is, are, am"
    },
    "lili": {
        "text": "mod - small, little, young, a bit, short, few, less<br>vt - reduce, shorten, shrink, lessen",
        "synonyms": "small, little, young, reduce, shorten, shrink, lessen"
    },
    "linja": {
        "text": "n - long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
        "synonyms": "long, thin, string, rope, hair, thread, cord, chain"
    },
    "lipu": {
        "text": "n - flat and bendable thing, e.g. paper, card, ticket, book, webpage",
        "synonyms": "flat, paper, card, ticket, book, webpage"
    },
    "loje": {
        "text": "mod - red<br>n - redness",
        "synonyms": "red, redness"
    },
    "lon": {
        "text": "prep - be (located) in/at/on<br>vi - be there, be present, be real/true, exist, be awake",
        "synonyms": "be, exist"
    },
    "luka": {
        "text": "n - hand, arm",
        "synonyms": "hand, arm"
    },
    "lukin": {
        "text": "vt - see, look at, watch, read<br>vi - look, watch out, pay attention<br>mod - visual(ly)",
        "synonyms": "see, look at, watch, read, look, pay attention, visual"
    },
    "lupa": {
        "text": "n - hole, orifice, window, door",
        "synonyms": "hole, orifice, window, door"
    },
    "ma": {
        "text": "n - land, earth, country, (outdoor) area",
        "synonyms": "land, earth, country, area"
    },
    "mama": {
        "text": "n - parent, mother, father<br>mod - of the parent, parental, maternal, fatherly",
        "synonyms": "parent, mother, father, parental, maternal, fatherly"
    },
    "mani": {
        "text": "n - money, material wealth, currency, dollar, capital",
        "synonyms": "money, wealth, currency, dollar, capital"
    },
    "meli": {
        "text": "n - woman, female, girl, wife, girlfriend<br>mod - female, feminine, womanly",
        "synonyms": "woman, female, girl, wife, girlfriend, feminine, womanly"
    },
    "mi": {
        "text": "n - I, we<br>mod - my, our",
        "synonyms": "i, we, my, our, me"
    },
    "mije": {
        "text": "n - man, male, boy, husband, boyfriend<br>mod - male, masculine, manly",
        "synonyms": "man, male, boy, husband, boyfriend, masculine, manly"
    },
    "moku": {
        "text": "n - food, meal<br>vt - eat, drink, swallow, ingest, consume",
        "synonyms": "food, meal, eat, drink, swallow, ingest, consume"
    },
    "moli": {
        "text": "n - death<br>vi - die, be dead<br>vt - kill<br>mod - dead, deadly, fatal",
        "synonyms": "death, die, kill, dead, deadly, fatal"
    },
    "monsi": {
        "text": "n - back, rear end, butt, behind<br>mod - back, rear",
        "synonyms": "back, rear end, butt, behind"
    },
    "mu": {
        "text": "interj - woof! meow! moo! etc. (animal noise)",
        "synonyms": "woof, meow, moo"
    },
    "mun": {
        "text": "n - moon<br>mod - lunar",
        "synonyms": "moon, lunar"
    },
    "musi": {
        "text": "n - fun, playing, game, recreation, art, entertainment<br>mod - artful, fun, recreational<br>vi - play, have fun<br>vt - amuse, entertain",
        "synonyms": "fun, playing, game, art, entertainment, amuse, entertain"
    },
    "mute": {
        "text": "mod - many, very, much, several, a lot, abundant, numerous, more<br>n - amount, quantity<br>vt - make many or much",
        "synonyms": "many, much, several, abundant, numerous, more, amount, quantity, make many or much"
    },
    "namako": {
        "text": "n - food additive, accessory, something extra<br>vt - season, embellish, stimulate",
        "synonyms": "food additive, accessory, something extra, season, embellish, stimulate"
    },
    "nanpa": {
        "text": "n - number<br>oth - -th (ordinal numbers)",
        "synonyms": "number, -th"
    },
    "nasa": {
        "text": "mod - silly, crazy, foolish, drunk, strange, stupid, weird<br>vt - drive crazy, make weird",
        "synonyms": "silly, crazy, foolish, drunk, strange, stupid, weird, drive crazy"
    },
    "nasin": {
        "text": "n - way, manner, custom, road, path, doctrine, system, method",
        "synonyms": "way, manner, custom, road, path, doctrine, system, method"
    },
    "nena": {
        "text": "n - bump, nose, hill, mountain, button",
        "synonyms": "bump, nose, hill, mountain, button"
    },
    "ni": {
        "text": "mod - this, that",
        "synonyms": "this, that"
    },
    "nimi": {
        "text": "n - word, name",
        "synonyms": "word, name"
    },
    "noka": {
        "text": "n - leg, foot",
        "synonyms": "leg, foot"
    },
    "o": {
        "text": "sep - O (vocative or imperative)<br>interj - hey! (calling somebody's attention)",
        "synonyms": "O, hey"
    },
    "oko": {
        "text": "n - eye",
        "synonyms": "eye"
    },
    "olin": {
        "text": "n - love<br>mod - love<br>vt - to love (a person)",
        "synonyms": "love, to love"
    },
    "ona": {
        "text": "n - she, he, it, they<br>mod - her, his, its, their",
        "synonyms": "she, he, it, they, her, his, its, their"
    },
    "open": {
        "text": "vt - open, turn on",
        "synonyms": "open, turn on"
    },
    "pakala": {
        "text": "n - blunder, accident, mistake, destruction, damage, breaking<br>vt - screw up, botch, ruin, break, hurt, injure, damage, spoil, ruin<br>vi - screw up, fall apart, break<br>interj - damn! fuck!",
        "synonyms": "blunder, accident, mistake, destruction, damage, breaking, screw up, botch, ruin, break, hurt, injure, spoil, damn, fuck"
    },
    "pali": {
        "text": "n - activity, work, deed, project<br>mod - active, work-related, operating, working<br>vt - do, make, build, create<br>vi - act, work, function",
        "synonyms": "activity, work, deed, project, active, working, do, make, build, create, act, function"
    },
    "palisa": {
        "text": "n - long, mostly hard object, e.g. rod, stick, branch",
        "synonyms": "long, hard object, rod, stick, branch"
    },
    "pan": {
        "text": "n - grain, cereal",
        "synonyms": "grain, cereal"
    },
    "pana": {
        "text": "vt - give, put, send, place, release, emit, cause<br>n - giving, transfer, exchange",
        "synonyms": "give, put, send, place, release, emit, cause, giving, transfer, exchange"
    },
    "pi": {
        "text": "sep - of, belonging to",
        "synonyms": "of, belonging to"
    },
    "pilin": {
        "text": "n - feelings, emotion, heart<br>vi - feel<br>vt - feel, think, sense, touch",
        "synonyms": "feelings, emotion, heart, feel, think, sense, touch"
    },
    "pimeja": {
        "text": "mod - black, dark<br>n - darkness, shadows<br>vt - darken",
        "synonyms": "black, dark, darkness, shadows, darken"
    },
    "pini": {
        "text": "n - end, tip<br>mod - completed, finished, past, done, ago<br>vt - finish, close, end, turn off",
        "synonyms": "end, tip, completed, finished, past, done, ago, finish, close, turn off"
    },
    "pipi": {
        "text": "n - bug, insect, spider",
        "synonyms": "bug, insect, spider"
    },
    "poka": {
        "text": "n - side, hip, next to<br>prep - in the accompaniment of, with<br>mod - neighbouring",
        "synonyms": "side, hip, next to, with, neighbouring"
    },
    "poki": {
        "text": "n - container, box, bowl, cup, glass",
        "synonyms": "container, box, bowl, cup, glass"
    },
    "pona": {
        "text": "n - good, simplicity, positivity<br>mod - good, simple, positive, nice, correct, right<br>interj - great! good! thanks! OK! cool! yay!<br>vt - improve, fix, repair, make good",
        "synonyms": "good, simplicity, positive, great, thanks, cool, improve, fix, repair, make good"
    },
    "pu": {
        "text": "vi - interact with the official toki pona book",
        "synonyms": "book"
    },
    "sama": {
        "text": "mod - same, similar, equal, of equal status or position<br>prep - like, as, seem",
        "synonyms": "same, similar, equal, like, as, seem"
    },
    "seli": {
        "text": "n - fire, warmth, heat<br>mod - hot, warm, cooked<br>vt - heat, warm up, cook",
        "synonyms": "fire, warmth, heat, hot, warm, cooked, heat up"
    },
    "selo": {
        "text": "n - outer form, shell, boundary, surface, skin",
        "synonyms": "outer form, shell, boundary, surface, skin"
    },
    "seme": {
        "text": "que - what, which, wh- (question word)",
        "synonyms": "what, which"
    },
    "sewi": {
        "text": "n - high, up, above, top, over, on, to stack<br>mod - superior, elevated, religious, formal, holy",
        "synonyms": "high, up, above, top, over, on, to stack, superior, elevated, religious, formal, holy"
    },
    "sijelo": {
        "text": "n - body, physical state",
        "synonyms": "body, physical state"
    },
    "sike": {
        "text": "n - circle, wheel, sphere, ball, cycle<br>mod - round, cyclical",
        "synonyms": "circle, wheel, sphere, ball, cycle, round, cyclical"
    },
    "sin": {
        "text": "mod - new, fresh, another, more",
        "synonyms": "new, fresh, another, more"
    },
    "sina": {
        "text": "n - you<br>mod - your",
        "synonyms": "you, your"
    },
    "sinpin": {
        "text": "n - front, chest, torso, face, wall",
        "synonyms": "front, chest, torso, face, wall"
    },
    "sitelen": {
        "text": "n - picture, image<br>vt - draw, write",
        "synonyms": "picture, image, draw, write"
    },
    "sona": {
        "text": "n - knowledge, wisdom, intelligence, understanding<br>mod - wise, educated, knowing<br>vt - know, understand, know how to, know about",
        "synonyms": "knowledge, wisdom, intelligence, understanding, wise, educated, know, understand, know about"
    },
    "soweli": {
        "text": "n - mammal, animal",
        "synonyms": "mammal, animal"
    },
    "suli": {
        "text": "mod - big, tall, long, adult, important<br>vt - enlarge, lengthen",
        "synonyms": "big, tall, long, adult, important, enlarge, lengthen"
    },
    "suno": {
        "text": "n - sun, light",
        "synonyms": "sun, light"
    },
    "supa": {
        "text": "n - horizontal surface, e.g. table, chair, pillow, floor",
        "synonyms": "surface, table, chair, pillow, floor"
    },
    "suwi": {
        "text": "mod - sweet, cute, adorable, lovely<br>vt - sweeten",
        "synonyms": "sweet, cute, adorable, lovely, sweeten"
    },
    "tan": {
        "text": "prep - from, by<br>conj - because of, due to<br>n - reason",
        "synonyms": "from, by, because of, due to, reason"
    },
    "taso": {
        "text": "mod - only, sole<br>conj - but, however",
        "synonyms": "only, sole, but, however"
    },
    "tawa": {
        "text": "n - movement, transportation, travel, road, way<br>mod - moving, mobile, travel-related, of transportation<br>prep - to, in order to, for, towards, until<br>vi - move, walk, travel",
        "synonyms": "movement, transportation, travel, road, way, moving, mobile, to, for, towards, until, move, walk"
    },
    "telo": {
        "text": "n - water, liquid, juice, sauce, oil<br>mod - liquid, fluid, of water",
        "synonyms": "water, liquid, juice, sauce, oil, fluid"
    },
    "tenpo": {
        "text": "n - time, occasion, moment, duration, situation",
        "synonyms": "time, occasion, moment, duration, situation"
    },
    "toki": {
        "text": "n - language, talking, speech, communication<br>mod - talking, verbal<br>vt - say, speak, talk to<br>vi - communicate<br>interj - hello! hi!",
        "synonyms": "language, talking, speech, communication, say, speak, talk, communicate, hello, hi"
    },
    "tomo": {
        "text": "n - indoor constructed space, e.g. house, home, room",
        "synonyms": "indoor space, house, home, room"
    },
    "tonsi": {
        "text": "n - transgender",
        "synonyms": "trans, transgender"
    },
    "tu": {
        "text": "mod - two<br>n - duo, pair",
        "synonyms": "two, duo, pair"
    },
    "unpa": {
        "text": "mod - sexual, erotic<br>vi - have sex<br>vt - have sex with<br>n - sex",
        "synonyms": "sexual, erotic, have sex, sex"
    },
    "uta": {
        "text": "n - mouth<br>mod - oral<br>vt - to kiss, to use your mouth upon",
        "synonyms": "mouth, oral, kiss"
    },
    "utala": {
        "text": "n - conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence<br>vt - hit, strike, attack, compete against<br>vi - conflict, fight",
        "synonyms": "conflict, disharmony, competition, fight, war, battle, attack, blow, argument, violence, hit, strike, attack, compete against"
    },
    "walo": {
        "text": "mod - white, light (colour)",
        "synonyms": "white, light"
    },
    "wan": {
        "text": "mod - one, a, an<br>n - unit, element, particle, part, piece",
        "synonyms": "one, a, an, unit, element, particle, part, piece"
    },
    "waso": {
        "text": "n - bird, winged animal",
        "synonyms": "bird, winged animal"
    },
    "wawa": {
        "text": "mod - strong, powerful, confident, energetic<br>vt - strengthen, empower<br>n - energy, strength, power",
        "synonyms": "strong, powerful, confident, energetic, strengthen, empower, energy"
    },
    "weka": {
        "text": "mod - away, absent, missing<br>vt - throw away, remove, get rid of",
        "synonyms": "away, absent, missing, throw away, remove, get rid of"
    },
    "wile": {
        "text": "vt - want, need, wish, have to, must, will<br>mod - necessary, wanted, needed, essential, must",
        "synonyms": "want, need, wish, have to, must, necessary, wanted, needed, essential"
    }
};

function searchmeaning(mean, sub) {
  let arr = mean.split(", ");
  let found = false;

  for (let meaning of arr) {
    if (meaning.startsWith(sub)) {
       found = true;
    }
  }

  return found;
}

function searchdic(words, substring) {
  let arr = [];



  for (let key in words) {
    // Check if the word starts with the substring or if its meaning contains the substring
    if (key.startsWith(substring) || searchmeaning(words[key].synonyms, substring)) {
      arr.push(key);
    }
  }
  
  if (arr.length == 0) {
    arr.push("none");
    
  }

  return arr;
}

function search_word() {
  console.log("searched");
  let word = $("#searchword").val().trim().toLowerCase(); // Trim and convert to lowercase for case-insensitive search

  let wordsstr = "";

  let words_arr = searchdic(words, word);

  for (let word of words_arr) {

    console.log(words_arr);

    if (words_arr[0] != "none") {
        console.log(word);
        let meaning = words[word].text;
        wordsstr += `
          <div style="text-align: center; background-color: #313835; width: 50%; margin: 10px auto; border-radius: 10px;
            padding: 5px;
            ">
            <p><bold>${word}</bold></p>
            <br>
            <p>${meaning}</p>
          </div>
    `;
        console.log(meaning); 

        $("#list").html(wordsstr);

    } else {
      console.log("no word");

      wordsstr += `
          <div style="text-align: center; background-color: #313835; width: 50%; margin: 10px auto; border-radius: 10px;
            padding: 5px;
            ">
            <p><bold>No word found.</bold></p>
            <br>
            <p>Try to use synonyms, breaking ideas into smaller ideas, or more vague ideas<br>(e.g.: Apple -> Fruit; Hungry -> Want to eat; Why -> What reason)</p>
          </div>
       `;

      
        $("#list").html(wordsstr);

    }
   }
}

$(document).ready(search_word); 

    

