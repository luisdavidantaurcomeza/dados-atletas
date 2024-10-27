class Atleta {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if(this.idade >=9 && this.idade<=11){
            return "Infantil";
        }
        if(this.idade >=12 && this.idade<=13){
            return "Juvenil";
        }
        if(this.idade >=14 && this.idade<=15){
            return "Intermediário";
        }
        if(this.idade >=16 && this.idade<=30){
            return "Adulto";
        } else{
            return `Sem Categoria...`;
        }        
    }
    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida(){
        const ordenandoNotas = [...this.notas].sort((a, b) => a-b);
        const arrumandoNotas = ordenandoNotas.slice(1, -1);
        const soma = arrumandoNotas.reduce((total, nota)=> total+nota, 0);
        return soma/arrumandoNotas.length;
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemNotasAtleta(){
        return this.notas;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemCategoria(){
        return this.calculaCategoria();
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}
module.exports = Atleta; 