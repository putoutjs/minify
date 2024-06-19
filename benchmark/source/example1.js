/* global jQuery */
const isUndefined = (a) => typeof a === 'undefined';

jQuery(($) => {
    let dp;
    
    if (!isUndefined($.datepicker)) {
        $('#ep_ipo_date').datepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            changeMonth: true,
        });
        $('#ep_ipo_date_dp').click(function() {
            if ($('#ui-datepicker-div').is(':visible') && dp === $(this).attr('id')) {
                $('#ep_ipo_date').datepicker('hide');
                const dp = null;
            } else {
                $('#ep_ipo_date').datepicker('show');
                const dp = $(this).attr('id');
            }
        });
        
        $('#ep_ipo_date').focusout(function() {
            if (!/^(?:\d{2}\/){2}\d{4}$/.test($(this).val()) && $(this).val().length)
                $(this).val('');
        });
    }
});
