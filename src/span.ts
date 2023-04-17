export class Span {
  constructor(private readonly _s: number, private readonly _e: number) {}
  public start(): number {
    return this._s;
  }

  public end(): number {
    return this._e;
  }

  /** This assumes `other.end() > this.end()`. */
  public join(other: Span): Span {
    return new Span(this._s, other._e);
  }
}