
public class CallByValue {

    public static void main(String[] args) {
        int a=5, b=10;

        System.out.println("Before a : "+a);
        System.out.println("Before b : "+b);

        increment(a, b);

        System.out.println("After a : "+a);
        System.out.println("After b : "+b);
    }

    public static void increment(int a, int b){
        a=a+5;
        b=b+5;
    }

}
