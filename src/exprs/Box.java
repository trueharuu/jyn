public class Box<T> {
    private T ptr;

    public Box(T ptr) {
        this.ptr = ptr;
    }

    public static Box<Integer> from(int t) {
        return new Box<>(t);
    }

    public static Box<Character> from(char t) {
        return new Box<>(t);
    }

    public static Box<Boolean> from(boolean t) {
        return new Box<>(t);
    }

    public static Box<Byte> from(byte t) {
        return new Box<>(t);
    }

    public static Box<Short> from(short t) {
        return new Box<>(t);
    }

    public static Box<Long> from(long t) {
        return new Box<>(t);
    }

    public static Box<Float> from(float t) {
        return new Box<>(t);
    }

    public static Box<Double> from(double t) {
        return new Box<>(t);
    }

    public T intoInner() {
        return this.ptr;
    }

    public Box<T> write(T t) {
        this.ptr = t;
        return this;
    }
}
