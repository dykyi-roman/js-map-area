   // a cross reference of area names to text to be shown for each area
    var xref = {
        sector_1: "<b>sector 1</b>sector 1",
        sector_2: "<b>sector 2</b>sector 2",
        sector_3: "<b>sector 3</b>sector 3",
        sector_4: "<b>sector 4</b>sector 4",
        sector_5: "<b>sector 5</b>sector 5",
        sector_6: "<b>sector 6</b>sector 6",
        yellowpepper: "Similar to red peppers, <b>yellow peppers</b> are sometimes sweeter.",
        celery: "<b>Celery</b> is a fascinating vegetable. Being mostly water, it actually takes your body "
            +"more calories to process it than it provides.",
        cucumbers: "<b>Cucumbers</b> are cool.",
        broccoli: "<b>Broccoli</b> is like a forest of goodness in your mouth. And very good for you. "
            +"Eat lots of broccoli!",
        dip: "Everything here is good for you but this one. <b>Don't be a dip!</b>"
    };
    
    var defaultDipTooltip = 'I know you want the dip. But it\'s loaded with saturated fat, just skip it '
        +'and enjoy as many delicious, crisp vegetables as you can eat.';
    
    var image = $('#vegetables');

    image.mapster(
    {
        fillOpacity: 0.2,
        fillColor: "FFFFFF",
        stroke: true,
        strokeColor: "FFFFFF",
        strokeOpacity: 0.8,
        strokeWidth: 0, // not usage
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
        onClick: function (e) {
            var newToolTip = defaultDipTooltip;
            
            // update text depending on area selected
            $('#selections').html(xref[e.key]);
            
            // if Asparagus selected, change the tooltip
            if (e.key === 'asparagus') {
                newToolTip = "OK. I know I have come down on the dip before, but let's be real. "
                    +"Raw asparagus without any of that delicious ranch and onion dressing "
                    +"slathered all over it is not so good.";
            }
            image.mapster('set_options', { 
                areas: [{
                    key: "dip",
                    toolTip: newToolTip
                    }]
                });
        },
        showToolTip: true,
        toolTipClose: ["tooltip-click", "area-click"],
        areas: [
            {
                key: "redpepper",
                fillColor: "ffffff"
            },
            {
                key: "yellowpepper",
                fillColor: "000000"
            },
            {
                key: "carrots",
                fillColor: "000000"
            },
            {
                key: "dip",
                toolTip: defaultDipTooltip
            },
            {
                key: "asparagus",
                strokeColor: "000000"
            }
            ]
    });