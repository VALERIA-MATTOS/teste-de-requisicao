$(document).ready(function(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var list='';
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
		result+='Nome: ' + data[i-1].nome + '<br />';
		result+='Valor: ' + data[i-1].valor + '<br />';
		result+='Status: ' + data[i-1].status + '<br />';
		result+='Estoque: ' + data[i-1].estoque + '<br />';
		$('#resultado').html(result);
	});
};