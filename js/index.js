const scheduleBg = document.querySelector('.team-schedule');
const maountain1 = document.querySelector('.mountain1');
const maountain2 = document.querySelector('.mountain2');

function mountain1() {
        maountain1.style.display = 'block';
        maountain2.style.display = 'none';
        if (scheduleBg.classList.contains('team-schedule2')) {
            scheduleBg.classList.remove('team-schedule2')
        };
}

function mountain2() {
    scheduleBg.classList.add('team-schedule2')
    maountain1.style.display = 'none';
    maountain2.style.display = 'block'
}