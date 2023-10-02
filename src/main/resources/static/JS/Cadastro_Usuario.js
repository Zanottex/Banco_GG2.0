$("#enviarLogin").click(validaLogin);
$("#enviarCadastro").click(validaEnvio);

        function validaCampoVazio(campo){
            if(campo.trim() == ''){
                return true;
            }else{
                return false;
            }
        }

        function validaLogin(){
        let podeEnviar = true
        let cpf = $("#cpfLogar").val();
        let senha = $("#senhaLogar").val();

        if(validaCampoVazio(cpf)){
        podeEnviar = false;
        }
        if(validaCampoVazio(senha)){
                podeEnviar = false;
        }
        if(podeEnviar){
        $.ajax({
        type: "POST",
        url: "/Login",
        data:{
        cpf:cpf,
        senha:senha,

        },
         success: function(data){
          $("#errorMessage").text("");
           if(data.sucesso){
           window.location.href="/Home";
             }else{
             alert("é deu ruim")
                }
             },
            error: function(){
             $("#errorMessage").append("Deu muito ruim parça!");
             }
           });
        }
        }


        function validaEnvio(){
            let podeEnviar = true;
            let nome = $("#nome").val();
            let cpf = $("#cpf").val();
            let email = $("#email").val();
            let data_nasc = $("#data_nasc").val();
            let telefone = $("#telefone").val();
            let senha = $("#senha").val();
            let confsenha = $("#confsenha").val();

            $("#errorMessage").text("");
            if(validaCampoVazio(nome)){
                podeEnviar = false;
                showToast({sucesso: podeEnviar, mensagem: "O Nome precisa ser Preenchido!"});
            }
            if(validaCampoVazio(email) && validaCampoVazio(telefone)){
                podeEnviar = false;
                showToast({sucesso: podeEnviar, mensagem: "Email ou telefone precisa ser informado!"});
            }
            if(validaCampoVazio(data_nasc)){
                podeEnviar = false;
                showToast({sucesso: podeEnviar, mensagem: "A data de nascimento precisa ser informada!"});
            }
            if(validaCampoVazio(senha)){
                podeEnviar = false;
                showToast({sucesso: podeEnviar, mensagem: "A senha precisa ser informada e igual a Confirmação de Senha!"});
            }else if (senha != confsenha){
                showToast({sucesso: podeEnviar, mensagem: "Senha e Confirmação de senha não conferem!"});
            }
            if(!validarCPF(cpf)){
                podeEnviar = false;
                showToast({sucesso: podeEnviar, mensagem: "O CPF informado é Inválido!"});
            }

            if(podeEnviar){
                $.ajax({
                    type: "POST",
                    url: "/cadastro",
                    data:{
                        nome:nome,
                        cpf:cpf,
                        email:email,
                        senha:senha,
                        confsenha:confsenha,
                        datanasc:data_nasc,
                        telefone:telefone,
                    },
                    success: function(data){
                        $("#errorMessage").text("");
                        if(data.sucesso){
                            window.location.href="/Home";
                        }else{
                            alert("é deu ruim")
                        }

                    },
                    error: function(){
                        $("#errorMessage").append("Deu muito ruim parça!");
                    }
                });
            }
        }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



var checkbox = document.getElementById('checkbox')
var i = 0
checkbox.addEventListener('click', () => {
	var fundo = document.querySelector("body")
    var overlay = document.querySelector(".overlay")
    var btn = document.querySelector(".btn")
    var btn2 = document.querySelector(".btnCadastro2")
    var btn3 = document.querySelector(".btnLogin2")
    var tituloForm1 = document.querySelector(".tituloForm1")
    var tituloForm2 = document.querySelector(".tituloForm2")
    var icone1 = document.querySelector(".icone1")
    var icone2 = document.querySelector(".icone2")
    var icone3 = document.querySelector(".icone3")
    var icone4 = document.querySelector(".icone4")
    var icone5 = document.querySelector(".icone5")
    var icone6 = document.querySelector(".icone6")
    var esqueciSenha = document.querySelector(".esqueciSenha")
    
	
	
	if(i<=0){
		fundo.style.backgroundColor ="#001017"
        overlay.style.backgroundColor ="#28030A"
        btn.style.backgroundColor ="#28030A"
        btn2.style.color="#28030A"
        btn3.style.color="#28030A"
        tituloForm1.style.color ="#28030A"
        tituloForm2.style.color ="#28030A"
        icone1.style.color="#28030A"
        icone1.style.borderColor="#28030A"
        icone2.style.color="#28030A"
        icone2.style.borderColor="#28030A"
        icone3.style.color="#28030A"
        icone3.style.borderColor="#28030A"
        icone4.style.color="#28030A"
        icone4.style.borderColor="#28030A"
        icone5.style.color="#28030A"
        icone5.style.borderColor="#28030A"
        icone6.style.color="#28030A"
        icone6.style.borderColor="#28030A"
        esqueciSenha.style.color ="#28030A"

	}
	i++
	if(i>=1){
		fundo.style.backgroundColor="white"
        overlay.style.backgroundColor="#ffbf00"
        btn.style.backgroundColor ="#ffbf00"
        btn2.style.color ="#ffbf00"
        btn3.style.color ="#ffbf00"
        tituloForm1.style.color ="#ffbf00"
        tituloForm2.style.color ="#ffbf00"
        icone1.style.color ="#ffbf00"
        icone1.style.borderColor ="#ffbf00"
        icone2.style.color ="#ffbf00"
        icone2.style.borderColor ="#ffbf00"
        icone3.style.color ="#ffbf00"
        icone3.style.borderColor ="#ffbf00"
        icone4.style.borderColor ="#ffbf00"
        icone5.style.color ="#ffbf00"
        icone5.style.borderColor ="#ffbf00"
        icone6.style.color ="#ffbf00"
        icone6.style.borderColor ="#ffbf00"
        esqueciSenha.style.color ="#ffbf00"
        

		i=0
	}
});