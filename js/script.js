$(document).ready(function(){
		var index = 0,
			output = $("form"),
			correct_answ,
			id,
			q;
		
			function showQuestion() {
			$.getJSON("js/quiz.json", function(data){
				console.log(data);
				$.each(data, function(i,value){
					q = value.length;
					id = value[index].id;
						$(".questions_num").text("question"+" " +id +"/"+ q);
						output.append("<p>"+value[index].text+"</p>");
						correct_answ = value[index].correct;				
					$.each(value[index].answers, function(i,arr){
						output.append("<input class=yourAnsw type=radio name=radio value="+arr+"><span>"+arr+"</span><br>");
					});
				});
			});
		}


			function changeQuestion() {
				$(".next").click(function(){
				index+=1;
					if (index>q-1){
						index = 0;
					}
				output.html("");
				$(".result").text("");
				showQuestion();
				});
			}

			function checkAnswer(){
				$(".checkButton").click(function(){
					var input = $(".yourAnsw:checked").val();
					 if (input==correct_answ) {
			 			$(".result").text("Your Aaswer is CORRECT");
					 }
			 			else {
			 				$(".result").text("Your answer is WRONG");
			 			}
			 		if (input==undefined){
			 			$(".result").text("Please choose correct answer");
			 		}
				});
			}


		showQuestion();	
		changeQuestion();	
		checkAnswer();
		

	});
