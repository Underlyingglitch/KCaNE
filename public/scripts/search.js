$(function(){
    $('#search').on('keyup', function(){
        if ($(this).val().length > 0) {
            var i = 0;
            $.each($('h2'), function(){
                $(this).closest('.col-md-2').hide().filter(function(){
                    return $(this).text().toLowerCase().lastIndexOf($('#search').val().toLowerCase(),0)==0;
                }).show("fast", function(){i++;});
            });
        } else {
            $('h2').closest('.col-md-2').show();
        }
        var total = $('h2').length;
    });
    
});