import { Parser } from "antlr4";
import MiniCVisitor from "./generated/MiniCVisitor.js";

export class CustomMiniCVisitor extends MiniCVisitor{

   visitPrograma(ctx) {
    return this.visit(ctx.instrucciones());
  }

  visitInstrucciones(ctx) {
    if (ctx.instruccion().length === 1) {
      return this.visit(ctx.instruccion(0));
    } else {
      return ctx.instruccion()
        .map(inst => this.visit(inst))
        .join('\n');
    }
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.bucle());
  }

  visitBucle(ctx) {
    const ini = this.visit(ctx.inicializacion());
    const cond = this.visit(ctx.condicion());
    const act = this.visit(ctx.actualizacion());
    const sentencias = this.visit(ctx.sentencia());

    return `for (${ini}; ${cond}; ${act}) {\n${sentencias}\n}`;
  }

  visitInicializacion(ctx) {
    const id = ctx.identificador().getText();
    const num = ctx.numero().getText();
    return `let ${id} = ${num}`;
  }

  visitCondicion(ctx) {
    const id = ctx.identificador().getText();
    const op = ctx.operador_relacional().getText();
    const num = ctx.numero().getText();
    return `${id} ${op} ${num}`;
  }

  visitActualizacion(ctx) {
    const id = ctx.identificador().getText();
    const op = ctx.operador_incremento().getText();
    return `${id}${op}`;
  }

  visitSentencia(ctx) {
    if (ctx.salida() && !ctx.sentencia()) {
      return this.visit(ctx.salida());
    }
    if (ctx.terminar()) {
      return this.visit(ctx.terminar());
    }
    if (ctx.salida() && ctx.sentencia()) {
      return this.visit(ctx.salida()) + "\n" + this.visit(ctx.sentencia());
    }
    return "";
  }

  visitSalida(ctx) {
    const cadena = ctx.cadena().getText(); 
    return `console.log(${cadena});`;
  }

  visitTerminar(ctx) {
    return "break;";
  }
}