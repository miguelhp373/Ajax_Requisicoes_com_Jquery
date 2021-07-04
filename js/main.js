$(document).ready(function () {
    var responsedata

    $('#btn_submit').click((e)=>{
    
    e.preventDefault();//evita o refresh da página

    var cep = $('#cep_field').val()
    
    $.ajax({
         type: "GET",
         url: `https://viacep.com.br/ws/${cep}/json/`,
         data: {},
         dataType: "JSONP",
         beforeSend: function(){
            $('#msg').html('Buscando.......')
            $("#msg").css("color", "yellow");
         },
         success: function (data) {
             console.table(data.cep);
             console.table(data.logradouro);
             console.table(data.bairro);
             console.table(data.localidade);
             console.table(data.uf);
             console.table(data.ddd);
             $("#msg").css("color", "green");
             $('#msg').html('Buscado com Sucesso! Abra o console do navegador para ver o resultado.')
         },
         error: function (error) {
            console.log(error);
            $("#msg").css("color", "red");
            $('#msg').html('Erro ao buscar cep.')
        },
     });
    })
});


/*

{
  "cep": "13220-480",
  "logradouro": "Rua João Musselli",
  "complemento": "",
  "bairro": "Jardim Maria de Fátima",
  "localidade": "Várzea Paulista",
  "uf": "SP",
  "ibge": "3556503",
  "gia": "7122",
  "ddd": "11",
  "siafi": "7233"
}


*/