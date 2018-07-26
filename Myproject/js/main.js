/**
 * Created by Daniel on 7.7.18.
 */
$(document).ready(function() {
    var selectedItem = $(this).attr('datatype');
    $('.servicesImage').mouseenter(function (){
        $('.services').animate({
            opacity: 1
            }, 2000
        )
    });
    $(document).ready(function() {
        $('.servicesImage').mouseleave(function (){
            $('.services').animate({
                    opacity: 0.7
                }, 1000
            )
        });



    $('.slider').bxSlider({
    auto: true
    });

    });

    $('.burgerMenu').click(function(){
        $('.littleMenu').toggle();
    });

var chechName = function(name){
    if(name.length < 3){
        return false;
    }

    var hasDigits = parseInt(name, 10);
    if(hasDigits) return false;

    var names = name.split(' ');
    if(names.length < 2) return false;

    return true;
};
var checkPhone = function (phone) {
    if(phone.length < 9){
        return false;
    }
    return true
  };
var checkMessage = function (message) {
    if (message.length < 2){return false}
    return true
}

$('#contactForm').submit(function(event, dialog){
    event.preventDefault();
    var errors = [];

    var $nameInput = $(this).find('input[name=name]');
    var inputName = $nameInput.val();
    var isNameValid = chechName(inputName);
    if(!isNameValid){
        errors.push('Name is not valid');
        $nameInput.parent().addClass('has-error');
        alert('Моля въведете валидно име')
    } else {
        $nameInput.parent().removeClass('has-error').addClass('has-success');
    }

    var $phoneInput = $(this).find('input[name=phone]');
    var inputPhone = $phoneInput.val();
    var isPhonevalid = checkPhone(inputPhone)
    if(!isPhonevalid){
        errors.push('Phone is not valid');
        $phoneInput.parent().addClass('has-error');
        alert('Моля въведете валиден телефонен номер')
    } else {
        $phoneInput.parent().removeClass('has-error').addClass('has-success');
    }
    var $messageInput = $('textarea')
    var message = $messageInput.val();
    var isMessagevalid = checkMessage(message)
    if(!isMessagevalid){
        errors.push('Message is not valid');
        $messageInput.parent().addClass('has-error');
        $( "#dialog" ).dialog();
        // alert('Моля въведете Вашето съобщение')
    } else {
        $messageInput.parent().removeClass('has-error').addClass('has-success');
    }


    if(!errors.length) {
        $(this).submit();
    }
    });
    })
// $(window).