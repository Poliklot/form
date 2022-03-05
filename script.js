const formBlock = document.querySelectorAll('.form');
if (formBlock){
    const form = formBlock[0];
    // Работа label
    const inputs = form.querySelectorAll('input');
    for(let item of inputs){
        item.addEventListener('input', () => {
            if(item.value.length == 0){
                item.classList.remove('_no-empty');
            }
            else{
                item.classList.add('_no-empty');
            }
        })
    }

    // Обработка
	form.addEventListener('submit', formSend);
	
	async function formSend(e){
		e.preventDefault();
		
		let error = formValidate(form);

		if (error === 0){
			// Отправка формы по ajax
			
			// Очистка полей
			for(let item of inputs){
                item.classList.remove('_no-empty');
                item.value = '';
            } 
            
			// Показ модального окна
			// myModal.open('#thanksQuestionModal');
		}
	}

	function formValidate(form){
		let error = 0;
		const formRequiredInputs = form.querySelectorAll('._required');

		for(let item of formRequiredInputs){
			formRemoveError(item);
			if(item.classList.contains('_phone')){
				if(item.value.length < 17){
					formAddError(item);
					error++;
				}
			}
			else{
				if(item.value === ''){
					formAddError(item);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(inputEl){
		inputEl.classList.add('_error');
	}
	function formRemoveError(inputEl){
		inputEl.classList.remove('_error');
	}
}