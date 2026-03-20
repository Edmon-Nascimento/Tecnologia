import java.util.Locale;
import java.util.Scanner;

public class InfoProduto {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Produto produto = new Produto();
        System.out.println("Digite os dados do produto.");

        System.out.println("Nome: ");
        produto.nome = sc.nextLine();

        System.out.println("Preço: ");
        produto.preco = sc.nextDouble();

        System.out.println("Quantidade: ");
        produto.quantidade = sc.nextInt();



        sc.close();
    }
}
