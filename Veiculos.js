function Veiculo(fabricante, modelo, maxSpeed){
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.maxSpeed = maxSpeed;
    this.acelerar = function(){
        console.log(this.modelo + " acelerou")
    }
}

function Carro(fabricante, modelo, maxSpeed, tipo, portas){
    Veiculo.call(this, fabricante, modelo, maxSpeed);
    
    this.tipo = tipo;
    this.portas = portas;
}

function Moto(fabricante, modelo, maxSpeed, potencia, aro){
    Veiculo.call(this, fabricante, modelo, maxSpeed);

    this.potencia = potencia;
    this.aro = aro;
}

const clio = new Carro('Renault', 'Clio', 150, 'utilitário', 4);
const fazer = new Moto('Yamaha', 'Fazer', 200, 150, 17);
const spin = new Carro('Chevrolet', 'Spin', 180, 'utilitário', 4);
const biz = new Moto('Honda', 'Biz', 100, 120, 15);

console.log(fazer);
console.log(clio);
console.log(spin);
console.log(biz);
