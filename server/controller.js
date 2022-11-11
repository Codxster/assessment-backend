module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "A dubious friend may be an enemy in camouflage.", "A feather in the hand is better than a bird in the air.", "A truly rich life contains love and art in abundance.", "Accept something that you cannot change, and you will feel better.", "Advice is like kissing. It costs nothing and is a pleasant thing to do.", "Because you demand more from yourself, others respect you deeply.", "Chance favors those in motion."];
       
        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];

        res.status(200).send(randomFortune);
    },

    getMotivation: (req, res) => {
        const motivations = ["Mistakes only make your life easier", "opportunities don't happen, you create them", "It is never too late to be what you might have been.", "When you change your thoughts, remember to also change your world", "We cannot solve problems with the kind of thinking we employed when we came up with them."];
       
        let randomMotivationIndex = Math.floor(Math.random() * motivations.length);
        let randomMotivation = motivations[randomMotivationIndex];

        res.status(200).send(randomMotivation);
    },

    getLove: (req, res) => {
        const love = ["Love all, trust a few, do wrong to none", "A life lived in love will never be dull", "Women are meant to be loved, not to be understood.", "In life, you will make friends, but only the true ones are there for you in your bad times.", "Cherish what you have while you still have it"]

        let randomLoveIndex = Math.floor(Math.random() * love.length);
        let randomLove = love[randomLoveIndex];

        res.status(200).send(randomLove)
    },

    getEncouraged: (req, res) => {
        const encourage = ["why stop here when you've come so far?", "Everyone has their own way to get to the top of the mountain", "Don't let the success of others slow you down", "Find what you love to do, and find a way to make money doing it", "Keep your face always toward the sunshine, and shadows will fall behind you.", "You define your own life. Don't let other people write your script.", "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.", "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."];

        let randomEncourageIndex = Math.floor(Math.random() * encourage.length);
        let randomEncouragement = encourage[randomEncourageIndex];

        res.status(200).send(randomEncouragement)
    }
}