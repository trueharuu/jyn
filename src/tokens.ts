import { Span } from "./span";

export abstract class Token<T = string> {
  constructor(private src: string, private src_span: Span) {}
  public text(): string { return this.src; }
  public span(): Span { return this.src_span; }
  public value(): T { return this.text() as T; };
}

module tokens {
  export class Ident extends Token<string> {
    public value(): string { return this.text() }
  }

  export class StringLiteral extends Token<string> {
    public value(): string { return this.text().slice(0, this.text().length - 1); }
  }

  export class NumberLiteral extends Token<number> {
    public value(): number { return Number.parseFloat(this.text()); }
  }

  export class BigIntLiteral extends Token<bigint> {
    public value(): bigint { return BigInt(this.text()); }
  }

  // ts specific

  export class Type extends Token<"type"> {}
  

}