jQuery(function ($)
{
    var dp;
    if (typeof ($.datepicker) != 'undefined')
    {
        $('#ep_ipo_date').datepicker({
            dateFormat: 'yy-mm-dd', changeYear: true, changeMonth: true
        });
        $('#ep_ipo_date_dp').click(function ()
        {
            if (($('#ui-datepicker-div').is(':visible') && dp == $(this).attr('id')))
            {
                $('#ep_ipo_date').datepicker('hide');
                dp = null;
            }
            else
            {
                $('#ep_ipo_date').datepicker('show');
                dp = $(this).attr('id');
            }
        });

        $("#ep_ipo_date").focusout(function ()
        {
            if (!(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/).test($(this).val()) && $(this).val().length != 0)
            {
                $(this).val('');
            }
        });
    }
});
