//atividade 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, ' + info.personagem);
  //

  //atividade 2
  info['recorrente']= 'Sim';
  console.log(info);
  //

  //atividade 3
   
  for(infos in info){
    console.log(infos)
  }; 
  //

  //atividade 4
   for(infos in info){
    console.log(info[infos])
   };
   //

//atividade 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  for(let key in info){
        info2[key] += info[key];
  }

  //Leitura de objetos

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' +  '"' + leitor.livrosFavoritos[0].titulo + '"');

  // atividade 2
  leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  )
  console.log(leitor.livrosFavoritos);