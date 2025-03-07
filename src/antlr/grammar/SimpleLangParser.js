// Generated from grammar/SimpleLang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0010\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018",
    "\n\u0003\f\u0003\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0002\u0003",
    "\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003\u0002",
    "\u0005\u0006\u0002\u001d\u0002\u0006\u0003\u0002\u0002\u0002\u0004\u000f",
    "\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b",
    "\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002\t\n\b\u0003",
    "\u0001\u0002\n\u0010\u0007\t\u0002\u0002\u000b\f\u0007\u0007\u0002\u0002",
    "\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\b\u0002\u0002\u000e\u0010",
    "\u0003\u0002\u0002\u0002\u000f\t\u0003\u0002\u0002\u0002\u000f\u000b",
    "\u0003\u0002\u0002\u0002\u0010\u0019\u0003\u0002\u0002\u0002\u0011\u0012",
    "\f\u0006\u0002\u0002\u0012\u0013\t\u0002\u0002\u0002\u0013\u0018\u0005",
    "\u0004\u0003\u0007\u0014\u0015\f\u0005\u0002\u0002\u0015\u0016\t\u0003",
    "\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0006\u0017\u0011\u0003\u0002",
    "\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002",
    "\u0002\u0002\u0005\u000f\u0017\u0019"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "INT", 
                             "WS" ];
    static ruleNames = [ "prog", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.expression(0);
	        this.state = 5;
	        this.match(SimpleLangParser.EOF);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SimpleLangParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SimpleLangParser.INT:
	            this.state = 8;
	            this.match(SimpleLangParser.INT);
	            break;
	        case SimpleLangParser.T__4:
	            this.state = 9;
	            this.match(SimpleLangParser.T__4);
	            this.state = 10;
	            this.expression(0);
	            this.state = 11;
	            this.match(SimpleLangParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 21;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SimpleLangParser.RULE_expression);
	                    this.state = 15;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 16;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===SimpleLangParser.T__0 || _la===SimpleLangParser.T__1)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 17;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SimpleLangParser.RULE_expression);
	                    this.state = 18;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 19;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===SimpleLangParser.T__2 || _la===SimpleLangParser.T__3)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 20;
	                    this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 25;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.T__0 = 1;
SimpleLangParser.T__1 = 2;
SimpleLangParser.T__2 = 3;
SimpleLangParser.T__3 = 4;
SimpleLangParser.T__4 = 5;
SimpleLangParser.T__5 = 6;
SimpleLangParser.INT = 7;
SimpleLangParser.WS = 8;

SimpleLangParser.RULE_prog = 0;
SimpleLangParser.RULE_expression = 1;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_prog;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(SimpleLangParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_expression;
        this.op = null; // Token
    }

	INT() {
	    return this.getToken(SimpleLangParser.INT, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.ProgContext = ProgContext; 
SimpleLangParser.ExpressionContext = ExpressionContext; 
