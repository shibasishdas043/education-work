
class Data{
    static {
        System.out.println("Static block executed ..");
    }
    public Data(){
        System.out.println("constructor called .. ");
    }
}

public class UseData {
    public static void main(String[] args){
        Data p = new Data();
    }
}
