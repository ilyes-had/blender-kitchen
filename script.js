document.getElementById('numericInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10); // Truncate to 10 characters if longer
    }
});
document.getElementById('stateSelect').addEventListener('change', function () {
var selectedOption = this.value;
var resultParagraph = document.getElementById('result');

// Clear the previous result
resultParagraph.textContent = "";

// Update result based on the selected option
switch (selectedOption) {
    case 'ادرار : 01':
        resultParagraph.textContent = "800DA";
        break;
    case 'الشلف : 02':
        resultParagraph.textContent = "450DA";
        break;
    case 'الاغواط : 03':
        resultParagraph.textContent = "600DA";
        break;
    case 'ام البواقي : 04':
        resultParagraph.textContent = "350DA";
        break;
    case 'باتنة : 05':
        resultParagraph.textContent = "400DA";
        break;
    case 'بجاية : 06':
        resultParagraph.textContent = "400";
        break;
    case 'بسكرة : 07':
        resultParagraph.textContent = "700";
        break;
    case 'بشار : 08':
        resultParagraph.textContent = "800";
        break;
    case 'البليدة : 09':
        resultParagraph.textContent = "900";
        break;
    case 'البويرة : 10':
        resultParagraph.textContent = "1000";
        break;
    case 'تمنراست : 11':
        resultParagraph.textContent = "1100";
        break;
    case 'تبسة : 12':
        resultParagraph.textContent = "1200";
        break;
    case 'تلمسان : 13':
        resultParagraph.textContent = "1300";
        break;
    case 'تيارت : 14':
        resultParagraph.textContent = "1400";
        break;
    case 'تيزي وزو : 15':
        resultParagraph.textContent = "1500";
        break;
    case 'الجزائر : 16':
        resultParagraph.textContent = "1600";
        break;
    case 'الجلفة : 17':
        resultParagraph.textContent = "1700";
        break;
    case 'جيجل : 18':
        resultParagraph.textContent = "1800";
        break;
    case 'سطيف : 19':
        resultParagraph.textContent = "1900";
        break;
    case 'سعيدة : 20':
        resultParagraph.textContent = "2000";
        break;
    case 'سكيكدة : 21':
        resultParagraph.textContent = "2100";
        break;
    case 'سيدي بلعباس : 22':
        resultParagraph.textContent = "2200";
        break;
    case 'عنابة : 23':
        resultParagraph.textContent = "2300";
        break;
    case 'قالمة : 24':
        resultParagraph.textContent = "2400";
        break;
    case 'قسنطينة : 25':
        resultParagraph.textContent = "2500";
        break;
    case 'المدية : 26':
        resultParagraph.textContent = "2600";
        break;
    case 'مستغانم : 27':
        resultParagraph.textContent = "2700";
        break;
    case 'المسيلة : 28':
        resultParagraph.textContent = "2800";
        break;
    case 'معسكر : 29':
        resultParagraph.textContent = "2900";
        break;
    case 'ورقلة : 30':
        resultParagraph.textContent = "3000";
        break;
    case 'وهران : 31':
        resultParagraph.textContent = "3100";
        break;
    case 'البيض : 32':
        resultParagraph.textContent = "3200";
        break;
    case 'اليزي : 33':
        resultParagraph.textContent = "3300";
        break;
    case 'برج بوعريريج : 34':
        resultParagraph.textContent = "3400";
        break;
    case 'بومرداس : 35':
        resultParagraph.textContent = "3500";
        break;
    case 'الطارف : 36':
        resultParagraph.textContent = "3600";
        break;
    case 'تندوف : 37':
        resultParagraph.textContent = "3700";
        break;
    case 'تيسمسيلت : 38':
        resultParagraph.textContent = "3800";
        break;
    case 'الوادي : 39':
        resultParagraph.textContent = "3900";
        break;
    case 'خنشلة : 40':
        resultParagraph.textContent = "4000";
        break;
    case 'سوق اهراس : 41':
        resultParagraph.textContent = "4100";
        break;
    case 'تيبازة : 42':
        resultParagraph.textContent = "4200";
        break;
    case 'ميلة : 43':
        resultParagraph.textContent = "4300";
        break;
    case 'عين الدفلى : 44':
        resultParagraph.textContent = "4400";
        break;
    case 'النعامة : 45':
        resultParagraph.textContent = "4500";
        break;
    case 'تموشنت : 46':
        resultParagraph.textContent = "4600";
        break;
    case 'غرداية : 47':
        resultParagraph.textContent = "4700";
        break;
    case 'غليزان : 48':
        resultParagraph.textContent = "4800";
        break;
    case 'تيميمون : 49':
        resultParagraph.textContent = "4900";
        break;
    case 'برج باجي مختار : 50':
        resultParagraph.textContent = "5000";
        break;
    case 'اولاد جلال : 51':
        resultParagraph.textContent = "5100";
        break;
    case 'بني عباس : 52':
        resultParagraph.textContent = "5200";
        break;
    case 'ان صالح : 53':
        resultParagraph.textContent = "5300";
        break;
    case 'ان قزام : 54':
        resultParagraph.textContent = "5400";
        break;
    case 'تقرت : 55':
        resultParagraph.textContent = "5500";
        break;
    case 'جانت : 56':
        resultParagraph.textContent = "5600";
        break;
    case 'المغير : 57':
        resultParagraph.textContent = "5700";
        break;
    case 'المنيعة : 58':
        resultParagraph.textContent = "5800";
        break;
    default:
        resultParagraph.textContent = "اختر الولاية";
}
});

document.getElementById('stateSelect').addEventListener('change', updateResult2);
document.getElementById('deliveryOption').addEventListener('change', updateResult2);

function updateResult2() {
var selectedState = document.getElementById('stateSelect').value;
var selectedOption = document.getElementById('deliveryOption').value;
var resultParagraph = document.getElementById('result2');

// Clear the previous result
resultParagraph.textContent = "";

// Determine the price based on the selected option and state
var price = getPrice2(selectedState, selectedOption);

// Display the price
resultParagraph.textContent = price + "DA";
}

function getPrice2(state, option) {
// Logic to determine price based on state and option
if (state === "تموشنت : 46") {
    if (option === "office") {
        return "1000";
    } else if (option === "house") {
        return "1500";
    }
}
// Add more conditions as needed for other states and options
}