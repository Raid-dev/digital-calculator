///////   VARIABLES   ///////

var result = document.getElementById('result')

var calculation_bar = document.getElementById('calculation-bar')

var calculator = document.getElementById('calculator')

var buttons_bar = document.getElementById('buttons')

buttons_bar.style.height = '50px' 

var operation = ""

var index = ""

var equal_used = false

var operation_used = false

var dot_used = false

var paranthesis_used = false

var zero_used_in_empty_bar = false 

var asteriks_count = 0

/////  COLOR VARIABLES  /////
var colors = document.getElementsByClassName('colors')

var equal_sign = document.getElementById('equal-sign')
var result_bar = document.getElementById('result-bar')

var type_1 = document.querySelectorAll(".type-1") 
var type_2 = document.querySelectorAll(".type-2") 
var type_3 = document.querySelectorAll(".type-3") 

var active_color = ""

/////  BTN VARIABLES  /////
var CE_button = document.getElementById('CE-button')

var paranthesis_button = document.getElementById('paranthesis-button')

var percentage_button = document.getElementById('percentage-button')

var divide_button = document.getElementById('divide-button')

var number7_button = document.getElementById('number7-button')

var number8_button = document.getElementById('number8-button')

var number9_button = document.getElementById('number9-button')

var multiply_button = document.getElementById('multiply-button')

var number4_button = document.getElementById('number4-button')

var number5_button = document.getElementById('number5-button')

var number6_button = document.getElementById('number6-button')

var minus_button = document.getElementById('minus-button')

var number1_button = document.getElementById('number1-button')

var number2_button = document.getElementById('number2-button')

var number3_button = document.getElementById('number3-button')

var plus_button = document.getElementById('plus-button')

var dot_button = document.getElementById('dot-button')

var number0_button = document.getElementById('number0-button')

var equal_button = document.getElementById('equal-button')

///////   VARIABLES END   ///////

///////   COLORS START   ///////

colors[0].onclick = function() {
    if(active_color !== "") {
        active_color.style.borderRadius = '50% 10% 75%'
        active_color.style.border = ''
        active_color.style.cssText = ".colors:hover { border-radius: 30%;transition: all 0.5s; }"
    }

    colors[0].style.borderRadius = '30%'
    colors[0].style.border = '3px solid #292c42'

    var _colors = {
        1:'#1a1a28',
        2:'#51c9dc',
        3:'#292c42'
    }

    document.body.style.backgroundColor = '#9dd2e9'

    for (let i = 0; i < type_1.length; i++)
        type_1[i].style.backgroundColor = _colors[1];

    for (let i = 0; i < type_2.length; i++) {
        type_2[i].style.backgroundColor = _colors[2];
        equal_sign.style.color = _colors[2]
    }

    for (let i = 0; i < type_3.length; i++) {
        type_3[i].style.backgroundColor = _colors[3]
        result_bar.style.borderBottomColor = _colors[3]
    }

    active_color = colors[0]
} 

colors[0].click()

colors[1].onclick = function() {
    if (active_color !== "") {
        active_color.style.borderRadius = '50% 10% 75%'
        active_color.style.border = ''
        active_color.style.cssText = ".colors:hover { border-radius: 30%; transition: all 0.5s; }"
    }

    colors[1].style.borderRadius = '30%'
    colors[1].style.border = '3px solid #ef8665'

    var _colors = {
        1:'#ec5559',
        2:'#faa341',
        3:'#ef8665'
    }
    
    document.body.style.backgroundColor = '#f0967a'

    for (let i = 0; i < type_1.length; i++)
        type_1[i].style.backgroundColor = _colors[1];

    for (let i = 0; i < type_2.length; i++) {
        type_2[i].style.backgroundColor = _colors[2];
        equal_sign.style.color = _colors[2]
    }

    for (let i = 0; i < type_3.length; i++) {
        type_3[i].style.backgroundColor = _colors[3]
        result_bar.style.borderBottomColor = _colors[3]
    }

    active_color = colors[1]
}

colors[2].onclick = function() { 
    if (active_color !== "") {
        active_color.style.borderRadius = '50% 10% 75%'
        active_color.style.border = ''
        active_color.style.cssText = ".colors:hover { border-radius: 30%;transition: all 0.5s; }"
    }
  
    colors[2].style.borderRadius = '30%'
    colors[2].style.border = '3px solid #5b7e01'

    var _colors = {
        1:'#113d05',
        2:'#efb137',
        3:'#5b7e01'
    }
    
    document.body.style.backgroundColor = '#f7bf4e'

    for (let i = 0; i < type_1.length; i++)
        type_1[i].style.backgroundColor = _colors[1];

    for (let i = 0; i < type_2.length; i++) {
        type_2[i].style.backgroundColor = _colors[2];
        equal_sign.style.color = _colors[2]
    }

    for (let i = 0; i < type_3.length; i++) {
        type_3[i].style.backgroundColor = _colors[3]
        result_bar.style.borderBottomColor = _colors[3]
    }

    active_color = colors[2]
}

colors[3].onclick = function() {
    if (active_color !== "") {
        active_color.style.borderRadius = '50% 10% 75%'
        active_color.style.border = ''
        active_color.style.cssText = ".colors:hover { border-radius: 30%; transition: all 0.5s; }"
    }

    colors[3].style.borderRadius = '30%'
    colors[3].style.border = '3px solid #5a60a2'

    var _colors = {
        1:'#242a49',
        2:'#d180e9',
        3:'#5a60a2'
    }

    document.body.style.backgroundColor = '#9ea1f9'

    for (let i = 0; i < type_1.length; i++)
        type_1[i].style.backgroundColor = _colors[1];

    for (let i = 0; i < type_2.length; i++) {
        type_2[i].style.backgroundColor = _colors[2];
        equal_sign.style.color = _colors[2]
    }

    for (let i = 0; i < type_3.length; i++) {
        type_3[i].style.backgroundColor = _colors[3]
        result_bar.style.borderBottomColor = _colors[3]
    }

    active_color = colors[3]
}

///////   COLORS END   ///////

///////   BUTTONS START   ///////

/////  CE BTN FUN  /////
CE_button.onclick = function() {
    operation = ""
    calculation_bar.innerHTML = ""
    result.innerHTML = '0'

    equal_used = false
    operation_used = false
    dot_used = false
    paranthesis_used = false
    zero_used_in_empty_bar = false 

    asteriks_count = 0

    if (document.body.clientWidth >= 440) {
        calculation_bar.style.fontSize = '30px'
        result.style.fontSize = '40px'
    }
    else {
        calculation_bar.style.fontSize = document.body.clientWidth / 12 + 'px'
        result.style.fontSize = document.body.clientWidth / 16 + 'px'
    }
}

/////  PARANTHESIS BTN FUN  ///// 
paranthesis_button.onclick = function() {
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    if ((((index !== ')' && index !== '.' && isNaN(index) && result.innerHTML !== "Infinity") || !calculation_bar.innerHTML)) && paranthesis_used == false) {
        calculation_bar.innerHTML += "("
        paranthesis_used = true
    }
    else if (paranthesis_used == true && index !== '(' && !isNaN(index)) {
        calculation_bar.innerHTML += ")"
        paranthesis_used = false
    }
        
    operation_used = true
    
    dot_used = false

    zero_used_in_empty_bar = false
}

/////  PERCENTAGE BTN FUNCTION  ///// 
percentage_button.onclick = function() {
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    if (index == ")" || !isNaN(index))
        calculation_bar.innerHTML = percentage(calculation_bar.innerHTML) 

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  DIVIDE BTN FUN  /////
divide_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = result.innerHTML
        equal_used = false
    }
    
    operation = "/";

    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    if (calculation_bar.innerHTML && isNaN(index) && result.innerHTML !== "Infinity") {
        if (index == '(')
            paranthesis_used = false

        if (index !== ")") {
            while(index !== ")" && isNaN(index)){
                calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
                index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
            }
        }
    }
    else if (!calculation_bar.innerHTML)
        calculation_bar.innerHTML = 0

    calculation_bar.innerHTML += operation

    operation_used = true

    dot_used = false

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  NUMBER 7 BTN FUN  /////
number7_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '7'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '7'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 8 BTN FUN  /////
number8_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '8'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '8'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 9 BTN FUN  /////
number9_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '9'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '9'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  MULTIPLY BTN FUN  /////
multiply_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = result.innerHTML
        equal_used = false
    }

    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    operation = "*";

    if (result.innerHTML !== "Infinity" && index !== "*" && calculation_bar.innerHTML) {
        if (index == '(')
            paranthesis_used = false

        if (index !== ")") {
            while (index !== ")" && isNaN(index)) {
                calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
                index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
            } 
        }
        
        calculation_bar.innerHTML += operation
        asteriks_count = 1
    }
    else if (index == "*" && asteriks_count == 1) {
        calculation_bar.innerHTML += operation
        asteriks_count = 2
    }
    else if (!calculation_bar.innerHTML) {
        calculation_bar.innerHTML = 0
        calculation_bar.innerHTML += operation
        asteriks_count = 1
    }

    operation_used = true

    dot_used = false

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  NUMBER 4 BTN FUN  /////
number4_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '4'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '4'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 5 BTN FUN  /////
number5_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '5'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '5'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 6 BTN FUN  /////
number6_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '6'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '6'

    if (zero_used_in_empty_bar == true) { 
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  MINUS BTN FUN  /////
minus_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = result.innerHTML
        equal_used = false
    }
    
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    operation = "-";

    if (calculation_bar.innerHTML && isNaN(index) && result.innerHTML !== "Infinity") {
        if(index == "(")
            paranthesis_used = false

        if (index !== ")") {
            while (index !== ")" && isNaN(index)) {
                calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
                index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
            } 
        }
    }
    else if (!calculation_bar.innerHTML)
        calculation_bar.innerHTML = 0

    calculation_bar.innerHTML += operation

    operation_used = true

    dot_used = false

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  NUMBER 1 BTN FUN  /////
number1_button .onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '1';
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '1'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 2 BTN FUN  /////
number2_button .onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '2'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '2'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  NUMBER 3 BTN FUN  /////
number3_button .onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = '3'
        equal_used = false
    }
    else
        calculation_bar.innerHTML += '3'

    if (zero_used_in_empty_bar == true) {
        calculation_bar.innerHTML = ''
        zero_used_in_empty_bar = false
    }

    size_check(calculation_bar)
}

/////  PLUS BTN FUN  /////
plus_button.onclick = function() {
    if (equal_used == true) {
        calculation_bar.innerHTML = result.innerHTML
        equal_used = false
    }
    
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    operation = "+";

    if (calculation_bar.innerHTML && isNaN(index) && result.innerHTML !== "Infinity") {
        if (index == "(")
            paranthesis_used = false
        
        if (index !== ")") {
            while(index !== ")" && isNaN(index)){
                calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
                index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
            }
        }
    }
    else if (!calculation_bar.innerHTML)
        calculation_bar.innerHTML = 0 

    calculation_bar.innerHTML += operation

    operation_used = true

    dot_used = false

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  DOT BTN FUN  /////
dot_button.onclick = function() {
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
    operation = '.'

    if (isNaN(index) && operation_used == true && dot_used == false) {
        while(index !== ")" && isNaN(index)){
            calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
            index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
        }

        calculation_bar.innerHTML += operation
    }
    else {
        if (equal_used == true) {
            if (result.innerHTML.includes(operation)) {
                calculation_bar.innerHTML = 0
            }
            else {
                calculation_bar.innerHTML = result.innerHTML
            }
            calculation_bar.innerHTML += '.'
            equal_used = false
            dot_used = true
        }
        else {
            if (!calculation_bar.innerHTML) {
                calculation_bar.innerHTML = 0
                calculation_bar.innerHTML += '.'
            }
            else if (dot_used == false) {
                calculation_bar.innerHTML += '.'
                dot_used = true
            }
        }
    }

    zero_used_in_empty_bar = false

    size_check(calculation_bar)
}

/////  NUMBER 0 BTN FUN  /////
number0_button.onclick = function() {
    if (equal_used == true) {

        calculation_bar.innerHTML = 0

        zero_used_in_empty_bar = true

        equal_used = false
    }

    index == calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

    if (!calculation_bar.innerHTML) {
        calculation_bar.innerHTML += '0'
        zero_used_in_empty_bar = true
    }

    if (zero_used_in_empty_bar == false && index !== ")")
        calculation_bar.innerHTML += '0'

    size_check(calculation_bar)
}

/////  EQUAL BTN FUN  /////
equal_button.onclick = function() {   
    operation = "=";
    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
    
    if(equal_used == false && paranthesis_used == false){  
        if(calculation_bar.innerHTML){

            index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]

            if (isNaN(index) && index !== ")") {
    
                while(index !== ")" && isNaN(index)){

                    calculation_bar.innerHTML = calculation_bar.innerHTML.slice(0,-1) 
    
                    index = calculation_bar.innerHTML[calculation_bar.innerHTML.length - 1]
                }
    
            }

            result.innerHTML = edit(eval(calculation_bar.innerHTML)) 

            if (document.body.clientWidth < 440) {
                if (result.innerHTML.length > 30) {
                    result.style.fontSize = document.body.clientWidth / 27 - 10 + 'px'
                }
                else if (result.innerHTML.length > 20) {
                    result.style.fontSize = document.body.clientWidth / 27 - 8 + 'px'
                }
                else if (result.innerHTML.length > 15) {
                    result.style.fontSize = document.body.clientWidth / 27 - 5 + 'px'
                }
            }
            else {
                if (result.innerHTML.length > 30) {
                    result.style.fontSize = '17px'

                    str.style.margin = '4px 0 0 0'

                    if(result.innerHTML.includes("=")){
                        result = result.innerHTML.replace(result.innerHTML.indexOf("=") + 2, "= '<br>'")
                    }
                }
                else if (result.innerHTML.length > 20) {
                    result.style.fontSize = '21px'
                    str.style.margin = '2px 0 0 0'
                }
                else if (result.innerHTML.length > 15) {
                    result.style.fontSize = '26px'
                    str.style.margin = '30px 0 0 0'
                }
            }

            calculation_bar.innerHTML += operation + result.innerHTML

            size_check(calculation_bar)

            equal_used = true
    
            operation_used = true    
            
            dot_used = false
        }
    }
    else if (!calculation_bar.innerHTML)
        calculation_bar.innerHTML = ""
}

///////   BUTTONS END   ///////

///////   SIDE FUNS START   ///////

/////  EDIT FUN  ///// bugged forever because of JavaScript :(
function edit(a) {
    var str = a.toString()

    if (str.includes(".") && !str.includes("e") && str.substring(str.indexOf("."), str.length).length > 9) {
        while(str.substring(str.indexOf('.'), str.length).length > 6)
            str = str.slice(0, -1)

        while (str[str.length - 1] == '0')
            str = str.slice(0,-1)
    }

    return str
}

/////  PERCENTAGE FUN  /////
function percentage(str) {
    var new_str = str
    var _result
    var i = new_str[new_str.length - 1]
    var status = false
    var count = 0

    if (i == ")") {
        count = 1

        while (i !== "(") {
            new_str = new_str.slice(0, -1)
            count++
            i = new_str[new_str.length - 1]
        }
        
        _result = eval((str.substring((str.length - count), str.length)) + "/100")

        str = new_str + _result + ")"
    }
    else {
        while (status == false) {
            if (!isNaN(i) || i == ".") {
                new_str = new_str.slice(0, -1)
                count++
            }
            else
                status = true
        
            i = new_str[new_str.length - 1]
        }
      
        _result = eval((str.substring((str.length - count), str.length)) + "/100")

        str = new_str + _result
    
        if (str.includes("e"))
            str = "(" + str + ")"
    }

    return str
}

/////  SIZE-CHECK FUN  /////
function size_check(str) {
    if (document.body.clientWidth < 440) {
        if (str.innerHTML.length > 49) {
            str.style.margin = '34px 0 0 0'
            str = str.innerHTML.replace(str.innerHTML.indexOf("="), "= '<br>'")
        }
        else if(str.innerHTML.length > 40) {
            str.style.fontSize = document.body.clientWidth / 22 - 10 + 'px'
            str.style.margin = '30px 0 0 0'

            if(str.innerHTML.includes("="))
                str = str.innerHTML.replace(str.innerHTML.indexOf("="), "= '<br>'")
        }
        else if (str.innerHTML.length > 31) {
            str.style.margin = '28px 0 0 0'
            str.style.fontSize = document.body.clientWidth / 22 - 8 + 'px'
        }
        else if (calculation_bar.innerHTML.length > 22) {
            str.style.margin = '25px 0 0 0'
            str.style.fontSize = document.body.clientWidth / 22 - 5 + 'px'
        }
    }
    else {
        if (str.innerHTML.length > 46) {
            str.style.fontSize = '9px'
            str.style.margin = '8px 0 0 0'
            str = str.innerHTML.replace(str.innerHTML.indexOf("="), "= '<br>'")
        }
        else if (str.innerHTML.length > 37) {
            str.style.fontSize = '12px'
            str.style.margin = '6px 0 0 0'

            if (str.innerHTML.includes("="))
                str = str.innerHTML.replace(str.innerHTML.indexOf("="), "= '<br>'")
        }
        else if (str.innerHTML.length > 30) {
            str.style.fontSize = '16px'
            str.style.margin = '4px 0 0 0'
        }
        else if (calculation_bar.innerHTML.length > 22) {
            str.style.fontSize = '21px'
            str.style.margin = '10px 0 0 0'
        }
    }
}
///////   SIDE FUNS END   ///////

/////  DISPLAY SCREEN SIZES  /////

// document.write(window.innerWidth + " " + window.innerHeight + '</br>')

// document.write(window.outerWidth + " " + window.outerHeight + '</br>')

// document.write(document.body.clientWidth + " " + document.body.clientHeight + '</br>')

//////////////////////////////////
