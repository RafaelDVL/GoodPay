const alertaLogin = new bootstrap.Modal(document.getElementById("alertaLogin"));

const userLogin = [
    {
        id: 1001,
        userName: "victoricoma",
        senha:"gordinho123",
        email:"victor.icoma@gmail.com"
    },
    {
        id: 1002,
        userName: "janasilva",
        senha:"ja123456",
        email:"janasilva@gmail.com"
    },
    {
        id: 1003,
        userName: "marcospinheiro",
        senha:"m123456",
        email:"pinheiromarcos@gmail.com"
    },
    {
        id: 1004,
        userName: "elisamarcondes",
        senha:"123456",
        email:"elimarcondes@gmail.com"
    }
    ];

    function loginForm(){
        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;
        let validaLogin = 
        if(login === "victoricoma" && senha === "123456"){
            alert ("Parabens está logado")
        }
        alertaLogin.show();
        console.log(userLogin);
        console.log(login);
        console.log(senha);
    }