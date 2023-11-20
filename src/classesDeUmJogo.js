// Criar uma classe e colocar ação dentro da classe utilizando um método/função. 
class aventuraHeroi {
    constructor(nomeHeroi, idadeHeroi, tipoHabilidade, tipoAtaque) {
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHabilidade = tipoHabilidade
        this.tipoAtaque = tipoAtaque
        }

    // Método dentro da classe também chamado de Função
    atacar() {
        console.log();
        console.log(`O ${this.tipoHabilidade} atacou usando ${this.tipoAtaque}`);
        console.log(`Meu nome é ${this.nomeHeroi} e tenho ${this.idadeHeroi} anos!`);
        console.log();
    }
}

// Instanciando novos objetos da classe aventuraHeroi

let mago = new aventuraHeroi("Gandalf", 55, "Mago", "Magia");
let guerreiro = new aventuraHeroi("John", 25, "Guerreiro", "Espada");
let monge = new aventuraHeroi("Sohei", 45, "Monge", "Artes Marciais");
let ninja = new aventuraHeroi("Hattori Hanzo", 35, "Ninja", "Shuriken");


// Chamando método atacar
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

// Retornando os objetos
console.log(mago)
console.log(guerreiro)
console.log(monge)
console.log(ninja)