// Generated from grammar/SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by SimpleLangParser.

export default class SimpleLangVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by SimpleLangParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SimpleLangParser#expression.
	visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}



}