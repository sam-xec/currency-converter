// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_wXtkGes3MCFK3GVN7BcNlyO3ISPfLMoITzDfX0mn&currencies=EUR%2CUSD%2CCAD&base_currency=CAD
const fromOptions = document.querySelector('#from-options')
const toOptions = document.querySelector('#to-options')
const fromInput = document.querySelector('#from')
const toInput = document.querySelector('#to')
const swapBtn = document.querySelector('.swap')

const currencies = [
    "USD", // United States Dollar
    "EUR", // Euro
    "JPY", // Japanese Yen
    "GBP", // British Pound Sterling
    "AUD", // Australian Dollar
    "CAD", // Canadian Dollar
    "CHF", // Swiss Franc
    "CNY", // Chinese Yuan
    "SEK", // Swedish Krona
    "NZD", // New Zealand Dollar
    "MXN", // Mexican Peso
    "SGD", // Singapore Dollar
    "HKD", // Hong Kong Dollar
    "NOK", // Norwegian Krone
    "KRW", // South Korean Won
    "TRY", // Turkish Lira
    "RUB", // Russian Ruble
    "INR", // Indian Rupee
    "BRL", // Brazilian Real
    "ZAR", // South African Rand
    "DKK", // Danish Krone
    "PLN", // Polish Zloty
    "TWD", // Taiwan New Dollar
    "THB", // Thai Baht
    "IDR", // Indonesian Rupiah
    "HUF", // Hungarian Forint
    "CZK", // Czech Koruna
    "ILS", // Israeli New Shekel
    "CLP", // Chilean Peso
    "PHP", // Philippine Peso
    "AED", // United Arab Emirates Dirham
    "COP", // Colombian Peso
    "SAR", // Saudi Riyal
    "MYR", // Malaysian Ringgit
    "RON", // Romanian Leu
    "EGP", // Egyptian Pound
    "NGN", // Nigerian Naira
    "ISK", // Icelandic Krona
    "QAR", // Qatari Riyal
    "KZT", // Kazakhstani Tenge
    "BDT", // Bangladeshi Taka
    "LKR", // Sri Lankan Rupee
    "MMK", // Myanmar Kyat
    "VND", // Vietnamese Dong
    "UAH", // Ukrainian Hryvnia
    "JOD", // Jordanian Dinar
    "BGN", // Bulgarian Lev
    "MAD", // Moroccan Dirham
    "IRR", // Iranian Rial
    "DZD", // Algerian Dinar
    "OMR", // Omani Rial
    "ANG", // Netherlands Antillean Guilder
    "BYN", // Belarusian Ruble
    "BHD", // Bahraini Dinar
    "UZS", // Uzbekistan Som
    "KWD", // Kuwaiti Dinar
    "IQD", // Iraqi Dinar
    "LYD", // Libyan Dinar
    "RSD", // Serbian Dinar
    "MNT", // Mongolian Tugrik
    "NPR", // Nepalese Rupee
    "AMD", // Armenian Dram
    "MKD", // Macedonian Denar
    "CUP", // Cuban Peso
    "GHS", // Ghanaian Cedi
    "PEN", // Peruvian Sol
    "UYU", // Uruguayan Peso
    "ETB", // Ethiopian Birr
    "CRC", // Costa Rican Colón
    "TZS", // Tanzanian Shilling
    "ZMW", // Zambian Kwacha
    "AZN", // Azerbaijani Manat
    "MDL", // Moldovan Leu
    "KHR", // Cambodian Riel
    "KGS", // Kyrgyzstani Som
    "MVR", // Maldivian Rufiyaa
    "LBP", // Lebanese Pound
    "BWP", // Botswanan Pula
    "YER", // Yemeni Rial
    "MGA", // Malagasy Ariary
    "AFN", // Afghan Afghani
    "UZS", // Uzbekistani Som
    "LAK", // Laotian Kip
    "SYP", // Syrian Pound
    "HTG", // Haitian Gourde
    "BZD"  // Belize Dollar
  ];

  currencies.forEach((currency) => {
    fromOptions.innerHTML += ` <option value="${currency}">${currency}</option>`
    toOptions.innerHTML += `<option value="${currency}">${currency}</option>`
    })

async function fetchCurrencyInfo(from,to,value){
    try{
 let res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_wXtkGes3MCFK3GVN7BcNlyO3ISPfLMoITzDfX0mn&currencies=${to}&base_currency=${from}`);
 if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
 let data = await res.json();
 let rate = data['data'];
 let finalRate = rate[to]*value;
 toInput.value = finalRate
    }
    catch
        (error) {
            console.error('error fething data', error)
    }

}

swapBtn.addEventListener('click',()=>{
   let tempOpt = fromOptions.value
   fromOptions.value = toOptions.value
   toOptions.value = tempOpt 
   settingValue()
})

function settingValue(){
   let fromVal = fromInput.value
   let fromOptVal = fromOptions.value
   let toOptVal  = toOptions.value
    fetchCurrencyInfo(fromOptVal,toOptVal,fromVal)
}

