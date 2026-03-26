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

        //Toda classe é subclasse da classe object
        //Isso quer dizer que dá pra acessar parâmetros que não estão definidos diretamente na subclasse mas estão na classe object

        System.out.println(produto);
        //Resultado sem formatação se a função toString não estiver declarada

        System.out.println("Informe o número de produtos para adicionar ao estoque: ");
        int quantidade = sc.nextInt();
        produto.adicionarProdutos(quantidade);

        System.out.println(produto);

        System.out.println("Informe o número de produtos para remover do estoque: ");
        quantidade = sc.nextInt();
        produto.removerProdutos(quantidade);

        sc.close();
    }
}
