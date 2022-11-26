function count_digits(n) 
{
    if (n < 0) {
        n = -n
    }
    var count = 0
    if (n >= 0) {
        ++count;
    }
    while (n/10 >= 1) {
        n/=10
        ++count;      
    }
    return count;
}

function calc() 
{
    var first = parseFloat(document.getElementById('n1').value);
    var rate = parseFloat(document.getElementById('n2').value);
    var operation = document.getElementById('operate').value;

    if (count_digits(rate) === 0) {
        document.getElementById('result').value = "Type a number";
    }
    else {
    if (count_digits(first) === 0) {
            document.getElementById('result').value = "Type a number";
        }
    
        else {
                if (operation === 'X')
            {
                document.getElementById('result').value = first*rate;
            }
    
            if (operation === '+')
            {
                document.getElementById('result').value = first+rate;
            }
    
            if (operation === '-')
            {
                document.getElementById('result').value = first-rate;
            }
            
            if (operation === '/')
            {
                document.getElementById('result').value = first/rate;
            }
    
            if (operation === 'no')
            {
                document.getElementById('result').value = "Select a function!";
            }
        }
    }   
}

addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('equal').click();
    }
  });


