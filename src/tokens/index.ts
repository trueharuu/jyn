export class Span {
    constructor(private s: number, private e: number) {}

    public start(): number {
        return this.s;
    }

    public end(): number {
        return this.e;
    }
}

export class Spanned {
    span: Span
}

export class DelimSpan {
    public constructor(private start_delim: Span, private body: Span, private end_delim: Span) {}

    public open(): Span {
        return this.start_delim;
    }

    public close(): Span {
        return this.end_delim;
    }

    public join(): Span {
        return new Span(this.start_delim.start(), this.end_delim.end());
    }

}
export class Token extends Spanned {};
export class BinOp extends Token {};

/** any */
export class Any extends Token {}
/** await */
export class Await extends Token {}
/** boolean */
export class Bool extends Token {}
/** break */
export class Break extends Token {}
/** case */
export class Case extends Token {}
/** catch */
export class Catch extends Token {}
/** class */
export class Class extends Token {}
/** const */
export class Const extends Token {}
/** continue */
export class Continue extends Token {}
/** debugger */
export class Debugger extends Token {}
/** default */
export class Default extends Token {}
/** delete */
export class Delete extends Token {}
/** do */
export class Do extends Token {}
/** else */
export class Else extends Token {}
/** enum */
export class Enum extends Token {}
/** export */
export class Export extends Token {}
/** extends */
export class Extends extends Token {}
/** declare */
export class Declare extends Token {}
/** false */
export class False extends Token {}
/** finally */
export class Finally extends Token {}
/** for */
export class For extends Token {}
/** function */
export class Fn extends Token {}
/** constructor */
export class Constructor extends Token {}
/** get */
export class Get extends Token {}
/** if */
export class If extends Token {}
/** implements */
export class Implements extends Token {}
/** import */
export class Import extends Token {}
/** in */
export class In extends Token {}
/** instanceof */
export class InstanceOf extends Token {}
/** interface */
export class Interface extends Token {}
/** let */
export class Let extends Token {}
/** module */
export class Module extends Token {}
/** new */
export class New extends Token {}
/** number */
export class Number extends Token {}
/** null */
export class Null extends Token {}
/** package */
export class Package extends Token {}
/** private */
export class Private extends Token {}
/** protected */
export class Protected extends Token {}
/** public */
export class Public extends Token {}
/** return */
export class Return extends Token {}
/** set */
export class Set extends Token {}
/** static */
export class Static extends Token {}
/** string */
export class String extends Token {}
/** super */
export class Super extends Token {}
/** switch */
export class Switch extends Token {}
/** this */
export class This extends Token {}
/** throw */
export class Throw extends Token {}
/** true */
export class True extends Token {}
/** try */
export class Try extends Token {}
/** typeof */
export class TypeOf extends Token {}
/** var */
export class Var extends Token {}
/** void */
export class Void extends Token {}
/** with */
export class With extends Token {}
/** while */
export class While extends Token {}
/** Yield */
export class Yield extends Token {}
/** ; */
export class Semi extends Token {}
/** ( */
export class LeftParen extends Token {}
/** ) */
export class RightParen extends Token {}
/** [ */
export class LeftBracket extends Token {}
/** ] */
export class RightBracket extends Token {}
/** { */
export class LeftBrace extends Token {}
/** } */
export class RightBrace extends Token {}
/** , */
export class Comma extends Token {}
/** = */
export class Eq extends Token {}
/** += */
export class PlusEq extends BinOp {}
/** -= */
export class MinusEq extends BinOp {}
/** *= */
export class StarEq extends BinOp {}
/** /= */
export class SlashEq extends BinOp {}
/** %= */
export class PercentEq extends BinOp {}
/** &= */
export class AndEq extends BinOp {}
/** ^= */
export class CaretEq extends BinOp {}
/** |= */
export class OrEq extends BinOp {}
/** <<= */
export class ShlEq extends BinOp {}
/** >>= */
export class ShrEq extends BinOp {}
/** >>>= */
export class UshlEq extends BinOp {}
/** ? */
export class Question extends Token {}
/** : */
export class Colon extends Token {}
/** || */
export class OrOr extends BinOp {}
/** && */
export class AndAnd extends BinOp {}
/** | */
export class Or extends BinOp {}
/** ^ */
export class Caret extends BinOp {}
/** & */
export class And extends BinOp {}
/** == */
export class EqEq extends BinOp {}
/** != */
export class Ne extends BinOp {}
/** === */
export class EqEqEq extends BinOp {}
/** !== */
export class NotEqEq extends BinOp {}
/** < */
export class Lt extends BinOp {}
/** <= */
export class Le extends BinOp {}
/** > */
export class Gt extends BinOp {}
/** > */
export class Ge extends BinOp {}
/** << */
export class Shl extends BinOp {}
/** >> */
export class Shr extends BinOp {}
/** >>> */
export class Ushr extends BinOp {}
/** + */
export class Plus extends BinOp {}
/** - */
export class Minus extends BinOp {}
/** * */
export class Star extends BinOp {}
/** / */
export class Slash extends BinOp {}
/** % */
export class Percent extends BinOp {}
/** % */
export class Tilde extends Token {}
/** ! */
export class Not extends Token {}
/** ++ */
export class PlusPlus extends Token {}
/** -- */
export class MinusMinus extends Token {}
/** . */
export class Dot extends Token {}
/** ... */
export class DotDotDot extends Token {}
/** error */
export class Error extends Token {}
/** end of file */
export class EndOfFile extends Token {}
/** => */
export class FatArrow extends Token {}
// /** abc */
// export class Identifier extends Token {}
// /** "abc" */
// export class StringLiteral extends Token {}
// /** /abc/ */
// export class RegularExpressionLiteral extends Token {}
// /** 123 */
// export class NumberLiteral extends Token {}
/**   */
export class Whitespace extends Token {}
/** // */
export class Comment extends Token {}
/** &&= */
export class AndAndEq extends Token {}
/** ||= */
export class OrOrEq extends Token {}
/** ?? */
export class QuestionQuestion extends Token {}
/** ??= */
export class QuestionQuestionEq extends Token {}




