$(document).ready(function(){
    let currentInput = '';
    let result = 0;

    function updateResult(value){
        $(".result p").text(value || '0');
    }

    $('button').click(function(){
        const buttonText = $(this).text();

        if ($.isNumeric(buttonText) || buttonText === '.') {
            if (buttonText === '.' && currentInput.includes('.')) return;
            currentInput += buttonText;
        } 
        else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (currentInput === '' || ['+', '-', '*', '/'].includes(currentInput.trim().slice(-1))) {
                return;
            }
            currentInput += ' ' + buttonText + ' ';
        } 
        else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0,-1);
        } 
        else if (buttonText === 'RESET') {
            currentInput = '';
        } 
        else if (buttonText === '=') {
            try {
                result = eval(currentInput);
                currentInput = result.toString();
            } catch {
                currentInput = 'Error';
            }
        }

        updateResult(currentInput);
    });

    updateResult();
});
