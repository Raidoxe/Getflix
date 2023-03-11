import Titles from './_titles';

class Phrases {
    static adjectives = ['Fast', 'Manipulative', 'Squeamish', 'Blue', 'Hungry', 'Bald', 'Unhappy', 'Cursed', 'Hot', 'Giant', 'Lost', 'Crazed', 'Phsycotic', 'Creative', 'Bemused'];
    static nouns = ['Coffeecup', 'Farmer', 'Asian', 'Table', 'Printer', 'Perth', 'Cow', 'Airpod', 'School', 'Painting', 'Witch', 'Zombie', 'Giant', 'Possum', 'Paper', 'Gorilla', 'Doorway', 'Princess'];
    static properNouns = ['Griffin', 'Steve']


    static getText() { // returns an array in the format [ajective, noun]
        //get length of nouns arr and adjectives arr
        const nounsLen = this.nouns.length;
        const adjecLen = this.adjectives.length;

        //Get possible nouns to fill in strings
        const possibleNouns = [this.nouns[this.getRandomInt(nounsLen)], this.nouns[this.getRandomInt(nounsLen)]];

        //Get a random title from the Titles array
        let randTitle = Titles[this.getRandomInt(Titles.length)]

        //Repalce placeholders in Titles strings with regex
        randTitle = randTitle.replace(/nnn1/g, possibleNouns[0]);
        randTitle = randTitle.replace(/nnn2/g, possibleNouns[1]);
        randTitle = randTitle.replace(/aaa/g, this.adjectives[this.getRandomInt(adjecLen)]);

        return randTitle;
    }

    static getRandomInt(max) {//returns value between 0 and max - 1
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default Phrases;