class Emp{
    private int age;
    private String name;
    private static String company = "Amazon";

    public void Emp(int a, String n){
        age = a;
        name = n;
    }
    public void EmpShow(){
        System.out.println("Age : "+age+", Name : "+name+", Company : "+company);
    }
}

public class StaticDemo2 {
    public static void main(String[] args){
        Emp p1 = new Emp();
        Emp p2 = new Emp();

        p1.Emp(32, "Sriman");
        p2.Emp(54, "Sibu");

        p1.EmpShow();
        p2.EmpShow();

    }
}
