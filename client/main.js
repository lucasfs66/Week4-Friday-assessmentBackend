const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortune')
const ul = document.querySelector('ul')
const add = document.querySelector('#add').value
const addButton = document.querySelector('#addButton')
const randomNum = document.querySelector('#randomNum')
const nameList = document.querySelector('#names')
const agesList = document.querySelector('#age')

console.log(add.textContent)

const getCompliment = () => {
    axios.get("http://localhost:4005/api/compliment/")
        .then(res => {
            const data = res.data;
            
            alert(data);
            createList(data)
    });
};

const getNum = () => {
    axios.get("http://localhost:4005/api/number/")
        .then(res => {
            const data = res.data;
            
            alert(data);
            createList(data)
    });
};

const getName = () => {
    axios.get("http://localhost:4005/api/names/")
        .then(res => {
            const data = res.data;
            
            alert(data);
            createList(data)
    });
};

const getAge = () => {
    axios.get("http://localhost:4005/api/ages/")
        .then(res => {
            const data = res.data;
            
            alert(data);
            createList(data)
    });
};

const getFortune = () => {
    axios.get("http://localhost:4005/api/fortune/")
    .then(res => {
            const data = res.data;
            
            alert(data);
            createList(data)
    });
}

const addCompliment = (event) => {
    
    axios.post("http://localhost:4005/api/newcomplement/", add)
    .then(res => {
        event.preventDefault()
        
        console.log(res)
        

    }).catch(error => {
        console.log('error')
    })
}


const createList = (str) => {
    let li = document.createElement('li')
    

    
    li.textContent = str

    
    ul.appendChild(li)

}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addButton.addEventListener('click', addCompliment)
randomNum.addEventListener('click', getNum)
nameList.addEventListener('click', getName)
agesList.addEventListener('click', getAge)