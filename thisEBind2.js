function Pessoa(){
  this.idade =0;

  // driblando a logica de execucao do js
  const self = this;

  setInterval(function(){
    self.idade++;
    console.log(self.idade);
  }/*.bind(this)*/,1000)
}


new Pessoa
