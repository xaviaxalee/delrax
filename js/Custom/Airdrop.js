    $("#airdrop-form").submit(function (e) {
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