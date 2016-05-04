$(document).ready(function(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var list='';
		var list='<option value="#"> Selecione uma opção. </option>';
		for (var x=0; x<data.length;x++){
			list+='<option value='+data[x].chave+'>' +data[x].nome+ '</option>';
		}
		$('#produtos').html(list);
	});
});

function buscarproduto(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var i=$('#produtos').val();
		var result='';
		result+='<table border="1"><tr><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
		result+='<tr><td>' + data[i-1].nome + '</td>' ;
		result+='<td> R$' + data[i-1].valor + '</td>';
		result+='<td>' + data[i-1].status + '</td>';
		result+='<td>' + data[i-1].estoque + '</td></tr>';
		$('#resultado').html(result);
	});
};