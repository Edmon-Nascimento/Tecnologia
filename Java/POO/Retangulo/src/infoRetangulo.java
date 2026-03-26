import java.util.Locale;
import java.util.Scanner;

public class infoRetangulo {

    static void main() {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Retangulo retangulo = new Retangulo();

        System.out.println("Informe o valor da base do retângulo: ");
        retangulo.base = sc.nextDouble();

        System.out.println("Informe o valor da altura do retângulo: ");
        retangulo.altura = sc.nextDouble();

        System.out.println("Area: "+ retangulo.Area());
        System.out.println("Perímetro: "+ retangulo.Perimetro());
        System.out.println("Diagonal: "+ retangulo.Diagonal());

    }
}
