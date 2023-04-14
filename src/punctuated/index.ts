import {None, Option, Vec, usize} from "@rqft/rust"
import type {ops} from "@rqft/rust"

export class Punctuated<T, P> {
    private inner: Vec<T> = Vec.new();
    private last: Option<T> = None;
    public constructor() {}
    public isEmpty(): boolean {
        return this.inner.len().eq(0) && this.last.is_none();
    }

    public len(): usize {
        return this.inner.len().add((this.last.map<number, ops.FnOnce<[T], number>>(()=>1).unwrap_or(0)));
    }

    public first(): Option<T> {
        return this.inner.iter().next();
    }
} 