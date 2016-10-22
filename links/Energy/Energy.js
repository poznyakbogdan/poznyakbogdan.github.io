function DrawOutput(){

	////////////////////--Объявление переменных--///////////////////////////////////
	var Qgv = +document.getElementById('InputOfQgv').value;
	var Qprot = +document.getElementById('InputOfQprot').value;
	var Qgilobsot = +document.getElementById('InputOfQgilobsot').value;
	var Qprv = +document.getElementById('InputOfQprv').value;
	var Qgilobsv = +document.getElementById('InputOfQgilobsv').value;

	var Tn = new Array(-24, -20, -15, -14, -10, -5, 0, +5, +8);
	var Tnar = -24;
	var Tnv = -14;
	var Qot = [];
	var Qv = [];
	var Qt = [];

	var Output = document.getElementById('OutputTable');
	if (document.getElementById('tr1') != null){
	////////////////////////--удаление элементов для освобождеия места--///////////////////////////////	
		document.getElementById('tr1').parentNode.removeChild(document.getElementById('tr1'));
		document.getElementById('tr2').parentNode.removeChild(document.getElementById('tr2'));
		document.getElementById('tr3').parentNode.removeChild(document.getElementById('tr3'));
		document.getElementById('tr4').parentNode.removeChild(document.getElementById('tr4'));
	}
	/////////////////////////--цикл вычислений--/////////////////////////////////////////
	for (var i = 0; i <= Tn.length; i++) {
		Qot[i] = (Qprot*((16 - Tn[i]) / (16 - Tnar)) + Qgilobsot*((18 - Tn[i]) / (18 - Tnar))).toFixed(4);  
		Qv[i] = (Qprv*((16 - Tn[i]) / (16 - Tnv)) + Qgilobsv*((18 - Tn[i]) / (18 - Tnv))).toFixed(4);
		Qt[i] = (+(Qv[i]) + +(Qot[i]) + Qgv).toFixed(4);
	}
	var data = "<td></td>";
	var tr1 = document.createElement('tr');
	tr1.id = "tr1";
	for (var i = 0; i < 9; i++) {
	 	data = data + "<td>" + "t[" + +(i + 1) + "] = " + Tn[i] +"</td>";
	 	tr1.innerHTML = data;
	 	Output.appendChild(tr1);	
	} 
	
	data = "<td>Qot</td>";
	var tr2 = document.createElement('tr');
	tr2.id = "tr2";
	for (var i = 0; i < 9; i++) {
	 	data = data + "<td>" + Qot[i] + "</td>"; 
	 	tr2.innerHTML = data;
	 	Output.appendChild(tr2);	
	} 
	data = "<td>Qv</td>";
	var tr3 = document.createElement('tr');
	tr3.id = "tr3";
	for (var i = 0; i < 9; i++) {
	 	data = data + "<td>" + Qv[i] + "</td>";
	 	tr3.innerHTML = data;
	 	Output.appendChild(tr3);	
	} 
	data = "<td>Qt</td>";
	var tr4 = document.createElement('tr');
	tr4.id = "tr4";
	for (var i = 0; i < 9; i++) {
	 	data = data + "<td>" + Qt[i] + "</td>";
	 	tr4.innerHTML = data;
	 	Output.appendChild(tr4);	
	} 

}	