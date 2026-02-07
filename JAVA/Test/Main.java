class Test{
    private int a= 4;
    private int b= 1;
    void getSum(int a, int b){
        a=a;
        b=b;
        System.out.println(this.a+this.b);
    }
}
public class Main{
    public static void main(String args[]){
        Test T = new Test();
        T.getSum(3,5);
    }
}