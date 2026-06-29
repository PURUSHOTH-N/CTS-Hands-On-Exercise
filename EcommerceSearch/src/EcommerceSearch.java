public class EcommerceSearch {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int searchId = 104;

        System.out.println("Linear Search:");
        Product p1 = LinearSearch.search(products, searchId);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        System.out.println();

        System.out.println("Binary Search:");
        Product p2 = BinarySearch.search(products, searchId);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");
    }
}