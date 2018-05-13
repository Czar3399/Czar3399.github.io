	var i;
 	var pc;
 	var jg;
 	var ptpc = 0;
 	var ptjg = 0;
 	
 	function start(){


	 	for (i = 0; i < 5; i++) {
	 		alert("Escolha 0 para Pedra, 1 para Papel ou 2 para Tesoura");
	 		jg = prompt("Digite sua escolha","");
	 		
	 		pc = Math.floor((Math.random(1)*3));

	 		if (jg == 0 && pc == 0) {
	 			alert("Empate");
	 		}

	 		else if(jg == 0 && pc == 1){
	 			alert("O computador ganhou!");
				ptpc++; 		
	 		}

	 		else if(jg == 0 && pc == 2){
	 			alert("Voce ganhou do computador!");
	 			ptjg++;
	 		}

	 		else if(jg == 1 && pc == 0) {
	 			alert("Voce ganhou do computador!");
	 			ptjg++;
	 		}

	 		else if(jg == 1 && pc == 1) {
	 			alert("Empate!");
	 		}

	 		else if(jg == 1 && pc == 2) {
	 			alert("O computador ganhou!");
	 			ptpc++;
	 		}

	 		else if(jg == 2 && pc == 0) {
	 			alert("O computador ganhou!");
	 			ptpc++;
	 		}

	 		else if(jg == 2 && pc == 1) {
	 			alert("Voce ganhou do computador!");
	 			ptjg++;
	 		}

	 		else if(jg == 2 && pc == 2) {
	 			alert("Empate!");
	 		}

	 		else{
	 			alert("Voce digitou errado");
	 			ptjg--;
	 		}

	 	}

		alert("Pontos do jogador: "+ptjg+"Pontos do computador: "+ptpc);

		ptjg = 0;
		ptpc = 0;

	}
