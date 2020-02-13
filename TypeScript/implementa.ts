namespace empresa{
    let p = new Pessoa("David", "00000000000");
    p.setIdade(30);

    document.getElementById("nome").textContent = p.getNome();
    
}