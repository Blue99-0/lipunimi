const words = {
  "a": {
    "text": "ah, ha, uh, oh, ooh, aw, well (emotion word)",
    "synonyms": "ah, ha, uh, oh, ooh, aw, well"
  },
  "akesi": {
    "text": "non-cute animal, reptile, amphibian",
    "synonyms": "turtle, reptile, amphibian"
  },
  "ala": {
    "text": "no, not, none, un- nothing, negation, zero no!",
    "synonyms": "no, not, none, un-, nothing, negation, zero"
  },
  "alasa": {
    "text": "gather, hunt, forage",
    "synonyms": "gather, hunt, forage"
  },
  "ale": {
    "text": "everything, anything, life, universe all, every, complete, whole",
    "synonyms": "everything, anything, life, universe, all, every, complete, whole"
  },
  "ali": {
    "text": "everything, anything, life, universe all, every, complete, whole",
    "synonyms": "everything, anything, life, universe, all, every, complete, whole"
  },
  "anpa": {
    "text": "bottom, lower part, under, below, floor, beneath low, lower, bottom, down, lowly, humble, dependant",
    "synonyms": "bottom, lower part, under, below, floor, beneath, low, lower, down, lowly, humble, dependant"
  },
  "ante": {
    "text": "difference different otherwise, or else change, alter, modify",
    "synonyms": "difference, different, otherwise, or else, change, alter, modify"
  },
  "anu": {
    "text": "or",
    "synonyms": "or"
  },
  "awen": {
    "text": "stay, wait, remain keep remaining, stationary, permanent, sedentary",
    "synonyms": "stay, wait, remain, keep, remaining, stationary, permanent, sedentary"
  },
  "e": {
    "text": "(introduces a direct object)",
    "synonyms": "introduces a direct object"
  },
  "en": {
    "text": "and (used to coordinate head nouns)",
    "synonyms": "and, coordinate head nouns"
  },
  "esun": {
    "text": "market, shop, business, trading, selling, buying",
    "synonyms": "market, shop, business, trading, selling, buying"
  },
  "ijo": {
    "text": "thing, something, stuff, anything, object of something objectify",
    "synonyms": "thing, something, stuff, anything, object, objectify"
  },
  "ike": {
    "text": "bad, negative, wrong, evil, overly complex, (figuratively) unhealthy oh dear! woe! alas! negativity, badness, evil to make bad, to worsen, to have a negative effect upon to be bad, to suck",
    "synonyms": "bad, negative, wrong, evil, overly complex, unhealthy, oh dear, woe, alas, negativity, badness, evil, worsen, negative effect, suck"
  },
  "ilo": {
    "text": "tool, device, machine, thing used for a specific purpose",
    "synonyms": "tool, device, machine, thing, specific purpose"
  },
  "insa": {
    "text": "inside, inner world, centre, stomach inner, internal",
    "synonyms": "inside, inner world, centre, stomach, inner, internal"
  },
  "jaki": {
    "text": "dirty, gross, filthy dirt, pollution, garbage, filth to pollute, dirty ew! yuck!",
    "synonyms": "dirty, gross, filthy, dirt, pollution, garbage, filth, pollute, dirty, ew, yuck"
  },
  "jan": {
    "text": "person, people, human, being, somebody, anybody human, somebody's, personal, of people to personify, humanize, personalize",
    "synonyms": "person, people, human, being, somebody, anybody, personal, people, personify, humanize, personalize"
  },
  "jelo": {
    "text": "yellow, light green",
    "synonyms": "yellow, light green"
  },
  "jo": {
    "text": "have, contain having receive, get, take, obtain",
    "synonyms": "have, contain, having, receive, get, take, obtain"
  },
  "kala": {
    "text": "fish, sea creature",
    "synonyms": "fish, sea creature"
  },
  "kalama": {
    "text": "sound, noise, voice make noise sound, ring, play (an instrument)",
    "synonyms": "sound, noise, voice, make noise, ring, play (an instrument)"
  },
  "kama": {
    "text": "come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to event, happening, chance, arrival, beginning coming, future bring about, summon",
    "synonyms": "come, become, arrive, happen, pursue actions, manage, start, event, happening, chance, arrival, beginning, coming, future, bring about, summon"
  },
  "kasi": {
    "text": "plant, leaf, herb, tree, wood",
    "synonyms": "plant, leaf, herb, tree, wood"
  },
  "ken": {
    "text": "can, is able to, is allowed to, may, is possible possibility, ability, power to do things, permission make possible, enable, allow, permit it is possible that",
    "synonyms": "can, able to, allowed to, may, possible, possibility, ability, power, permission, make possible, enable, permit, possible"
  },
  "kepeken": {
    "text": "use with",
    "synonyms": "use, with"
  },
  "kili": {
    "text": "fruit, vegetable, mushroom",
    "synonyms": "fruit, vegetable, mushroom"
  },
  "kin": {
    "text": "also, too, even, indeed (emphasizes the word(s) before it)",
    "synonyms": "also, too, even, indeed"
  },
  "kipisi": {
    "text": "part, partition split, cut, divide",
    "synonyms": "part, partition, split, cut, divide"
  },
  "kiwen": {
    "text": "hard, solid, stone-like, made of stone or metal hard thing, rock, stone, metal, mineral, clay",
    "synonyms": "hard, solid, stone-like, stone, metal, mineral, clay"
  },
  "ko": {
    "text": "semi-solid or squishy substance, e.g. paste, powder, gum",
    "synonyms": "semi-solid, squishy substance, paste, powder, gum"
  },
  "kon": {
    "text": "air, wind, smell, soul air-like, ethereal, gaseous",
    "synonyms": "air, wind, smell, soul, air-like, ethereal, gaseous"
  },
  "kule": {
    "text": "colour, paint colourful colour, paint",
    "synonyms": "colour, paint, colourful"
  },
  "kulupu": {
    "text": "group, community, society, company, people communal, shared, public, of the society",
    "synonyms": "group, community, society, company, people, communal, shared, public"
  },
  "kute": {
    "text": "listen, hear auditory, hearing",
    "synonyms": "listen, hear, auditory, hearing"
  },
  "la": {
    "text": "(between adverb or phrase of context and sentence)",
    "synonyms": "between adverb or phrase of context and sentence"
  },
  "lape": {
    "text": "sleep, rest sleeping, of sleep",
    "synonyms": "sleep, rest, sleeping"
  },
  "laso": {
    "text": "blue, blue-green",
    "synonyms": "blue, blue-green"
  },
  "lawa": {
    "text": "head, mind main, leading, in charge lead, control, rule, steer",
    "synonyms": "head, mind, main, leading, in charge, lead, control, rule, steer"
  },
  "len": {
    "text": "clothing, cloth, fabric",
    "synonyms": "clothing, cloth, fabric"
  },
  "lete": {
    "text": "cold cold, uncooked cool down, chill",
    "synonyms": "cold, uncooked, cool down, chill"
  },
  "li": {
    "text": "(between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
    "synonyms": "between subject, introduce new verb"
  },
  "lili": {
    "text": "small, little, young, a bit, short, few, less reduce, shorten, shrink, lessen",
    "synonyms": "small, little, young, bit, short, few, less, reduce, shorten, shrink, lessen"
  },
  "linja": {
    "text": "long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
    "synonyms": "long, thin, floppy thing, string, rope, hair, thread, cord, chain"
  },
  "lipu": {
    "text": "flat and bendable thing, e.g. paper, card, ticket",
    "synonyms": "flat, bendable thing, paper, card, ticket"
  },
  "loje": {
    "text": "red darkness, shadows",
    "synonyms": "red, darkness, shadows"
  },
  "lon": {
    "text": "be (located) in/at/on be there, be present, be real/true, exist, be awake",
    "synonyms": "be, located, present, real, exist, awake"
  },
  "luka": {
    "text": "hand, arm",
    "synonyms": "hand, arm"
  },
  "lukin": {
    "text": "see, look at, watch, read look, watch out, pay attention visual(ly)",
    "synonyms": "see, look at, watch, read, look, watch out, pay attention, visual"
  },
  "lupa": {
    "text": "hole, orifice, window, door",
    "synonyms": "hole, orifice, window, door"
  },
  "ma": {
    "text": "land, earth, country, (outdoor) area",
    "synonyms": "land, earth, country, area"
  },
  "mama": {
    "text": "parent, mother, father of the parent, parental, maternal, fatherly",
    "synonyms": "parent, mother, father, parental, maternal, fatherly"
  },
  "mani": {
    "text": "money, material wealth, currency, dollar, capital",
    "synonyms": "money, wealth, currency, dollar, capital"
  },
  "meli": {
    "text": "woman, female, girl, wife, girlfriend female, feminine, womanly",
    "synonyms": "woman, female, girl, wife, girlfriend, feminine, womanly"
  },
  "mi": {
    "text": "I, we my, our",
    "synonyms": "I, we, my, our"
  },
  "mije": {
    "text": "man, male, boy, husband, boyfriend male, masculine, manly",
    "synonyms": "man, male, boy, husband, boyfriend, masculine, manly"
  },
  "moku": {
    "text": "food, meal eat, drink, swallow, ingest, consume",
    "synonyms": "food, meal, eat, drink, swallow, ingest, consume"
  },
  "moli": {
    "text": "death die, be dead kill, dead, deadly, fatal",
    "synonyms": "death, die, dead, kill, deadly, fatal"
  },
  "monsi": {
    "text": "back, rear end, butt, behind back, rear",
    "synonyms": "back, rear end, butt, behind, rear"
  },
  "mu": {
    "text": "woof! meow! moo! etc. (animal noise)",
    "synonyms": "woof, meow, moo, animal noise"
  },
  "mun": {
    "text": "moon lunar",
    "synonyms": "moon, lunar"
  },
  "musi": {
    "text": "fun, playing, game, recreation, art, entertainment artful, fun, recreational play, have fun amuse, entertain",
    "synonyms": "fun, playing, game, recreation, art, entertainment, artful, recreational, play, have fun, amuse, entertain"
  },
  "mute": {
    "text": "many, very, much, several, a lot, abundant, numerous, more amount, quantity make many or much",
    "synonyms": "many, very, much, several, lot, abundant, numerous, more, amount, quantity, make many or much"
  },
  "namako": {
    "text": "food additive, accessory, something extra season, embellish, stimulate",
    "synonyms": "food additive, accessory, something extra, season, embellish, stimulate"
  },
  "nanpa": {
    "text": "number -th (ordinal numbers)",
    "synonyms": "number, ordinal numbers"
  },
  "nasa": {
    "text": "silly, crazy, foolish, drunk, strange, stupid, weird drive crazy, make weird",
    "synonyms": "silly, crazy, foolish, drunk, strange, stupid, weird, drive crazy, make weird"
  },
  "nasin": {
    "text": "way, manner, custom, road, path, doctrine, system, method",
    "synonyms": "way, manner, custom, road, path, doctrine, system, method"
  },
  "nena": {
    "text": "bump, nose, hill, mountain, button",
    "synonyms": "bump, nose, hill, mountain, button"
  },
  "ni": {
    "text": "this, that",
    "synonyms": "this, that"
  },
  "nimi": {
    "text": "word, name",
    "synonyms": "word, name"
  },
  "noka": {
    "text": "leg, foot",
    "synonyms": "leg, foot"
  },
  "o": {
    "text": "O (vocative or imperative) hey! (calling somebody's attention)",
    "synonyms": "O, hey, calling somebody's attention"
  },
  "oko": {
    "text": "eye",
    "synonyms": "eye"
  },
  "olin": {
    "text": "love love to love",
    "synonyms": "love, to love"
  },
  "ona": {
    "text": "she, he, it, they her, his, its, their",
    "synonyms": "she, he, it, they, her, his, its, their"
  },
  "open": {
    "text": "open, turn on",
    "synonyms": "open, turn on"
  },
  "pakala": {
    "text": "blunder, accident, mistake, destruction, damage, breaking screw up, fuck up, botch, ruin, break, hurt, injure, damage, spoil, ruin",
    "synonyms": "blunder, accident, mistake, destruction, damage, breaking, screw up, fuck up, botch, ruin, break, hurt, injure, spoil"
  },
  "pali": {
    "text": "activity, work, deed, project active, work-related, operating, working do, make, build, create act, work, function",
    "synonyms": "activity, work, deed, project, active, work-related, operating, working, do, make, build, create, act, work, function"
  },
  "palisa": {
    "text": "long, mostly hard object, e.g. rod, stick, branch",
    "synonyms": "long, mostly hard object, rod, stick, branch"
  },
  "pan": {
    "text": "grain, cereal",
    "synonyms": "grain, cereal"
  },
  "pana": {
    "text": "give, put, send, place, release, emit, cause giving, transfer, exchange",
    "synonyms": "give, put, send, place, release, emit, cause, giving, transfer, exchange"
  },
  "pi": {
    "text": "of, belonging to",
    "synonyms": "of, belonging to"
  },
  "pilin": {
    "text": "feelings, emotion, heart feel feel, think, sense, touch",
    "synonyms": "feelings, emotion, heart, feel, think, sense, touch"
  },
  "pimeja": {
    "text": "black, dark darkness, shadows darken",
    "synonyms": "black, dark, darkness, shadows, darken"
  },
  "pini": {
    "text": "end, tip completed, finished, past, done, ago finish, close, end, turn off",
    "synonyms": "end, tip, completed, finished, past, done, ago, finish, close, turn off"
  },
  "pipi": {
    "text": "bug, insect, spider",
    "synonyms": "bug, insect, spider"
  },
  "poka": {
    "text": "side, hip, next to in the accompaniment of, with neighbouring",
    "synonyms": "side, hip, next to, with, neighbouring"
  },
  "poki": {
    "text": "container, box, bowl, cup, glass",
    "synonyms": "container, box, bowl, cup, glass"
  },
  "pona": {
    "text": "good, simplicity, positivity good, simple, positive, nice, correct, right great! good! thanks! OK! cool! yay! improve, fix, repair, make good",
    "synonyms": "good, simplicity, positivity, great, thanks, improve, fix, repair"
  },
  "pu": {
    "text": "interact with the official toki pona book",
    "synonyms": "interact with the official toki pona book"
  },
  "sama": {
    "text": "same, similar, equal, of equal status fellow, sibling, peer similar to, resembling, like, as if",
    "synonyms": "same, similar, equal, of equal status, fellow, sibling, peer, resembling, like"
  },
  "seli": {
    "text": "fire, warmth hot, warm heat up, warm up, cook, heat",
    "synonyms": "fire, warmth, hot, warm, heat up, warm up, cook"
  },
  "selo": {
    "text": "surface, skin, shell",
    "synonyms": "surface, skin, shell"
  },
  "seme": {
    "text": "what? which?",
    "synonyms": "what, which"
  },
  "sewi": {
    "text": "high, above, top, elevated religion, ritual, supernatural, spiritual, sacred, divine holy, sacred, religious, spiritual, supernatural, divine",
    "synonyms": "high, above, top, elevated, religion, ritual, supernatural, spiritual, sacred, divine, holy, religious"
  },
  "sijelo": {
    "text": "body physical",
    "synonyms": "body, physical"
  },
  "sike": {
    "text": "circle, wheel round or spherical thing, ball, wheel",
    "synonyms": "circle, wheel, round, spherical thing, ball"
  },
  "sin": {
    "text": "new, fresh, another more, again, further, extra, increase, additional, enhance anew, afresh",
    "synonyms": "new, fresh, another, more, again, further, extra, increase, additional, enhance, anew, afresh"
  },
  "sina": {
    "text": "you, your",
    "synonyms": "you, your"
  },
  "sinpin": {
    "text": "front, chest, torso",
    "synonyms": "front, chest, torso"
  },
  "sitelen": {
    "text": "picture, image",
    "synonyms": "picture, image"
  },
  "sona": {
    "text": "knowledge, wisdom, intelligence know, understand, know how",
    "synonyms": "knowledge, wisdom, intelligence, know, understand, know-how"
  },
  "soweli": {
    "text": "animal, beast, land mammal",
    "synonyms": "animal, beast, land mammal"
  },
  "suli": {
    "text": "big, tall, long, adult, important size, importance enlarge, lengthen, extend",
    "synonyms": "big, tall, long, adult, important, size, importance, enlarge, lengthen, extend"
  },
  "suno": {
    "text": "sun light, brighten",
    "synonyms": "sun, light, brighten"
  },
  "supa": {
    "text": "horizontal surface, furniture, table, chair",
    "synonyms": "horizontal surface, furniture, table, chair"
  },
  "suwi": {
    "text": "sweet, cute candy, sweet food, dessert",
    "synonyms": "sweet, cute, candy, sweet food, dessert"
  },
  "tan": {
    "text": "from, by from, because of, since, origin, cause",
    "synonyms": "from, because of, since, origin, cause"
  },
  "taso": {
    "text": "but",
    "synonyms": "but"
  },
  "tawa": {
    "text": "to, for, in order to, towards, until move, go, travel, walk (to/for) move, transport",
    "synonyms": "to, for, in order to, towards, until, move, go, travel, walk, transport"
  },
  "telo": {
    "text": "water, liquid, juice, sauce, beverage, damp, wet, moisturize wash, liquid",
    "synonyms": "water, liquid, juice, sauce, beverage, damp, wet, moisturize, wash"
  },
  "tenpo": {
    "text": "time, period of time",
    "synonyms": "time, period of time"
  },
  "toki": {
    "text": "language, talk, speech, communication speak, talk, say, converse, chat",
    "synonyms": "language, talk, speech, communication, speak, talk, say, converse, chat"
  },
  "tomo": {
    "text": "house, home, building, room, (modern) construction, shelter",
    "synonyms": "house, home, building, room, construction, shelter"
  },
  "tu": {
    "text": "two, pair couple, double, twin divide by two",
    "synonyms": "two, pair, couple, double, twin, divide by two"
  },
  "unpa": {
    "text": "sex, sexuality, having sex sexual",
    "synonyms": "sex, sexuality, having sex, sexual"
  },
  "uta": {
    "text": "mouth oral",
    "synonyms": "mouth, oral"
  },
  "utala": {
    "text": "conflict, fight, hit, beat, battle, attack, harm, defeat conflict, fight",
    "synonyms": "conflict, fight, hit, beat, battle, attack, harm, defeat"
  },
  "walo": {
    "text": "white, light colour, white thing",
    "synonyms": "white, light, color, white thing"
  },
  "wan": {
    "text": "one, a",
    "synonyms": "one, a"
  },
  "waso": {
    "text": "bird, flying creature",
    "synonyms": "bird, flying creature"
  },
  "wawa": {
    "text": "energy, strength, power strong, energetic, intense empower, strengthen",
    "synonyms": "energy, strength, power, strong, energetic, intense, empower, strengthen"
  },
  "weka": {
    "text": "away, absent, missing, remove, eliminate",
    "synonyms": "away, absent, missing, remove, eliminate"
  },
  "wile": {
    "text": "to want, need, wish, have to, must, will, should desire, necessity, neediness wish, want, need, require, should",
    "synonyms": "want, need, wish, have to, must, will, should, desire, necessity, neediness, require"
  }
}

searchmeaning(mean, sub) {
  let arr = mean.split(", ");
  let found = false;

  for (let meaning in arr) {
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
    if (key.text.startsWith(substring) || words[key].synonims.includes(substring)) {
      arr.push(key.text);
    }
  }

  return arr;
}

function search_word() {
  console.log("searched");
  let word = $("#searchword").val().trim().toLowerCase(); // Trim and convert to lowercase for case-insensitive search

  let wordsstr = "";

  let words_arr = searchdic(words, word);

  console.log(words_arr);

  for (let word of words_arr) {
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
  }

  $("#list").html(wordsstr);
}

$(document).ready(search_word); 

    
