$(document).ready(function(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var list='<option value="#"> Selecione uma opção. </option>';
		for (var x=0; x<data.length;x++){
			list+='<option value='+data[x].chave+'>' +data[x].nome+ '</option>';
		}
		list+='<option value=-1> exibir todos produtos </option>';
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
		if (i=="#"){
			$('#resultado').html('');
		}
		else if (i<0){
			$.getJSON('http://192.168.1.109:8080/list', function(data){
				var result='';
				result+='<table border="1"><tr><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr><tr>';
				for (n=0; n<data.length; n++){
					result+='<tr><td>' + data[n].nome + '</td>' ;
					result+='<td> R$' + data[n].valor + '</td>';
					result+='<td>' + data[n].status + '</td>';
					result+='<td>' + data[n].estoque + '</td></tr>';
				}
				'</table>';
				$('#resultado').html(result);
			});
		}
	}
};
