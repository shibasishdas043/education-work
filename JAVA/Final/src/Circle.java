public class Circle {

    private int rad;
    private final double pi = 3.14;

    public Circle(int r){
        rad = r;
    }
    public void show(){
        System.out.println("Radius Is : "+rad);
        System.out.println("Pi Is : "+pi);
    }
}
