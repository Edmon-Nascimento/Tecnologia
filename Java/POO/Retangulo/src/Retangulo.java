public class Retangulo {
    public double base;
    public double altura;

    public double Diagonal(){
        return Math.sqrt(Math.pow(base,2)+Math.pow(altura,2));
    }

    public double Area(){
        return base*altura;
    }

    public double Perimetro(){
        return 2*base + 2*altura;
    }
}
