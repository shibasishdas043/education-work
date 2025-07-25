//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Bank {
    private String name;
    private int ifsc;
    private double amount;

    public Bank(String n, int i, double a){
        name = n;
        ifsc = i;
        amount = a;

        System.out.println("Constructor Called ..");
    }
    public void showBank(){
        System.out.println("Name : "+name);
        System.out.println("Ifsc : "+ifsc);
        System.out.println("Amount : "+amount);
    }

}