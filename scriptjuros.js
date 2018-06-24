var montante, juros, capital, tempo, i, calcular, t, h, porcentagem, absoluto

function calcular(){
	
	capital = document.getElementById("capital").value;
	juros = document.getElementById("juros").value / 100;
	tempo = document.getElementById("tempo").value;

	for (i = 0; i <= tempo; i++) {
		montante = capital*(Math.pow(1+juros, i));
		montante = montante.toFixed(2);
		h = document.createElement("p")
		t = document.createTextNode("Mês " + i + ':R$' + montante);
		h.appendChild(t);
		document.getElementById("resultado").appendChild(h);	
		
		absoluto = montante - capital
		porcentagem = (absoluto*100)/capital
		porcentagem = porcentagem.toFixed(2)


		document.getElementById("show1").value = ("R$"+ absoluto)
		document.getElementById("show2").value = (porcentagem)

	}

}	



