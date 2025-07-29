
class This{
    private int roll;
    private String name;
    private double per;

    public void setThis(int roll, String name, double per){
        this.roll = roll;
        this.name = name;
        this.per = per;
    }
    public void showThis(){
        System.out.println("Roll : "+this.roll+", Name : "+this.name+", Persentage : "+per);
    }
}

public class UseThis {
    public static void main(String[] args){
        This p = new This();

        p.setThis(10, "Subham", 53.02);
        p.showThis();
    }
}
