let data = {
    month: null, //в будущем массив студентов
    colorDays: null
};
/*
let data = {
    student: null,
    score: null
};
*/


//TODO Перенести в БД.
// Массив месяцев
//const startStudent
const startCalendar = [
        {
            id: 201802,
            name: 'Февраль',
            days: [
                [0, 0, 0, 0, 0, 0, 1],
                [2, 3, 4, 5, 6, 7, 8],
                [9, 10, 11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20, 21, 22],
                [23, 24, 25, 26, 27, 28, 29],
                [30, 31, 0, 0, 0, 0, 0]
            ]
        },
        {
            id: 201803,
            name: 'Март',
            days: [
                [0, 0, 1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10, 11, 12],
                [13, 14, 15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24, 25, 26],
                [27, 28, 29, 30, 31, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
                    ]
        },
        {
            id: 201804,
            name: 'Апрель',
            days: [
                [0, 0, 0, 0, 0, 1, 2],
                [3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23],
                [24, 25, 26, 27, 28, 29, 30],
                [0, 0, 0, 0, 0, 0, 0]
            ]
        }
    ];

const colorDays = [
{
    monthId: 201802,
        day: 15,
    color: '#cccccc'
},
{
    monthId: 201802,
        day: 15,
    color: '#cccccc'
},
{
    monthId: 201802,
        day: 15,
    color: '#cccccc'
}
];

const getData = () => {
    data.month = startCalendar; //data.students = startStudent;
};












const getActualColor = () => {

    const colorList = {
        red: '#ff9797',
        blue: '#97b7ff',
        yellow: '#fcd116',
        green: '#39e639',
        gray: '#9f9f9f'
    };
    //console.log($('.select').val());
    // console.log(colorList['colorName']);
    return colorList[$('.select').val()];
};

$('.table-calendar .daymonth').on('click', getActualColor)

console.log(getActualColor());
//getActualColor();



















function generateUniqId(clickTime) {
    let uniqId;
    const namberTime = clickTime.toString(36);
    const randomNamber = Math.round(Math.random() * 100, 0);

    uniqId = randomNamber + namberTime;

    return uniqId;
}

function saveData() {
    //сохранение в базу данных
    return false;
}

function displaySaveUrl(uniqId) {
    if (window.location.href.search('id=') > -1) {
        return
    }
    const newUrl = window.location.href + '?id=' + uniqId;
    window.history.replaceState(null, null, newUrl);
    document.querySelector('.inputtext').innerHTML = newUrl;
}

function saveСhangorg() {
    //сохранить данные в базу данных
    //сгенирировать уникальный адрес для сохраненного дневника
    const id = generateUniqId(Date.now());
    //вывести уникакальный адрес в popup
    displaySaveUrl(id);
}

const createSingleMonths = (monthInfoData, templateMonth) => {
    templateMonth.setAttribute('data-month-id', monthInfoData.id);
    templateMonth.querySelector('.monthname').innerHTML = monthInfoData.name;
    let arrDays = templateMonth.querySelectorAll('.table-calendar .daymonth');//получаем массив ячеек для дат
    let dayNumber = 0;

    for (let i = 0; i < monthInfoData.days.length; i++) {// для каждой недели
        const currentWeek = monthInfoData.days[i];
        for (let j = 0; j < currentWeek.length; j++) {// для каждого дня недели

            arrDays[dayNumber].innerHTML = currentWeek[j];
            dayNumber = dayNumber + 1;
        }
    }
    return templateMonth; //DOM Node
};

const deleteMonth = (event) => {

    let monthList = data.month; //TODO Глеб собирался более детально остановиться на const и let
    let deleteMonthId = event.target.closest('.table-calendar').dataset.monthId;
    let newMonthList = [];
    monthList.forEach((item, index) => {
        if (item.id !== parseInt(deleteMonthId)) {
            newMonthList.push(item);
        }
    });
    data.month = newMonthList; //TODO вот тут скорее весго отсылка к новой переменной, тогда скорее всего заполнитсяч и generateMonths(dataCalendar);dataCalendar
    //data.Month = newMonthList;
    generateMonths();
};

function generateMonths(monthList = data.month) {
    const monthTemplate = document.querySelector('._calendarhide .table-calendar'); //Шаблон месяца
    const monthContainer = document.querySelector('.calendar-list .month-wrapper'); //контейнер для месяца

    document.querySelector('.calendar-list .month-wrapper').innerHTML = '';
    monthContainer.innerHTML = '';

    monthList.forEach((item, index) => {
        const singelMonths = createSingleMonths(item, monthTemplate.cloneNode(true)); //Функция собирает карточку на месяца на основании Шаблона и Информации
        $(singelMonths).find('.fa').on('click', deleteMonth);
        //singelMonths.addEventListener('click', deleteMonth); //TODO 38.52
        monthContainer.appendChild(singelMonths);

    });
}

getData();
generateMonths(data.month); //dataCalendar

const generateMonthsWorkRight = (event) => {
    let monthList = data.month;
    const monthContainer = document.querySelector('.calendar-list .month-wrapper');
    const monthTemplate = document.querySelector('._calendarhide .table-calendar');
    const addMonthsWorkRight = event.target.closest('.table-calendar').dataset.monthId;

    monthList.forEach((item, index) => {
        if (item.id === parseInt(addMonthsWorkRight)) {
            const strId = item.id.toString();
            const checkYear = parseInt(strId.substr(0, 4));
            const checkMonth = parseInt(strId.substr(4, 5));
            console.log(checkYear);
            console.log(checkMonth);
            if (checkMonth < 12) {
                if (checkMonth < 10) {
                    idR = (checkYear).toString() + '0' + (checkMonth + 1).toString();
                }
                else {
                    idR = (checkYear).toString() + (checkMonth + 1).toString();
                }
            }
            else {
                idR = (checkYear + 1).toString() + '00';
            }

            monthList[index].id = parseInt(idR);
            console.log(monthList[index].id);
            const newMonth = createSingleMonths(monthList[index], monthTemplate.cloneNode(true));
            monthContainer.insertAdjacentElement('beforeend', (newMonth));
        }
    });
};

//document.querySelector('.addright').addEventListener('click', generateMonthsWorkRight);
document.querySelectorAll('.addright').forEach((value, index) => {
    value.addEventListener('click', generateMonthsWorkRight);
});

const generateMonthsWorkLeft = (event) => {
    let monthList = data.month;
    const monthContainer = document.querySelector('.calendar-list .month-wrapper');
    const monthTemplate = document.querySelector('._calendarhide .table-calendar');
    const addMonthsWorkLeft = event.target.closest('.table-calendar').dataset.monthId;

    monthList.forEach((item, index) => {

        if (item.id === parseInt(addMonthsWorkLeft)) {
            const strId = item.id.toString();
            const checkYear = parseInt(strId.substr(0, 4));
            const checkMonth = parseInt(strId.substr(4, 5));
            console.log(checkYear);
            console.log(checkMonth);
            if (checkMonth > 0) {
                if (checkMonth < 10) {
                    idR = (checkYear).toString() + '0' + (checkMonth - 1).toString();
                }
                else {
                    idR = (checkYear).toString() + (checkMonth - 1).toString();
                }
            }
            else {
                idR = (checkYear - 1).toString() + '12';
            }

            monthList[index].id = parseInt(idR);
            console.log(monthList[index].id);
            const newMonth = createSingleMonths(monthList[index], monthTemplate.cloneNode(true));
            monthContainer.insertAdjacentElement('afterbegin', (newMonth));
        }
    });
};

const submitAddMonthSave = () => {
console.log('submitAddMonthSave');
}; //TODO Скорее всего эта функция мне понадобиться, когда нужно будет сохранять проект. Пока есть некое не срабатываение от on('submit', submitAddMonthSave);

//document.querySelector('.addleft').addEventListener('click', generateMonthsWorkLeft);
document.querySelectorAll('.addleft').forEach((value, index) => {
    value.addEventListener('click', generateMonthsWorkLeft);
});

const addMonthClick = () => {
    popupOpen('.popup-container');
    saveСhangorg();
};

const popupOpen = (popupClass) => {
    //document.querySelector(popupClass).classList.remove('-hidden');
    $('.show').show(800);

};
//TODO Глеб хотел сделать универсальное решение закрытие окон
const closePopup = () => {
    //document.querySelector('.popup-container').classList.add('-hidden');
    $('.show').hide(800);
};

document.querySelector('.share-project .normal-button').onclick = addMonthClick;

//document.querySelector('.popup-container .-exe').onclick = closePopup;
$('.popup-container .-exe').on('click', closePopup);

$('.share-project .normal-button').on('click', submitAddMonthSave);

/*document.querySelector('.table-calendar .fa').addEventListener('click', deleteMonth);
document.querySelectorAll('.table-calendar .fa').forEach((value, index) => {
    value.addEventListener('click', deleteMonth);
});*/

//1.14.15