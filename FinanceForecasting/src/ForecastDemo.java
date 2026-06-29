

public class ForecastDemo {

    public static void main(String[] args) {

        double currentValue = 10000.0;
        double growthRate = 0.10;   // 10%
        int years = 5;

        double futureValue = FinancialForecast.predictValue(currentValue, growthRate, years);

        System.out.println("Current Value : " + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : %.2f%n", futureValue);
    }
}