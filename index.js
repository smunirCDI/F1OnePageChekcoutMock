let shipping={
    firstName: '',
    lastName: '',
    inputEmail: '',
    inputEmailConfirm: '',
    adress: '',
    city: '',
    province: '',
    method: '',
    billingAdress: '',
    billingCity: '',
    billingProvince: '',
    cardType: 'visa',
    cardNumber: '',
    cvvNumber: '',
    month:''
}
function selectCardType(type){
    // console.log(type)
    if(type === 'visa'){
        const visaEl = document.getElementById('visa');
        const visaCheck = document.getElementById('visaCheck');
        const payPalCheck = document.getElementById('payPalCheck');
        const payPalEl = document.getElementById('payPal');
        visaEl.className = 'cstmSelect selected';
        payPalEl.className = 'cstmSelect';
        visaCheck.innerHTML='<i class="fas fa-check"></i>'
        payPalCheck.innerHTML=''
        shipping={...shipping, cardType: 'visa'}

    }
    if(type === 'payPal'){
        const visaEl = document.getElementById('visa');
        const payPalEl = document.getElementById('payPal');
        const visaCheck = document.getElementById('visaCheck');
        const payPalCheck = document.getElementById('payPalCheck');
        visaEl.className = 'cstmSelect';
        payPalEl.className = 'cstmSelect selected';
        payPalCheck.innerHTML='<i class="fas fa-check"></i>'
        visaCheck.innerHTML=''
        shipping={...shipping, cardType: 'payPal'}
    }
}
function showBilling(id){
    const paymentDetail = document.getElementById('paymentDetail')

    console.log(id.checked)
    const billingForm = document.getElementById('billingAddress')
    if(!id.checked){
        billingForm.className =''
        paymentDetail.classList.add('disabled')
        
    }else{
        billingForm.className ='hidden'
        paymentDetail.classList.remove('disabled')

    }
}

function handleinput(type,id, val){
    // console.log(e)
    // console.log('somehting?')
    if(type === 'shippingAdd'){
        shipping={...shipping, [id]: val}
        // console.log(shipping)
        if(shipping.firstName !=='' && 
        shipping.lastName !=='' &&
        shipping.inputEmail !=='' &&
        shipping.inputEmailConfirm !=='' &&
        shipping.adress !=='' &&
        shipping.city !=='' &&
        shipping.province !==''
        ){
            // console.log('good to go!!')
            const shippingMethod = document.getElementById('shippingMethod')
            shippingMethod.classList.remove('disabled')
        }else{
            const shippingMethod = document.getElementById('shippingMethod')
            shippingMethod.classList.add('disabled')
        }
    }
    if(type === 'shippingMeth'){
        shipping={...shipping, [id]: val}
        if(shipping.method !==''){
            const billingAddress1 = document.getElementById('billingAddress1')
            billingAddress1.classList.remove('disabled')
            const billingChecked = document.getElementById('billingChecked')
            
            // console.log(billingChecked.checked)
            const paymentDetail = document.getElementById('paymentDetail')
            if(billingChecked.checked){
                paymentDetail.classList.remove('disabled')
            }else{
                paymentDetail.classList.add('disabled')
            }
        }

    }
    if(type === 'billingAdd'){
        shipping={...shipping, [id]: val}
        const paymentDetail = document.getElementById('paymentDetail')
        if(shipping. billingAdress !== '' && 
        shipping.billingCity !== '' && 
        shipping.billingProvince !== '' 
        ){
            paymentDetail.classList.remove('disabled')
        }else {
            paymentDetail.classList.add('disabled')
        }
    }
    if(type === 'paymentInfo'){
        shipping={...shipping, [id]: val}
        const submitBtn = document.getElementById('submitBtn')
        if(shipping.cardNumber !=='' && 
        shipping.cvvNumber !=='' &&
        shipping.month !==''
        ){
            submitBtn.disabled =false
            submitBtn.classList.remove('inactive')
        }else{
            submitBtn.disabled =true
            submitBtn.classList.add('inactive')
        }
    //     cardNumber: '',
    // cvvNumber: '',
    // month:''
    }
}
function selectCardType(type){
    console.log(type)
    if(type === 'visa'){
        const visaEl = document.getElementById('visa');
        const visaCheck = document.getElementById('visaCheck');
        const payPalCheck = document.getElementById('payPalCheck');
        const payPalEl = document.getElementById('payPal');
        visaEl.className = 'cstmSelect selected';
        payPalEl.className = 'cstmSelect';
        visaCheck.innerHTML='<i class="fas fa-check"></i>'
        payPalCheck.innerHTML=''
    }
    if(type === 'payPal'){
        const visaEl = document.getElementById('visa');
        const payPalEl = document.getElementById('payPal');
        const visaCheck = document.getElementById('visaCheck');
        const payPalCheck = document.getElementById('payPalCheck');
        visaEl.className = 'cstmSelect';
        payPalEl.className = 'cstmSelect selected';
        payPalCheck.innerHTML='<i class="fas fa-check"></i>'
        visaCheck.innerHTML=''
    }
}