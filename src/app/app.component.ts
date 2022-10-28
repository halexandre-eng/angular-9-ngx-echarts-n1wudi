import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  options: any;
  options2: any;

  ngOnInit(): void {
    this.options = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: [
        {
          type: 'category',
          gridIndex: 0,
          data: [
            '202101',
            '202102',
            '202103',
            '202104',
            '202105',
            '202106',
            '202107',
          ],
        },
        {
          type: 'category',
          gridIndex: 1,
          data: ['Média AGP 21', 'Média AGP 22'],
        },
        {
          type: 'category',
          gridIndex: 2,
          data: ['Média ExAgro 22', 'Média ExAgro 2022'],
        },
      ],
      yAxis: [
        { gridIndex: 0, show: false },
        { gridIndex: 1, show: false },
        { gridIndex: 2, show: false, min: 1320 },
      ],
      grid: [{ right: '50%' }, { left: '70%', right: '45%' }, { left: '75%' }],
      series: [
        // These series are in the first grid.
        {
          name: 'CSC',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [320, 332, 301, 334, 390, 330, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'N1',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [120, 132, 101, 134, 90, 230, 210],
          label: {
            show: true,
          },
        },
        {
          name: 'N2',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: true,
          },
        },
        {
          name: 'N3',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: true,
          },
        },
        {
          name: 'N4',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: true,
          },
        },
        {
          name: 'Total',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          stack: 'atuacao',
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: true,
          },
        },
        // These series are in the second grid.
        {
          name: 'CSC',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },
        {
          name: 'N1',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },
        {
          name: 'N2',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },
        {
          name: 'N3',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },
        {
          name: 'N4',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },
        {
          name: 'Total',
          type: 'line',
          xAxisIndex: 1,
          yAxisIndex: 1,
          stack: 'media',
          data: [220, 220],
          label: {
            show: true,
          },
        },

        // These series are in the third grid.
        {
          name: 'CSC',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'N1',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'N2',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'N3',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'N4',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
        {
          name: 'Total',
          type: 'line',
          xAxisIndex: 2,
          yAxisIndex: 2,
          stack: 'media',
          data: [320, 320],
          label: {
            show: true,
          },
        },
      ],
    };

    this.options2 = {};
  }
}
