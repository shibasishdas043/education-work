public class GreetingDriver {
    public static void main(String[] args){
        Language l = new Hindi();
        l.greeting();

        l = new English();
        l.greeting();
    }
}
