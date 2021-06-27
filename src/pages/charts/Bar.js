const options2 = {
    animationEnabled: true,
    theme: 'light2',
    title: {
        text: 'Day wise Water Quality Analysis'
    },
    axisX: {
        title: '',
        reversed: true
    },
    axisY: {
        title: 'Monthly Active Users',
        includeZero: true
        //  labelFormatter: this.addSymbols
    },
    data: [
        {
            type: 'bar',
            dataPoints: [
                {y: 2200000000, label: 'Per day supply'},
                {y: 1800000000, label: 'PH'},
                {y: 800000000, label: 'TDS'},
                {y: 563000000, label: 'Pressure'},
                {y: 376000000, label: 'Chlorine'}
            ]
        }
    ]
};
export default options2;
