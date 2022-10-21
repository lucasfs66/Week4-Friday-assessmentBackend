

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        console.log(compliments)
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        return
    },
    getNum: (req, res) => {
        
        const numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
       
        // choose random compliment
        let Index = Math.floor(Math.random() * numberArr.length);
        let number = numberArr[Index];
      
        res.status(200).send(number);  
        return
    },
    getName: (req, res) => {
        const nameArr = ["Marcos", "Mario", "Gabriel"];
        
        // choose random compliment
        let Index = Math.floor(Math.random() * nameArr.length);
        let name = nameArr[Index];
      
        res.status(200).send(name);    
        return
      
        
    },
    getAge: (req, res) => {
        
        const ageArr = ["23", "24", "25"];
        
        // choose random compliment
        let Index = Math.floor(Math.random() * ageArr.length);
        let age = ageArr[Index];
      
        res.status(200).send(age); 
        return 
    },
    getFortune: (req, res) => {
        const fortune = ['You will make a new friend', 'Your road to glory will be rocky, but fulfilling.', 'Courage is not simply one of the virtues, but the form of every virtue at the testing point.', 'Patience is your alley at the moment. Do not worry!', 'Nothing is impossible to a willing heart.']
    
        let Index = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[Index];
      
        res.status(200).send(randomFortune);        
    },
    addCompliment: (req, res) => {
        let {add} = req.body

        compliments.push(add)
    }

}