function apex_charts_render(_data_value,_data_label,_data_color,_DOM) {
  var options = {
    chart: {
        height: 400,
        type: 'donut',
    },
    series: _data_value,
    labels: _data_label,
    colors: _data_color,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '30px'
            },
            value: {
              show: true,
              fontSize: '30px',
              formatter: function (val) {
                return val + "%";
              }
            }
          }
        }
      }
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '16px',
        height: 30,
        offsetX: 0,
        offsetY: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: false
            },
        }
    }]
  }

  var chart_render = new ApexCharts(
    document.querySelector(_DOM),
    options
  );
  chart_render.render();
}
