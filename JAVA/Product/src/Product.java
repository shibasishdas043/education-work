public class Product {
    private int id;
    private String name;
    private double price;

    public Product(int i, String n, double p){
        id = i;
        name = n;
        price = p;
    }
//    public void setId(int i){
//        if (i<0){
//            System.out.println("Id cant Be Negative");
//            return;
//        }
//        id = i;
//    }
    public void setName(String n){
        name = n;
    }
//    public void setPrice(double p){
//        if (p <= 0){
//            System.out.println("Price Cant Be Negative");
//            return;
//        }
//        price = p;
//    }

    public int getId(){
        return id;
    }
    public String getName() {
        return name;
    }
    public double getPrice() {
        return price;
    }
}
