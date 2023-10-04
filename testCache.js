class team{
    constructor(match){
        this.match = match;
    }

    getMatch() {
        return this.match;
    }
    setMatch(match){
        this.match = match;
    }
}

module.exports = new team("Teammates")