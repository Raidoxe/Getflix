const madLibs = {
    action: ["waking", "sleeping", "snoring", "talking", "banking"],
    place: ["a morgue", "an university", "a supermarket", "a space station", "an old western", "a time loop", "a Virtual world", "Australia", "an Ocean", "the Sky", "a Cloud"],
    char: ["Steve", "Basil", "Kung Fury", "Mable", "Harry M. Thornburg", "Harry", "Donald", "Kenneth", "Nancy", "Evelyn"],
    attrib: ["the ability to fly", "a really cool toaster", "The Sight", "insane sarcasm", "the most indie t-shirt in town"],
    problem: ["exams to study for", "mariage propblems", "a crazy ex-girlfriend"],
    evil1: ["Sally", "Father Greg", "Saint Peter", "Griffon Jones", "Oli", "the wildlife club"],
    evil2: ["David", "Sister Mary", "Adam Sandler", "Jedd", "the local police"],
    rela: ["cousins", "siblings", "maried", "enemies"],
    emotion: ["ecstatic", "sad", "over-joyed", "love"],
    gender: ["Man", "Woman", "Wombat", "Hamster", "Cat", "Fish", "Quokka", "warden" ],
    crime: ["Murder", "Arson", "Larceny", "Disorderly Conduct", "Trespassing", "Speeding", "DUI"],
    task: ["Race", "Chess compitition", "Blinking contest", "Jog", "Drinking game"],
    thing: ["Dignity" ,"Humanity", "Life", "honour"],
    disaster:  ["Flood", "turmoil", "a heatwave", "Earthquake", "Economic Collapse", "Starvation", "Over Population"],
    hobby:  ["Baker", "Athlete", "Painter", "craftsman"],
    item:  ["The Golden Snitch", "a map", "a key", "the treasure of doom", "a pirate ship"],
    plotAction: ["fight to the death", "work together", "team up", "bake a cake", "mow the lawn"],
    genre: ["Drama", "Animated Series", "Comedy"],
    organisation: ["Big Bad Guys", "Monsters inc.", "Evil co.", "company co."],
    describer: ["vast", "beautiful", "expansive", "Great", "Limitless", "Microscopic", "tiny"],
    preThing: ["Former", "Future", "Past", "", "" ],
    badguy: ["pirate", "alien", "terrorist"],
    goodguy: ["FBI agent", "CIA agent", "police officer", "retired army veteren"],
    bagGangName: ["Greasers", "Socs", "Front Yard Ballas", "Greaks", "ACAB"],
    rating: ["G", "PG", "M", "MA15", "R18"]
}


const random = (list) => {
    return(Math.floor((Math.random() * list.length) ));
}

function makeTemp(){
    const genre = madLibs.genre[Math.floor((random(madLibs.genre)))];

    const templates = [
        {template: `After ${madLibs.action[random(madLibs.action)]} in ${madLibs.place[random(madLibs.place)]}, ${madLibs.char[random(madLibs.char)]} discovers they now posses ${madLibs.attrib[random(madLibs.attrib)]}. The only problem is they have ${madLibs.problem[random(madLibs.problem)]} and ${madLibs.evil1[random(madLibs.evil1)]}${madLibs.evil2[random(madLibs.evil2)]} don't look too kindly on that.`},
        {template: `When ${madLibs.char[random(madLibs.char)]} meets ${madLibs.char[random(madLibs.char)]} by chance they discover they're ${madLibs.rela[random(madLibs.rela)]} and they're ${madLibs.emotion[random(madLibs.emotion)]}  until it emerges that they have ${madLibs.problem[random(madLibs.problem)]}`},
        {template: `In a world on the brink of ${madLibs.disaster[random(madLibs.disaster)]}, a talanted ${madLibs.hobby[random(madLibs.hobby)]} takes the lead in a series of challenges to win ownership of ${madLibs.item[random(madLibs.item)]}`},
        {template:`A ${madLibs.gender[random(madLibs.gender)]} wrongly imprisoned of ${madLibs.crime[random(madLibs.preThing)]} agrees to compete in a grueling three day ${madLibs.task[random(madLibs.task)]} against fellow inmates in exhange for their ${madLibs.preThing[random(madLibs.preThing)]} ${madLibs.thing[random(madLibs.thing)]}`},
        {template: `Determined to protect ${madLibs.item[random(madLibs.item)]} that promises to save humanity, ${madLibs.char[random(madLibs.char)]} goes on a wayward quest across ${madLibs.describer[random(madLibs.describer)]} ${madLibs.place[random(madLibs.place)]}`},
        {template: `In this ${genre} the employees of ${madLibs.organisation[random(madLibs.organisation)]} have to ${madLibs.plotAction[random(madLibs.plotAction)]} with ${madLibs.emotion[random(madLibs.emotion)]} results`},
        {template: `The new warden of a small prison farm in Arkansas tries to clean it up of corruption after initially posing as an inmate.`},
        {template: `The rivalry between two gangs, the poor ${madLibs.bagGangName[random(madLibs.bagGangName)]} and the rich ${madLibs.bagGangName[random(madLibs.bagGangName)]}, only heats up when one gang member kills a member of the other. `},
        {template: `${madLibs.char[random(madLibs.char)]}, a person from ${madLibs.place[random(madLibs.place)]}, meets ${madLibs.char[random(madLibs.char)]}, a punk from ${madLibs.place[random(madLibs.place)]}. They are from different worlds and find ${madLibs.emotion[random(madLibs.emotion)]}. Somehow they need to stay together in spite of her trendy, shallow friends. `},
        {template: `In order to foil a ${madLibs.badguy[random(madLibs.badguy)]} plot, a ${madLibs.goodguy[random(madLibs.goodguy)]} undergoes facial transplant surgery and assumes the identity of a criminal mastermind, who murdered his only son. The plan turns sour when the criminal wakes up prematurely and seeks revenge. `},
        {template: `${madLibs.char[random(madLibs.char)]} was born and grew up in an average family in ${madLibs.place[random(madLibs.place)]}, he lived free of trouble until he was about 12 years old, but at that point life changed. Their whole life was turned upside down after a ${madLibs.disaster[random(madLibs.disaster)]} and they were abandoned by all. With the help of ${madLibs.char[random(madLibs.char)]}, a suspicious stranger he had to survive in a villainous world.`},
        // {template: ``},
    ]
    const x = Math.floor((Math.random() * templates.length) )
    const rated = madLibs.rating[Math.floor((random(madLibs.rating)))];
    
    const tvPlot = {
        synopsys: templates[x].template,
        genre: genre,
        rating: rated
    }

    
    
    return tvPlot
}



export default makeTemp