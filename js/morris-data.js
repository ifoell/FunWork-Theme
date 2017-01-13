$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
<<<<<<< HEAD
            period: '2016 Q1',
=======
            period: '2010 Q1',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
<<<<<<< HEAD
            period: '2016 Q2',
=======
            period: '2010 Q2',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
<<<<<<< HEAD
            period: '2016 Q3',
=======
            period: '2010 Q3',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
<<<<<<< HEAD
            period: '2016 Q4',
=======
            period: '2010 Q4',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
<<<<<<< HEAD
            period: '2016 Q5',
=======
            period: '2011 Q1',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
<<<<<<< HEAD
            period: '2016 Q6',
=======
            period: '2011 Q2',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
<<<<<<< HEAD
            period: '2016 Q7',
=======
            period: '2011 Q3',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
<<<<<<< HEAD
            period: '2016 Q8',
=======
            period: '2011 Q4',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
<<<<<<< HEAD
            period: '2016 Q9',
=======
            period: '2012 Q1',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
<<<<<<< HEAD
            period: '2016 Q10',
=======
            period: '2012 Q2',
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
<<<<<<< HEAD
=======
/*
    Morris.Area({
        element: 'morris-line-chart',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
    });
*/
>>>>>>> 8eb9f97937ae31a3de69deb8a4311d85060c0ecd
});
