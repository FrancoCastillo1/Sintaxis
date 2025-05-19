// Generated from d:/exo/descargas/Franco-UTN/xd/ssl-antlr-calculator/MiniC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCListener from './MiniCListener.js';
import MiniCVisitor from './MiniCVisitor.js';

const serializedATN = [4,1,21,113,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,1,4,1,39,8,1,11,1,
12,1,40,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,
3,9,77,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,5,12,90,
8,12,10,12,12,12,93,9,12,1,13,4,13,96,8,13,11,13,12,13,97,1,14,1,14,3,14,
102,8,14,1,14,1,14,1,15,4,15,107,8,15,11,15,12,15,108,1,16,1,16,1,16,0,0,
17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,4,1,0,8,13,1,0,14,15,
1,0,19,20,1,0,19,21,102,0,34,1,0,0,0,2,38,1,0,0,0,4,42,1,0,0,0,6,44,1,0,
0,0,8,56,1,0,0,0,10,60,1,0,0,0,12,64,1,0,0,0,14,67,1,0,0,0,16,69,1,0,0,0,
18,76,1,0,0,0,20,78,1,0,0,0,22,84,1,0,0,0,24,87,1,0,0,0,26,95,1,0,0,0,28,
99,1,0,0,0,30,106,1,0,0,0,32,110,1,0,0,0,34,35,3,2,1,0,35,36,5,0,0,1,36,
1,1,0,0,0,37,39,3,4,2,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,
1,0,0,0,41,3,1,0,0,0,42,43,3,6,3,0,43,5,1,0,0,0,44,45,5,1,0,0,45,46,5,2,
0,0,46,47,3,8,4,0,47,48,5,3,0,0,48,49,3,10,5,0,49,50,5,3,0,0,50,51,3,12,
6,0,51,52,5,4,0,0,52,53,5,5,0,0,53,54,3,18,9,0,54,55,5,6,0,0,55,7,1,0,0,
0,56,57,3,24,12,0,57,58,5,7,0,0,58,59,3,26,13,0,59,9,1,0,0,0,60,61,3,24,
12,0,61,62,3,14,7,0,62,63,3,26,13,0,63,11,1,0,0,0,64,65,3,24,12,0,65,66,
3,16,8,0,66,13,1,0,0,0,67,68,7,0,0,0,68,15,1,0,0,0,69,70,7,1,0,0,70,17,1,
0,0,0,71,77,3,20,10,0,72,73,3,20,10,0,73,74,3,18,9,0,74,77,1,0,0,0,75,77,
3,22,11,0,76,71,1,0,0,0,76,72,1,0,0,0,76,75,1,0,0,0,77,19,1,0,0,0,78,79,
5,16,0,0,79,80,5,2,0,0,80,81,3,28,14,0,81,82,5,4,0,0,82,83,5,3,0,0,83,21,
1,0,0,0,84,85,5,17,0,0,85,86,5,3,0,0,86,23,1,0,0,0,87,91,5,19,0,0,88,90,
7,2,0,0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,25,1,
0,0,0,93,91,1,0,0,0,94,96,5,20,0,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,
0,0,97,98,1,0,0,0,98,27,1,0,0,0,99,101,5,18,0,0,100,102,3,30,15,0,101,100,
1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,5,18,0,0,104,29,1,0,0,0,
105,107,3,32,16,0,106,105,1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,
1,0,0,0,109,31,1,0,0,0,110,111,7,3,0,0,111,33,1,0,0,0,6,40,76,91,97,101,
108];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCParser extends antlr4.Parser {

    static grammarFileName = "MiniC.g4";
    static literalNames = [ null, "'for'", "'('", "';'", "')'", "'{'", "'}'", 
                            "'='", "'<'", "'<='", "'>'", "'>='", "'=='", 
                            "'!='", "'++'", "'--'", "'printf'", "'break'", 
                            "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "LETRA", "DIGITO", "SIMBOLO" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "inicializacion", "condicion", "actualizacion", 
                         "operador_relacional", "operador_incremento", "sentencia", 
                         "salida", "terminar", "identificador", "numero", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCParser.ruleNames;
        this.literalNames = MiniCParser.literalNames;
        this.symbolicNames = MiniCParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.instrucciones();
	        this.state = 35;
	        this.match(MiniCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniCParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.instruccion();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MiniCParser.T__0);
	        this.state = 45;
	        this.match(MiniCParser.T__1);
	        this.state = 46;
	        this.inicializacion();
	        this.state = 47;
	        this.match(MiniCParser.T__2);
	        this.state = 48;
	        this.condicion();
	        this.state = 49;
	        this.match(MiniCParser.T__2);
	        this.state = 50;
	        this.actualizacion();
	        this.state = 51;
	        this.match(MiniCParser.T__3);
	        this.state = 52;
	        this.match(MiniCParser.T__4);
	        this.state = 53;
	        this.sentencia();
	        this.state = 54;
	        this.match(MiniCParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacion() {
	    let localctx = new InicializacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniCParser.RULE_inicializacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.identificador();
	        this.state = 57;
	        this.match(MiniCParser.T__6);
	        this.state = 58;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.identificador();
	        this.state = 61;
	        this.operador_relacional();
	        this.state = 62;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actualizacion() {
	    let localctx = new ActualizacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCParser.RULE_actualizacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.identificador();
	        this.state = 65;
	        this.operador_incremento();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_relacional() {
	    let localctx = new Operador_relacionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCParser.RULE_operador_relacional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_incremento() {
	    let localctx = new Operador_incrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCParser.RULE_operador_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniCParser.RULE_sentencia);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.salida();
	            this.state = 73;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiniCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(MiniCParser.T__15);
	        this.state = 79;
	        this.match(MiniCParser.T__1);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(MiniCParser.T__3);
	        this.state = 82;
	        this.match(MiniCParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiniCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(MiniCParser.T__16);
	        this.state = 85;
	        this.match(MiniCParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiniCParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(MiniCParser.LETRA);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 88;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiniCParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.match(MiniCParser.DIGITO);
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiniCParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(MiniCParser.T__17);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0)) {
	            this.state = 100;
	            this.caracteres();
	        }

	        this.state = 103;
	        this.match(MiniCParser.T__17);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MiniCParser.RULE_caracteres);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 105;
	            this.caracter();
	            this.state = 108; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MiniCParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCParser.EOF = antlr4.Token.EOF;
MiniCParser.T__0 = 1;
MiniCParser.T__1 = 2;
MiniCParser.T__2 = 3;
MiniCParser.T__3 = 4;
MiniCParser.T__4 = 5;
MiniCParser.T__5 = 6;
MiniCParser.T__6 = 7;
MiniCParser.T__7 = 8;
MiniCParser.T__8 = 9;
MiniCParser.T__9 = 10;
MiniCParser.T__10 = 11;
MiniCParser.T__11 = 12;
MiniCParser.T__12 = 13;
MiniCParser.T__13 = 14;
MiniCParser.T__14 = 15;
MiniCParser.T__15 = 16;
MiniCParser.T__16 = 17;
MiniCParser.T__17 = 18;
MiniCParser.LETRA = 19;
MiniCParser.DIGITO = 20;
MiniCParser.SIMBOLO = 21;

MiniCParser.RULE_programa = 0;
MiniCParser.RULE_instrucciones = 1;
MiniCParser.RULE_instruccion = 2;
MiniCParser.RULE_bucle = 3;
MiniCParser.RULE_inicializacion = 4;
MiniCParser.RULE_condicion = 5;
MiniCParser.RULE_actualizacion = 6;
MiniCParser.RULE_operador_relacional = 7;
MiniCParser.RULE_operador_incremento = 8;
MiniCParser.RULE_sentencia = 9;
MiniCParser.RULE_salida = 10;
MiniCParser.RULE_terminar = 11;
MiniCParser.RULE_identificador = 12;
MiniCParser.RULE_numero = 13;
MiniCParser.RULE_cadena = 14;
MiniCParser.RULE_caracteres = 15;
MiniCParser.RULE_caracter = 16;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(MiniCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_bucle;
    }

	inicializacion() {
	    return this.getTypedRuleContext(InicializacionContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	actualizacion() {
	    return this.getTypedRuleContext(ActualizacionContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InicializacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_inicializacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInicializacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInicializacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInicializacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_condicion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	operador_relacional() {
	    return this.getTypedRuleContext(Operador_relacionalContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActualizacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_actualizacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	operador_incremento() {
	    return this.getTypedRuleContext(Operador_incrementoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterActualizacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitActualizacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitActualizacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_relacionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_operador_relacional;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterOperador_relacional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitOperador_relacional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitOperador_relacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_incrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_operador_incremento;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterOperador_incremento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitOperador_incremento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitOperador_incremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.LETRA);
	    } else {
	        return this.getToken(MiniCParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.DIGITO);
	    } else {
	        return this.getToken(MiniCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.DIGITO);
	    } else {
	        return this.getToken(MiniCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_caracteres;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(MiniCParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(MiniCParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(MiniCParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniCParser.ProgramaContext = ProgramaContext; 
MiniCParser.InstruccionesContext = InstruccionesContext; 
MiniCParser.InstruccionContext = InstruccionContext; 
MiniCParser.BucleContext = BucleContext; 
MiniCParser.InicializacionContext = InicializacionContext; 
MiniCParser.CondicionContext = CondicionContext; 
MiniCParser.ActualizacionContext = ActualizacionContext; 
MiniCParser.Operador_relacionalContext = Operador_relacionalContext; 
MiniCParser.Operador_incrementoContext = Operador_incrementoContext; 
MiniCParser.SentenciaContext = SentenciaContext; 
MiniCParser.SalidaContext = SalidaContext; 
MiniCParser.TerminarContext = TerminarContext; 
MiniCParser.IdentificadorContext = IdentificadorContext; 
MiniCParser.NumeroContext = NumeroContext; 
MiniCParser.CadenaContext = CadenaContext; 
MiniCParser.CaracteresContext = CaracteresContext; 
MiniCParser.CaracterContext = CaracterContext; 
