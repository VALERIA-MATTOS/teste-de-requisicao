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
	var i=$('#produtos').val();
	if (i>=0){
		$.getJSON('http://192.168.1.109:8080/product?chave='+i, function(data){
			var result='';
			result+='<table border="1"><tr><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
			result+='<tr><td>' + data.nome + '</td>' ;
			result+='<td> R$' + data.valor + '</td>';
			result+='<td>' + data.status + '</td>';
			result+='<td>' + data.estoque + '</td></tr></table>';
			$('#resultado').html(result);
		});
	}
	else {
			$('#resultado').html('');
	}
};
