window.onload = init;

var jogador1 = 'x', jogador2 = 'o', jogadoratual, resultado, table, jogadordavez, jogX, jogO, pontuacao1 = 0, pontuacao2 = 0, vencedor = false, j

var array_id = ['a0', 'a1', 'a2', 'b3', 'b4', 'b5', 'c6', 'c7', 'c8'];
var array_valor = ['','','','','','','','',''];

jogadoratual = "x"


function init(){
	table = document.getElementById('table');
	table.addEventListener('click', callback); 
	document.getElementById("jogadordavez").src = jogadoratual + ".png";
}

	function callback(event){
		if(vencedor != true){
			var idselecionado = event.target.id;
			console.log('id selecionado:' + idselecionado);
			for(var i = 0; i < array_id.length; i++){
				if(idselecionado == array_id[i]){
					if(array_valor[i] == ''){
						document.getElementById(array_id[i]).src = jogadoratual + ".png";
						array_valor[i] = jogadoratual
						console.log(array_valor)
					}
					verificar()
					if (jogadoratual == "x"){
						jogadoratual = "o"
					}
					else if(jogadoratual == "o"){
						jogadoratual = "x"
					}
					document.getElementById("jogadordavez").src = jogadoratual + ".png";

				}

			}
		}
	}


function verificar(){
	for(i = 0;i < array_id.length; i += 3){
		if(array_valor[i] == array_valor[i+1] && array_valor[i] == jogadoratual){
			if (array_valor[i] == array_valor[i+2] && array_valor[i] == jogadoratual) {
				if (array_valor[i] == jogador1) {
					pontuacao1 += 1
					document.getElementById("jogX").value = pontuacao1
					vencedor = true			
				}
				else{
					pontuacao2 +=1
					document.getElementById("jogO").value = pontuacao2
					vencedor = true
				}
			}	
		}
	}	

	for(i = 0; i < array_id.length; i ++){
		if(array_valor[i] == array_valor[i+3] && array_valor[i] == jogadoratual){
			if (array_valor[i] == array_valor[i+6] && array_valor[i] == jogadoratual) {
				if (array_valor[i] == jogador1) {
					pontuacao1 += 1
					document.getElementById("jogX").value = pontuacao1
					vencedor = true			
				}
				else{
					pontuacao2 +=1
					document.getElementById("jogO").value = pontuacao2
					vencedor = true
				}
			}	
		}
	}	

//diagonal principal
	
	if ((array_valor[0] == jogador1) && (array_valor[4] == jogador1) && (array_valor[8] == jogador1) || (array_valor[2] == jogador1) && (array_valor[4] == jogador1) && (array_valor[6] == jogador1)) {
		pontuacao1 +=1
		document.getElementById("jogX").value = pontuacao1
		vencedor = true
	}
	if ((array_valor[0] == jogador2) && (array_valor[4] == jogador2) && (array_valor[8] == jogador2) || (array_valor[2] == jogador2) && (array_valor[4] == jogador2) && (array_valor[6] == jogador2)) {
		pontuacao2 +=1
		document.getElementById("jogO").value = pontuacao2
		vencedor = true
		}
}

function resetar(){
	jogadoratual = "x"
	document.getElementById("jogadordavez").src = jogadoratual + ".png"
	array_valor = ['','','','','','','','',''];
	vencedor = false	

	for(i = 0; i < array_id.length; i++){	
		document.getElementById(array_id[i]).src = "branco.png";
		
		
	}

}
