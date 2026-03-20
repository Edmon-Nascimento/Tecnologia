import java.util.Locale;
import java.util.Scanner;

public class Program_poo {
    public static void main (String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Triangle x,y;
        x = new Triangle();
        y = new Triangle();

        System.out.println("Digite as medidas do triângulo X: ");
        x.a = sc.nextDouble();
        x.b = sc.nextDouble();
        x.c = sc.nextDouble();

        System.out.println("Digite as medidas do triângulo Y: ");
        y.a = sc.nextDouble();
        y.b = sc.nextDouble();
        y.c = sc.nextDouble();

        double areaX = x.area();
        double areaY = y.area();

        System.out.println("Área do triângulo X: " + String.format("%.4f", areaX));
        System.out.println("Área do triângulo Y: " + String.format("%.4f", areaY));

        if (areaX > areaY) {
            System.out.println("Triângulo X tem a maior área.");
        }else{
            System.out.println("Triângulo Y tem a maior área.");
        }

        sc.close();
    }
}
