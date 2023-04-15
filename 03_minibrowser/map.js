//TDD = Test Driven Development
var novoMapa = new Map();

class HistoryMap {

}

//Vamos supor que acessou um site no dia 11/11/2011 às 11 da noite
novoMapa.set ('11/11/2011 - 23:30 - URL', {title: 'Titulo do site', url: 'url sozinha'});
novoMapa.set ('11/11/2011 - 23:30 - URL', {});
novoMapa.set ('11/11/2011 - 23:31 - URL', {});
novoMapa.set ('11/11/2011 - 23:32 - URL', {});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado);