public class UseProduct {
    public static void main(String[] args) {
        Product p = new Product(4635, "Hello", 5456.54);

        System.out.println("Before ..");
        System.out.println("Id : "+p.getId());
        System.out.println("Name : "+p.getName());
        System.out.println("Price : "+p.getPrice());

        p.setName("Maggi");

        System.out.println("After ..");
        System.out.println("Id : "+p.getId());
        System.out.println("Name : "+p.getName());
        System.out.println("Price : "+p.getPrice());

    }
}
