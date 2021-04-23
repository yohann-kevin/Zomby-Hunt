import adventurer from "./assets/images/adventurer.png";
import adventurerKick from "./assets/images/adventurer-kick.png";
import adventurerWalkOne from "./assets/images/adventurer-walk-one.png";
import adventurerWalkTwo from "./assets/images/adventurer-walk-two.png";
import adventurerWinOne from "./assets/images/adventurer-win-one.png";
import adventurerWinTwo from "./assets/images/adventurer-win-two.png";

let ImagePlayer = {
    adventurer: function() {
        return adventurer;
    },
    adventurerKick: function() {
        return adventurerKick;
    },
    adventurerWalkOne: function() {
        return adventurerWalkOne;
    },
    adventurerWalkTwo: function() {
        return adventurerWalkTwo;
    },
    adventurerWinOne: function() {
        return adventurerWinOne;
    },
    adventurerWinTwo: function() {
        return adventurerWinTwo;
    }
}

export default ImagePlayer;