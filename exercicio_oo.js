const alunos = [
	{nome: 'Gabriel', nota: 7.5},
	{nome: 'Amanda', nota: 5.3},
	{nome: 'Rubens', nota: 6},
	{nome: 'Érica', nota: 4.5},
	{nome: 'Mayza', nota: 9},
	{nome: 'Rodolfo', nota: 3}
]

console.log(alunos.filter(aluno => aluno.nota >= 6));