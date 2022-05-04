import ScrollMagic from 'scrollmagic';

export const initScrollMagicHome = () => {
    var signUpButtonController = new ScrollMagic.Controller();
    var signUpButton = new ScrollMagic.Scene({
            triggerElement: '#signUpButton',
            offset: -200
        })        
        .setClassToggle('#signUpButton', 'shift')
        .addTo(signUpButtonController);
    var mobileEuroController = new ScrollMagic.Controller();
    var mobileEuro = new ScrollMagic.Scene({
            triggerElement: '#signUpButton',
            offset: -200
        })        
        .setClassToggle('#mobileEuro', 'shift')
        .addTo(mobileEuroController);
    var pomodoroCardController = new ScrollMagic.Controller();
    var pomodoroCard = new ScrollMagic.Scene({
            triggerElement: '#pomodoroCard',
            offset: -300
        })        
        .setClassToggle('#pomodoroCard', 'shift')
        .addTo(pomodoroCardController);
    var markdownCardController = new ScrollMagic.Controller();
    var markdownCard = new ScrollMagic.Scene({
            triggerElement: '#markdownCard',
            offset: -300
        })        
        .setClassToggle('#markdownCard', 'shift')
        .addTo(markdownCardController);
    var drumCalcCardController = new ScrollMagic.Controller();
    var drumCalcCard = new ScrollMagic.Scene({
            triggerElement: '#drumCalcCard',
            offset: -300
        })        
        .setClassToggle('#drumCalcCard', 'shift')
        .addTo(drumCalcCardController);
    var todoCardController = new ScrollMagic.Controller();
    var todoCard = new ScrollMagic.Scene({
            triggerElement: '#todoCard',
            offset: -300
        })        
        .setClassToggle('#todoCard', 'shift')
        .addTo(todoCardController);
}

export const initScrollMagicHeader = () => {
    var heroLeftController = new ScrollMagic.Controller();
    var heroLeft = new ScrollMagic.Scene({
            triggerElement: '#heroLeft',
            offset: -300,
            duration: 500
        })        
        .setClassToggle('#heroLeft', 'show')
        .addTo(heroLeftController);
    var heroRightController = new ScrollMagic.Controller();
    var heroRight = new ScrollMagic.Scene({
            triggerElement: '#heroLeft',
            offset: -300,
            duration: 500
        })        
        .setClassToggle('#heroRight', 'show')
        .addTo(heroRightController);
    var heroTextController = new ScrollMagic.Controller();
    var heroText = new ScrollMagic.Scene({
            triggerElement: '#heroLeft',
            offset: -300,
            duration: 500
        })        
        .setClassToggle('#heroText', 'show')
        .addTo(heroTextController);
    var redRowController = new ScrollMagic.Controller();
    var redRow = new ScrollMagic.Scene({
            triggerElement: '#heroLeft',
            offset: -300,
            duration: 500
        })        
        .setClassToggle('#redRow', 'show')
        .addTo(redRowController);
}

export const initScrollMagicTransaction = () => {
    var transactionImageController = new ScrollMagic.Controller();
    var transactionImage = new ScrollMagic.Scene({
            triggerElement: '#transactionImage',
            offset: 0
        })        
        .setClassToggle('#transactionImage', 'show')
        .addTo(transactionImageController);
    var transactionTextController = new ScrollMagic.Controller();
    var transactionText = new ScrollMagic.Scene({
            triggerElement: '#transactionText',
            offset: 50
        })        
        .setClassToggle('#transactionText', 'show')
        .addTo(transactionTextController);
}

export const clearScrollMagic = () => {
    clearScrollMagicHome();
    clearScrollMagicTransaction();
}

const clearScrollMagicHome = () => {
    var signUpButtonController = null;
    var signUpButton = null;
    var mobileEuroController = null;
    var mobileEuro = null;
}

const clearScrollMagicTransaction = () => {
    var transactionImageController = null;
    var transactionImage = null;
}