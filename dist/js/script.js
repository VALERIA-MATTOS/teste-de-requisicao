var endereco='http://192.168.1.109:8080';

function limpar(i){
	if (i=="#"){
		$('#resultado').html('');
	}
}

function todosprodutos (i){
	if (i=="@"){
			$.getJSON(endereco + '/list', function(data){
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

function buscarproduto(){
	var i=$('#produtos').val();
	if (i>=0){
		$.getJSON(endereco + '/product?chave='+i, function(data){
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
		limpar(i);
		todosprodutos(i);
	}
};


$(document).ready(function(){
	$.getJSON(endereco + '/list', function(data){
		var list='<option value="#"> Selecione uma opção. </option>';
		for (var x=0; x<data.length;x++){
			list+='<option value='+data[x].chave+'>' + data[x].nome + '</option>';
		}
		list+='<option value="@"> exibir todos produtos </option>';
		$('#produtos').html(list);
	});
});