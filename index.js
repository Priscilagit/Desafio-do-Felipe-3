class hero{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
}

atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
        break;
    }
    console.log(`${this.nome} o ${this.tipo}, de ${this.idade} anos, atacou usando ${ataque}.`);
  }
}
let superHero  = new hero("Venus", "55", "guerreiro")
superHero.atacar()
