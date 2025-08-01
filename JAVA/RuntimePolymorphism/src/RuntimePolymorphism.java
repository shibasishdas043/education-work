public class RuntimePolymorphism {
    public static void main(String[] args){

        Polymorph1 p = new Polymorph1();
        p.show();
        p.display();

        p = new Polymorph2();
        p.show();
        p.display();
    }
}
