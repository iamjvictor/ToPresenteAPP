export class Turma{
    nome: string;
    cargaHoraria: number;
    

    constructor(nome:string, cargaHoraria: number){
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

    adicionarTurma() {        
        console.log(`Turma ${this.nome} adicionada com carga horária de ${this.cargaHoraria} horas.`);
       
        // Lógica adicional para adicionar a turma ao sistema ou outras operações necessárias.
      }
}

export default {
    Turma,
};