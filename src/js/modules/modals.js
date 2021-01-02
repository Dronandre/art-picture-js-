const modals = () => {
    //Создаем функцию для модалок
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();
        //Работаем с триггером для отображения модалки
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                //Закрываем лишнии модалки
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                //Отображаем модалку на странице
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        //Закрываем модалку на кнопку
        close.addEventListener('click', ()=> {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;

        });
        //Закрываем модалку на подложку
        modal.addEventListener('click', (e)=> {
            //Делаем проверку какую модалку можно закрыть
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }
    //Функция отображения модалки по времени
    function showModalByTime(selector, time){
        setTimeout(function(){
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            });
            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        }, time);
    }
    //Вычесляем ширину скролла
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    
    

    showModalByTime('.popup-consultation', 5000);
};

export default modals;

