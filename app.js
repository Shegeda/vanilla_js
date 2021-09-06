// получаем кнопку
const button = document.querySelector('button');

// обьявляем переменные
let modal;
let backdrop;

// доб обработ соб на кнопку, будет выпол ф-ия
button.addEventListener('click', showModalHandler);

// создаем функцию, котрая возвращает обьект modal
function showModalHandler() {
    if (modal) {
        return;
    }

    // перезапис modal и создаем div и присваеваем ему класс 'modal'
    modal = document.createElement('div');
    modal.className = 'modal';

    // создаем переменную modalText , помещаем в нее элемент "Р" и в него пишем текст
    const modalText = document.createElement('p');
    modalText.textContent = 'Are you sure?';

    // создаем перем по отмене действия(кнопку) + соз кнопку + добав текст(Cancel) + присваиваем класс (btn btn--alt)
    //  + доб обраб событий(closeModalHandler)
    const modalCancelAction = document.createElement('button');
    modalCancelAction.textContent = 'Cancel';
    modalCancelAction.className = 'btn btn--alt';
    modalCancelAction.addEventListener('click', closeModalHandler);

    // создаем (modalConfirmAction) кнопку для согласия делаем все тоже что и сврху но меняем по логике названия текста и стилей
    const modalConfirmAction = document.createElement('button');
    modalConfirmAction.textContent = 'Confirm';
    modalConfirmAction.className = 'btn';
    modalConfirmAction.addEventListener('click', closeModalHandler);

    // добавляем элементы в елемент "modal" методом "append"
    modal.append(modalText);
    modal.append(modalCancelAction);
    modal.append(modalConfirmAction);

    // добавляем в тело (body) елемент модал (modal) тоже через "append"
    document.body.append(modal);

    // перезаписываем елемент фон-"backdrop" и в нем создаем div + добавляем класс "backdrop"
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    // добавляем обработчик событий на "backdrop" по клику закрывать
    backdrop.addEventListener('click', closeModalHandler);

    // в тело присоединяем "backdrop"
    document.body.append(backdrop);
}

// создаем функцию по закрытию модалки, внутри удаляем "modal", "backdrop"
function closeModalHandler() {
    modal.remove();
    modal = null;

    backdrop.remove();
    backdrop = null;
}