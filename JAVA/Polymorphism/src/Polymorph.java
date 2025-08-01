
public class Polymorph {

    public void area(double radius){
        double ar = Math.PI*Math.pow(radius,2);

        System.out.println("Radius Of The Circle : "+ar);
    }
    public void area(int side){
        int ar = side*side;

        System.out.println("Area Of The Square : "+ar);
    }
    public void area(int len, int breadth){
        int ar = len*breadth;

        System.out.println("Area Of The Rectangle : "+ar);
    }


}

