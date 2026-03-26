public class Produto {

    public String nome;
    public double preco;
    public int quantidade;

    public double totalValorEstoque(){
        return preco*quantidade;
    }

    public void adicionarProdutos(int quantidade){
        this.quantidade /*atributo da classe*/ += /*parâmetro da função*/ quantidade;

    }

    public void removerProdutos(int quantidade){
        this.quantidade -= quantidade;
    }

    public void info(){
        System.out.println("Produto: " + nome);
        System.out.println("Preço: R$" + preco);
        System.out.println("Quantidade: " + quantidade + "unidades");
        totalValorEstoque();
    }

    public String toString(){
        return nome+", R$"+String.format("%.2f", preco)+ ", " +quantidade+ " unidades, Total: R$" + String.format("%.2f",totalValorEstoque());
    }
}
