import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main (String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        double xA, xB, xC, yA, yB, yC;

        System.out.println("Digite as medidas do triângulo X: ");
        xA = sc.nextDouble();
        xB = sc.nextDouble();
        xC = sc.nextDouble();

        System.out.println("Digite as medidas do triângulo Y: ");
        yA = sc.nextDouble();
        yB = sc.nextDouble();
        yC = sc.nextDouble();

        double p = (xA + xB + xC) / 2;
        double areaX = Math.sqrt(p * (p - xA) * (p - xB) * (p - xC));

        p = (yA + yB + yC) / 2;
        double areaY = Math.sqrt(p * (p - yA) * (p - yB) * (p - yC));

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
