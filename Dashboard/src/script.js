import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { table } from 'table';

const ctx = document.getElementById('barChart');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [6, 10, 12, 13, 17, 21],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('roundChart');
const roundChart = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }]
        },
});

const ctx3 = document.getElementById('radarChart');
const radarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55 ],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      }, 
    options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
    }
});


let datas;
if (localStorage.getItem('datas')) {
    datas = JSON.parse(localStorage.getItem('datas'));
} else {
    datas = [6, 10, 12, 13, 17, 21];
}

localStorage.setItem('datas', JSON.stringify(datas));


let data1 = document.getElementById('data1'),
    data2 = document.getElementById('data2'),
    data3 = document.getElementById('data3'),
    data4 = document.getElementById('data4'),
    data5 = document.getElementById('data5'),
    data6 = document.getElementById('data6')

document.querySelector('.addDatas').addEventListener('click', function(event) {
    datas = [];
    datas.push(data1.value,data2.value,data3.value,data4.value,data5.value,data6.value);
    localStorage.setItem('datas', JSON.stringify(datas));
    data1.value = '';
    data2.value = '';
    data3.value = '';
    data4.value = '';
    data5.value = '';
    data6.value = '';
    location.reload();
  });

barChart.data.datasets[0].data = datas;
roundChart.data.datasets[0].data = datas;
radarChart.data.datasets[0].data = datas;

barChart.update();
roundChart.update();
radarChart.update();


let names;
if (localStorage.getItem('names')) {
    names = JSON.parse(localStorage.getItem('names'));
} else {
    names = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
}

localStorage.setItem('names', JSON.stringify(names));


let name1 = document.getElementById('name1'),
    name2 = document.getElementById('name2'),
    name3 = document.getElementById('name3'),
    name4 = document.getElementById('name4'),
    name5 = document.getElementById('name5'),
    name6 = document.getElementById('name6')

document.querySelector('.addNames').addEventListener('click', function(event) {
    names = [];
    names.push(name1.value,name2.value,name3.value,name4.value,name5.value,name6.value);
    localStorage.setItem('names', JSON.stringify(names));
    name1.value = '';
    name2.value = '';
    name3.value = '';
    name4.value = '';
    name5.value = '';
    name6.value = '';
    location.reload();
  });

barChart.data.labels = names;
roundChart.data.labels = names;
radarChart.data.labels = names;

barChart.update();
roundChart.update();
radarChart.update();

let titleFirst;
if (localStorage.getItem('titleFirst')) {
    titleFirst = JSON.parse(localStorage.getItem('titleFirst'));
} else {
    titleFirst = 'My First Dataset';
}

localStorage.setItem('titleFirst', JSON.stringify(titleFirst));


let title1 = document.getElementById('titleFirst');
    

document.querySelector('.addTitles').addEventListener('click', function(event) {
    titleFirst = "";
    titleFirst = title1.value;
    localStorage.setItem('titleFirst', JSON.stringify(titleFirst));
    title1.value = '';
    location.reload();
  });

  radarChart.data.datasets[0].label = titleFirst;

  radarChart.update();

  let titleSecond;
  if (localStorage.getItem('titleSecond')) {
    titleSecond = JSON.parse(localStorage.getItem('titleSecond'));
  } else {
    titleSecond = 'My Second Dataset';
  }
  
  localStorage.setItem('titleSecond', JSON.stringify(titleSecond));
  
  
  let title2 = document.getElementById('titleSecond');
      
  
  document.querySelector('.addTitles').addEventListener('click', function(event) {
      titleSecond = "";
      titleSecond = title2.value;
      localStorage.setItem('titleSecond', JSON.stringify(titleSecond));
      title2.value = '';
      location.reload();
    });
  
    radarChart.data.datasets[1].label = titleSecond;
  
    radarChart.update();


document.querySelector('.clear').addEventListener('click', function() {
  localStorage.clear();
  location.reload();
  }
);

let rDatas;
if (localStorage.getItem('rDatas')) {
    rDatas = JSON.parse(localStorage.getItem('rDatas'));
} else {
    rDatas = [28, 48, 40, 19, 96, 27];
}

localStorage.setItem('rDatas', JSON.stringify(rDatas));


let rData1 = document.getElementById('rData1'),
    rData2 = document.getElementById('rData2'),
    rData3 = document.getElementById('rData3'),
    rData4 = document.getElementById('rData4'),
    rData5 = document.getElementById('rData5'),
    rData6 = document.getElementById('rData6')

document.querySelector('.addRDatas').addEventListener('click', function(event) {
    rDatas = [];
    rDatas.push(rData1.value,rData2.value,rData3.value,rData4.value,rData5.value,rData6.value);
    localStorage.setItem('rDatas', JSON.stringify(rDatas));
    rData1.value = '';
    rData2.value = '';
    rData3.value = '';
    rData4.value = '';
    rData5.value = '';
    rData6.value = '';
    location.reload();
  });

radarChart.data.datasets[1].data = rDatas;

radarChart.update();


const data = [
    ['0A', '0B', '0C'],
    ['1A', '1B', '1C'],
    ['2A', '2B', '2C'],
  ];

const config = {
columnDefault: {
  width: 10,
},
header: {
  alignment: 'center',
  content: 'THE HEADER\nThis is the table about something',
},
}

console.log(table(data, config));