var curNum = 0, oprNum = '';
var operation ;
var calculator = {
	typeNum : function(num){ //숫자입력
		curNum = parseFloat(curNum + num);
		$('.result_val').text(curNum);
	},
	typeOperation : function(inputOperation){ //연산자 입력
		operation = inputOperation;
		calculator.calculate(false);
	},
	calculate : function(bResult){

		var prvNum = parseFloat($('input[name="prvNum"]').val());
		var inputNum = parseFloat(curNum);

		console.log('prvNum'+prvNum)
		console.log('inputNum'+inputNum)

		switch (operation) {
			case '+' :
				oprNum = prvNum + inputNum;
				break;
			case '-' :
				oprNum = parseFloat(prvNum - inputNum);
				break;
			case '×' :
				oprNum = prvNum * inputNum;
				break;
				
		}

		if (bResult){
			$('.input_val').text(prvNum+operation+inputNum+'=');
		} else {
			$('.input_val').text(oprNum+operation);
		}

		curNum = 0;
		$('input[name="prvNum"]').val(oprNum);
		$('.result_val').text(oprNum);
	},

	reset : function(){
		curNum = 0;

		$('input[name="prvNum"]').val(0);
		$('.input_val').html('');
		$('.result_val').text(0);
	},
	result : function(){
		calculator.calculate(true);
	}
};

// 숫자 입력
$(document).on('click','.btn_num', function(){
	var num = $(this).text();
	calculator.typeNum(num);

	return false;
});

// 초기화
$(document).on('click','.btn_reset', function(){
	calculator.reset();
	return false;
});

// 연산
$(document).on('click','.btn_operation', function(){
	var operation = $(this).text();
	calculator.typeOperation(operation);

	return false;
});

$(document).on('click','.btn_result', function(){
	calculator.result();
	return false;
});
