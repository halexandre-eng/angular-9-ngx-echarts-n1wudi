import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;
  options2: any;

  ngOnInit(): void {

    this.options = {
      xAxis: {
        splitLine: {
          show: false
        }
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          type: 'scatter'
        }
      ]
    };

    this.options2 = {
      
      xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: [0, 15],
        splitLine: {
          show: false
        }
      },
      yAxis: {
        max: 10,
        show: false,
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          color: '#B1D8B7',
          showSymbol: false,
          stack: 'Total',
          data: [0, 8],
          type: 'line',
          areaStyle: {}
        },
        {
          color: '#05445E',
          showSymbol: false,
          stack: 'Total',
          data: [0, 2],
          type: 'line',
          areaStyle: {}
        }
      ]
    };

  }
}
