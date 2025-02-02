// Litepicker
// 
// The date pickers in Material Admin Pro
// are powered by the Litepicker plugin.
// Litepicker is a lightweight, no dependencies
// date picker that allows for date ranges
// and other options. For more usage details
// visit the Litepicker docs.
// 
// Litepicker Documentation
// https://wakirin.github.io/Litepicker
    
window.addEventListener('DOMContentLoaded', event => {

    const litepickerSingleDate = document.getElementById('litepickerSingleDate');
    if (litepickerSingleDate) {
        new Litepicker({
            element: litepickerSingleDate,
            format: 'YYYY/MM/DD'
        });
    }

    const litepickerDateRange = document.getElementById('litepickerDateRange');
    if (litepickerDateRange) {
        new Litepicker({
            element: litepickerDateRange,
            singleMode: false,
            format: 'YYYY/MM/DD'
        });
    }

    const litepickerDateRange2Months = document.getElementById('litepickerDateRange2Months');
    if (litepickerDateRange2Months) {
        new Litepicker({
            element: litepickerDateRange2Months,
            singleMode: false,
            numberOfMonths: 2,
            numberOfColumns: 2,
            format: 'YYYY/MM/DD'
        });
    }
    
    const litepickerBillDate = document.getElementById('litepickerBillDate');
    if (litepickerBillDate) {
        new Litepicker({
            element: litepickerBillDate,
            format: 'YYYY/MM/DD'
        });
    }
    
    const litepickerBillDueDate = document.getElementById('litepickerBillDueDate');
    if (litepickerBillDueDate) {
        new Litepicker({
            element: litepickerBillDueDate,
            format: 'YYYY/MM/DD'
        });
    }
});
