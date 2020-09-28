// import mydata from "./test.json";
  // const mydata = import("http://127.0.0.1:5500/test.json")
//   import mydata from "http://127.0.0.1:5500/test.json"
// console.log(mydata)

  Highcharts.chart("container", {
    chart: {
      // type:line,
      width: 1400,
      backgroundColor: {
        // linearGradient: [0, 0, 250, 500],
        // stops: [
        //   [0, "rgb(48, 96, 48)"],
        //   [1, "rgb(0, 0, 0)"],
        // ],
      },
    },
    title: false,
    exporting: false,

    // {
    //   text: "Solar Employment Growth by Sector, 2010-2016",
    // },
    //
    // subtitle: {
    //   text: "Source: thesolarfoundation.com",
    // },

    yAxis: {
      title: {
        text: "Number of Employees",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  Highcharts.chart("container3", {
    chart: {
      plotBackgroundColor: "white",
      plotBorderWidth: 0,
      plotShadow: false,
      // height: 200,
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Browser<br>shares<br>2017",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        innerSize: "50%",
        // data: mydata
      },
    ],
  });
  Highcharts.chart("container1", {
    chart: {
      plotBackgroundColor: "white",
      plotBorderWidth: 0,
      plotShadow: false,
      // height: 200,
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Browser<br>shares<br>2017",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        innerSize: "50%",
        data: [
          ["Chrome", 58.9],
          ["Firefox", 13.29],
          ["Internet Explorer", 13],
          ["Edge", 3.78],
          ["Safari", 3.42],
          {
            name: "Other",
            y: 7.61,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    ],
  });
  Highcharts.chart("container2", {
    chart: {
      plotBackgroundColor: "white",
      plotBorderWidth: 0,
      plotShadow: false,
      // height: 200,
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Browser<br>shares<br>2017",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        innerSize: "50%",
        data: [
          ["Chrome", 58.9],
          ["Firefox", 13.29],
          ["Internet Explorer", 13],
          ["Edge", 3.78],
          ["Safari", 3.42],
          {
            name: "Other",
            y: 7.61,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    ],
  });
