const words = { // tried to use JSON in another file but i couldnt figure out how t load it.
  "a": "ah, ha, uh, oh, ooh, aw, well (emotion word)",
  "akesi": "non-cute animal, reptile, amphibian",
  "ala": "no, not, none, un-<br>nothing, negation, zero<br>no!",
  "alasa": "gather, hunt, forage",
  "ale": "everything, anything, life, universe<br>all, every, complete, whole",
  "ali": "everything, anything, life, universe<br>all, every, complete, whole",
  "anpa": "bottom, lower part, under, below, floor, beneath<br>low, lower, bottom, down, lowly, humble, dependant",
  "ante": "difference<br>different<br>otherwise, or else<br>change, alter, modify",
  "anu": "or",
  "awen": "stay, wait, remain<br>keep<br>remaining, stationary, permanent, sedentary",
  "e": "(introduces a direct object)",
  "en": "and (used to coordinate head nouns)",
  "esun": "market, shop, business, trading, selling, buying",
  "ijo": "thing, something, stuff, anything, object<br>of something<br>objectify",
  "ike": "bad, negative, wrong, evil, overly complex, (figuratively) unhealthy<br>oh dear! woe! alas!<br>negativity, badness, evil<br>to make bad, to worsen, to have a negative effect upon<br>to be bad, to suck",
  "ilo": "tool, device, machine, thing used for a specific purpose",
  "insa": "inside, inner world, centre, stomach<br>inner, internal",
  "jaki": "dirty, gross, filthy<br>dirt, pollution, garbage, filth<br>pollute, dirty<br>ew! yuck!",
  "jan": "person, people, human, being, somebody, anybody<br>human, somebody's, personal, of people<br>personify, humanize, personalize",
  "jelo": "yellow, light green",
  "jo": "have, contain<br>having<br>receive, get, take, obtain",
  "kala": "fish, sea creature",
  "kalama": "sound, noise, voice<br>make noise<br>sound, ring, play (an instrument)",
  "kama": "come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to<br>event, happening, chance, arrival, beginning<br>coming, future<br>bring about, summon<br>come up",
  "kasi": "plant, leaf, herb, tree, wood",
  "ken": "can, is able to, is allowed to, may, is possible<br>possibility, ability, power to do things, permission<br>make possible, enable, allow, permit<br>it is possible that",
  "kepeken": "use<br>with",
  "kili": "fruit, vegetable, mushroom",
  "kin": "also, too, even, indeed (emphasizes the word(s) before it)",
  "kipisi": "part, partition<br>split, cut, divide",
  "kiwen": "hard, solid, stone-like, made of stone or metal<br>hard thing, rock, stone, metal, mineral, clay",
  "ko": "semi-solid or squishy substance, e.g. paste, powder, gum",
  "kon": "air, wind, smell, soul<br>air-like, ethereal, gaseous",
  "kule": "colour, paint<br>colourful<br>colour, paint",
  "kulupu": "group, community, society, company, people<br>communal, shared, public, of the society",
  "kute": "listen, hear<br>auditory, hearing",
  "la": "(between adverb or phrase of context and sentence)",
  "lape": "sleep, rest<br>sleeping, of sleep",
  "laso": "blue, blue-green",
  "lawa": "head, mind<br>main, leading, in charge<br>lead, control, rule, steer",
  "len": "clothing, cloth, fabric",
  "lete": "cold<br>cold, uncooked<br>cool down, chill",
  "li": "(between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
  "lili": "small, little, young, a bit, short, few, less<br>reduce, shorten, shrink, lessen",
  "linja": "long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
  "lipu": "flat and bendable thing, e.g. paper, card, ticket",
  "loje": "red",
  "lon": "be (located) in/at/on<br>be there, be present, be real/true, exist, be awake",
  "luka": "hand, arm",
  "lukin": "see, look at, watch, read<br>look, watch out, pay attention<br>visual(ly)",
  "lupa": "hole, orifice, window, door",
  "ma": "land, earth, country, (outdoor) area",
  "mama": "parent, mother, father<br>of the parent, parental, maternal, fatherly",
  "mani": "money, material wealth, currency, dollar, capital",
  "meli": "woman, female, girl, wife, girlfriend<br>female, feminine, womanly",
  "mi": "I, we<br>my, our",
  "mije": "man, male, boy, husband, boyfriend<br>male, masculine, manly",
  "moku": "food, meal<br>eat, drink, swallow, ingest, consume",
  "moli": "death<br>die, be dead<br>kill<br>dead, deadly, fatal",
  "monsi": "back, rear end, butt, behind<br>back, rear",
  "mu": "woof! meow! moo! etc. (animal noise)",
  "mun": "moon<br>lunar",
  "musi": "fun, playing, game, recreation, art, entertainment<br>artful, fun, recreational<br>play, have fun<br>amuse, entertain",
  "mute": "many, very, much, several, a lot, abundant, numerous, more<br>amount, quantity<br>make many or much",
  "namako": "food additive, accessory, something extra<br>season, embellish, stimulate",
  "nanpa": "number<br>-th (ordinal numbers)",
  "nasa": "silly, crazy, foolish, drunk, strange, stupid, weird<br>drive crazy, make weird",
 

 "nasin": "way, manner, custom, road, path, doctrine, system, method",
  "nena": "bump, nose, hill, mountain, button",
  "ni": "this, that",
  "nimi": "word, name",
  "noka": "leg, foot",
  "o": "O (vocative or imperative)<br>hey! (calling somebody's attention)",
  "oko": "eye",
  "olin": "love<br>love<br>to love (a person)",
  "ona": "she, he, it, they<br>her, his, its, their",
  "open": "open, turn on",
  "pakala": "blunder, accident, mistake, destruction, damage, breaking<br>screw up, fuck up, botch, ruin, break, hurt, injure, damage, spoil, ruin<br>damn! fuck!",
  "pali": "activity, work, deed, project<br>active, work-related, operating, working<br>do, make, build, create<br>act, work, function",
  "palisa": "long, mostly hard object, e.g. rod, stick, branch",
  "pan": "grain, cereal",
  "pana": "give, put, send, place, release, emit, cause<br>giving, transfer, exchange",
  "pi": "of, belonging to",
  "pilin": "feelings, emotion, heart<br>feel<br>feel, think, sense, touch",
  "pimeja": "black, dark<br>darkness, shadows<br>darken",
  "pini": "end, tip<br>completed, finished, past, done, ago<br>finish, close, end, turn off",
  "pipi": "bug, insect, spider",
  "poka": "side, hip, next to<br>in the accompaniment of, with<br>neighbouring",
  "poki": "container, box, bowl, cup, glass",
  "pona": "good, simplicity, positivity<br>good, simple, positive, nice, correct, right<br>great! good! thanks! OK! cool! yay!<br>improve, fix, repair, make good",
  "pu": "interact with the official toki pona book",
  "sama": "same, similar, equal, of equal status or position<br>like, as, seem",
  "seli": "fire, warmth, heat<br>hot, warm, cooked<br>heat, warm up, cook",
  "selo": "outside, surface, skin, shell, bark, shape, peel",
  "seme": "what, which, wh- (question word)",
  "sewi": "high, up, above, top, over, on<br>superior, elevated, religious, formal",
  "sijelo": "body, physical state",
  "sike": "circle, wheel, sphere, ball, cycle<br>round, cyclical",
  "sin": "new, fresh, another, more<br>renew, renovate, freshen",
  "sina": "you<br>your",
  "sinpin": "front, chest, torso, face, wall",
  "sitelen": "picture, image<br>draw, write",
  "sona": "knowledge, wisdom, intelligence, understanding<br>know, understand, know how to<br>know, understand<br>learn, study",
  "soweli": "animal, especially land mammal, lovable animal",
  "suli": "big, tall, long, adult, important<br>enlarge, lengthen<br>size",
  "suno": "sun, light",
  "supa": "horizontal surface, e.g furniture, table, chair, pillow, floor",
  "suwi": "candy, sweet food<br>sweeten",
  "tan": "from, by, because of, since<br>origin, cause",
  "taso": "only, sole<br>but",
  "tawa": "to, in order to, towards, for, until<br>go to, walk, travel, move, leave<br>movement, transportation<br>moving, mobile<br>move, displace",
  "telo": "water, liquid, juice, sauce<br>water, wash with water",
  "tenpo": "time, period of time, moment, duration, situation",
  "toki": "language, talking, speech, communication<br>talking, verbal<br>say<br>talk, chat, communicate<br>hello! hi!",
  "tomo": "indoor constructed space, e.g. house, home, room, building<br>urban, domestic, household",
  "tonsi": "non-binary, transgender, non-conforming",
  "tu": "two<br>duo, pair<br>double, separate/cut/divide in two",
  "unpa": "sex, sexuality<br>erotic, sexual<br>have sex with, sleep with, fuck<br>have sex",
  "uta": "mouth<br>oral",
  "utala": "conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence<br>hit, strike, attack, compete against",
  "walo": "white, light (colour)<br>white thing or part, whiteness, lightness",
  "wan": "one, a<br>unit, element, particle, part, piece<br>unite, make one",
  "waso": "bird, winged animal",
  "wawa": "energy, strength, power<br>energetic, strong, fierce, intense, sure, confident<br>strengthen, energize, empower",
  "weka": "away, absent, missing<br>absence<br>throw away, remove, get rid of",
  "wile": "to want, need, wish, have to, must, will, should<br>desire, need, will<br>necessary"
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
    let meaning = words[word];
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


