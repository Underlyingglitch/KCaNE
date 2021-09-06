$(function(){
    $('#search').on('keyup', function(){
        if ($(this).val().length > 0) {
            $.each($('h2'), function(){
                $(this).closest('.col-md-2').hide().filter(function(){
                    return $(this).text().toLowerCase().lastIndexOf($('#search').val().toLowerCase(),0)==0;
                }).show();
            });
        } else {
            $('h2').closest('.col-md-2').show();
        }
    });
    
});