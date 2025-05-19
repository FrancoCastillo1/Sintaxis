grammar MiniC;

programa: instrucciones EOF ;

/* instrucciones: instruccion | instrucciones instruccion ; */
instrucciones: instruccion+; //me modifica la grámatica para un mayor código limpio

instruccion: bucle ;

bucle: 'for' '(' inicializacion ';' condicion ';' actualizacion ')' '{' sentencia '}' ;

inicializacion: identificador '=' numero ;

condicion: identificador operador_relacional numero ;

actualizacion: identificador operador_incremento ;

operador_relacional:
      '<'
    | '<='
    | '>'
    | '>='
    | '=='
    | '!=' ;

operador_incremento:
      '++'
    | '--' ;

sentencia: salida
         | salida sentencia
         | terminar ;

salida: 'printf' '(' cadena ')' ';' ;

terminar: 'break' ';' ;

identificador: LETRA (LETRA | DIGITO)* ;

numero: DIGITO+ ;

cadena: '"' caracteres? '"' ;

caracteres: caracter+ ;

caracter: LETRA | DIGITO | SIMBOLO ;

LETRA: [a-zA-Z] ;
DIGITO: [0-9] ;

SIMBOLO: [.,!?\-;:] ;