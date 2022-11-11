const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const motivateBtn = document.getElementById('motivationButton')
const loveBtn = document.getElementById('loveButton')
const encourageBtn = document.getElementById('encourageButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data2 = res.data;
            alert(data2);
        });
};

fortuneBtn.addEventListener('click', getFortune)

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data3 = res.data;
            alert(data3);
        });
};

motivateBtn.addEventListener('click', getMotivation)

const getLove = () => {
    axios.get("http://localhost:4000/api/love/")
    .then(res => {
        const data4 = res.data;
        alert(data4)
    });
};

loveBtn.addEventListener('click', getLove)

const getEncouraged = () => {
    axios.get("http://localhost:4000/api/encourage/")
    .then(res => {
        const data5 = res.data;
        alert(data5)
    });
};

encourageBtn.addEventListener('click', getEncouraged)