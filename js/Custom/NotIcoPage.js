$(document).ready(function () {

    //var ICODate = new Date("June 1, 2018 12:00:00 PM +0");
    //$('#timer').countdown({ until: ICODate });

    $.extend($.gritter.options, {
        position: 'bottom-right'
    });

    $.gritter.add({
        title: "<span class='success-title' style='color: #e5603b;font-weight: bold;'>Applications for the Airdrop have concluded!</span>",
        text: "<span style='color: #e5603b;'>Thank you for your support! We will be reviewing all the submissions and will notify you of your status after completion</span>",
        sticky: true
    });

   

    var coins_chart = $("#ico-coins")[0].getContext('2d');

    var myChartCoins = new Chart(coins_chart,
        {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [33.3, 20, 40,6.7],
                        backgroundColor: [
                            '#8B008B',
                            '#CD00CD',
                            '#EE00EE',
                            '#FF00FF'
                           
                        ],
                        hoverBackgroundColor: [
                            '#FFBBFF ',
                            '#EEAEEE ',
                            '#CD96CD ',
                            '#8B668B'
                        ],
                        hoverBorderColor: [
                            'red',
                            '#B03060',
                            '#8B008B',
                            '#FF00FF'
                        ],
                        borderWidth: 0,
                        hoverBorderWidth: 3
                    }
                ],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'ICO',
                    'Shareholders',
                    'Company Reserve',
                    'Airdrop'
                ]

            
            },
            options: {
                cutoutPercentage: 30
            },
            title: {
                padding: 30
            },
            fullWidth: true
        });


    /*$("#airdrop-form").submit(function (e) {
        e.preventDefault();
        console.log("disable");
        $("#airdrop-form button[type=submit]").prop("disabled", true);
        $.post('/Home/AirDrop',
            $('#airdrop-form').serialize(),
            function (response) {
                var obj = jQuery.parseJSON(response);

                var error = true;

                $('#email-error').hide();
                $('#twitter-error').hide();
                $('#telegram-error').hide();

                var email = obj.Email;
                var twitter = obj.Twitter;
                var telegram = obj.Telegram;

                if (email === 'undefined' && twitter === 'undefined' && telegram === 'undefined') {
                    error = false;
                }

                if (obj.Title === "Success") {
                    error = false;

                    $.gritter.add({
                        title: "<span class='success-title'>" + obj.Title + "!</span>",
                        text: obj.Message,
                        sticky: true
                    });
                }
                else if (error) {
                    if (!email) {
                        $('#email-error').show();
                    }
                    if (!twitter) {
                        $('#twitter-error').show();
                    }
                    if (!telegram) {
                        $('#telegram-error').show();
                    }
                }
                else {
                    $.gritter.add({
                        title: "<span class='failed-title'>" + obj.Title + "!</span>",
                        text: obj.Message
                    });
                }

                //reset fields
                if (!error) {
                    $('#airDropModal').modal('hide');

                    $("#email").val("");
                    $("#twitterHandle").val("");
                    $("#telegramUsername").val("");

                    $('#email-error').hide();
                    $('#twitter-error').hide();
                    $('#telegram-error').hide();
                }
                console.log("enable");
                $("#airdrop-form button[type=submit]").prop("disabled", false);
            });
    });*/

    $("#subscribe-form").submit(function (e) {
        e.preventDefault();
        console.log("disable");
        $("#subscribe-form button[type=submit]").prop("disabled", true);
        $.post('/Home/Subscribe',
            $('#subscribe-form').serialize(),
            function (response) {

                var obj = jQuery.parseJSON(response);
                var error = true;

                $('#subscribe-email-error').hide();

                var email = obj.Email;

                if (email === 'undefined') {
                    error = false;
                }

                if (obj.Title === "Success") {
                    error = false;

                    $.gritter.add({
                        title: "<span class='success-title'>" + obj.Title + "!</span>",
                        text: obj.Message,
                        sticky: true
                    });
                }
                else if (error) {
                    if (!email) {
                        $('#subscribe-email-error').show();
                    }
                }
                else {
                    $.gritter.add({
                        title: "<span class='failed-title'>" + obj.Title + "!</span>",
                        text: obj.Message
                    });
                }

                //reset fields
                if (!error) {
                    $('#subscribeModal').modal('hide');
                    $("#email").val("");
                    $('#email-error').hide();
                }
                console.log("enable");
                $("#subscribe-form button[type=submit]").prop("disabled", false);
            });
    });
});