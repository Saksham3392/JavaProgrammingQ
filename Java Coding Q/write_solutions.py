import re
import json

solutions = {
    "q17_student_details": """import java.util.Scanner;

class Student {
    String name;
    int marks;
    static int studentCount = 0;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
        studentCount++;
    }

    void displayDetails() {
        System.out.println("Student Name: " + this.name);
        System.out.println("Marks: " + this.marks);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        for (int i = 0; i < n; i++) {
            String name = scanner.next();
            int marks = scanner.nextInt();
            Student s = new Student(name, marks);
            s.displayDetails();
        }
        System.out.println("Total Students: " + Student.studentCount);
    }
}""",
    "q18_employee_salary_calculation_using_method_overloading": """import java.util.Scanner;

class Employee {
    int empId;
    String empName;
    double basicSalary;

    double calculateSalary(double basicSalary) {
        return basicSalary;
    }

    double calculateSalary(double basicSalary, double bonus) {
        return basicSalary + bonus;
    }

    double calculateSalary(double basicSalary, double bonus, double allowance) {
        return basicSalary + bonus + allowance;
    }

    void displayDetails(double calculatedSalary) {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Calculated Salary: " + calculatedSalary);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNext()) return;
        
        scanner.next(); scanner.next(); scanner.next(); // Enter Employee ID:
        int id = scanner.nextInt();
        
        scanner.next(); scanner.next(); scanner.next(); // Enter Employee Name:
        String name = scanner.next();
        
        scanner.next(); scanner.next(); scanner.next(); // Enter Basic Salary:
        double basic = scanner.nextDouble();
        
        scanner.next(); scanner.next(); // Enter Bonus:
        double bonus = scanner.nextDouble();
        
        scanner.next(); scanner.next(); // Enter Allowance:
        double allowance = scanner.nextDouble();
        
        Employee emp = new Employee();
        emp.empId = id;
        emp.empName = name;
        emp.basicSalary = basic;
        
        double finalSal = emp.calculateSalary(basic, bonus, allowance);
        emp.displayDetails(finalSal);
    }
}""",
    "q19_constructor_overloading_ice_cream_parlour": """import java.util.Scanner;

class IceCream {
    String flavor;
    int quantity;
    double price;

    IceCream() {
        this.flavor = "Vanilla";
        this.quantity = 1;
        this.price = 50.0;
    }

    IceCream(String flavor) {
        this.flavor = flavor;
        this.quantity = 1;
        this.price = 50.0;
    }

    IceCream(String flavor, int quantity, double price) {
        this.flavor = flavor;
        this.quantity = quantity;
        this.price = price;
    }

    void displayDetails() {
        System.out.println("Flavor: " + flavor);
        System.out.println("Quantity: " + quantity);
        System.out.println("Price: " + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        for (int i = 0; i < n; i++) {
            int choice = scanner.nextInt();
            if (choice == 1) {
                new IceCream().displayDetails();
            } else if (choice == 2) {
                String f = scanner.next();
                if(scanner.hasNextLine()) {
                    String rest = scanner.nextLine();
                    if(rest.trim().length() > 0) f += rest;
                }
                new IceCream(f.trim()).displayDetails();
            } else if (choice == 3) {
                scanner.nextLine();
                String line = scanner.nextLine().trim();
                String[] parts = line.split(" ");
                double p = Double.parseDouble(parts[parts.length - 1]);
                int q = Integer.parseInt(parts[parts.length - 2]);
                String f = "";
                for(int k = 0; k < parts.length - 2; k++) {
                    f += parts[k] + (k == parts.length - 3 ? "" : " ");
                }
                new IceCream(f, q, p).displayDetails();
            }
        }
    }
}""",
    "q20_method_overloading_cse_department_events": """import java.util.Scanner;

class Event {
    int calculatePoints(int participation) {
        return participation;
    }

    int calculatePoints(int participation, int quiz) {
        return participation + quiz;
    }

    int calculatePoints(int participation, int quiz, int presentation) {
        return participation + quiz + presentation;
    }

    void displayResult(int pts) {
        System.out.println("Total Points: " + pts);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int choice = scanner.nextInt();
        Event ev = new Event();
        if (choice == 1) {
            int p = scanner.nextInt();
            ev.displayResult(ev.calculatePoints(p));
        } else if (choice == 2) {
            int p = scanner.nextInt();
            int q = scanner.nextInt();
            ev.displayResult(ev.calculatePoints(p, q));
        } else if (choice == 3) {
            int p = scanner.nextInt();
            int q = scanner.nextInt();
            int pr = scanner.nextInt();
            ev.displayResult(ev.calculatePoints(p, q, pr));
        }
    }
}""",
    "q21_classes_and_objects_mechanical_worker_details": """import java.util.Scanner;

class Worker {
    int workerId;
    String workerName;
    double dailyWage;

    void acceptDetails(Scanner sc) {
        workerId = sc.nextInt();
        workerName = sc.next();
        dailyWage = sc.nextDouble();
    }

    void displayDetails() {
        System.out.println("Worker ID: " + workerId);
        System.out.println("Worker Name: " + workerName);
        System.out.println("Daily Wage: " + dailyWage);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        Worker w = new Worker();
        w.acceptDetails(scanner);
        w.displayDetails();
    }
}""",
    "q22_college_details_using_static_keyword": """import java.util.Scanner;

class Student {
    String studentName;
    static String collegeName;
    static String collegeAddress;

    void acceptStudentDetails(String name) {
        studentName = name;
    }

    static void acceptCollegeDetails(String cName, String cAddress) {
        collegeName = cName;
        collegeAddress = cAddress;
    }

    void displayDetails() {
        System.out.println("Student Name: " + studentName);
        System.out.println("College Name: " + collegeName);
        System.out.println("College Address: " + collegeAddress);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLine()) return;
        String cName = scanner.nextLine().trim();
        String cAddr = scanner.nextLine().trim();
        Student.acceptCollegeDetails(cName, cAddr);
        
        int n = Integer.parseInt(scanner.nextLine().trim());
        for (int i = 0; i < n; i++) {
            String sName = scanner.nextLine().trim();
            Student s = new Student();
            s.acceptStudentDetails(sName);
            s.displayDetails();
        }
    }
}""",
    "q23_constructor_overloading_student_football_players": """import java.util.Scanner;

class Player {
    String playerName;
    int age;
    int jerseyNumber;

    Player() {
        this.playerName = "Unknown";
        this.age = 18;
        this.jerseyNumber = 0;
    }

    Player(String name) {
        this.playerName = name;
        this.age = 18;
        this.jerseyNumber = 0;
    }

    Player(String name, int age, int jerseyNumber) {
        this.playerName = name;
        this.age = age;
        this.jerseyNumber = jerseyNumber;
    }

    void displayDetails() {
        System.out.println("Player Name: " + playerName);
        System.out.println("Age: " + age);
        System.out.println("Jersey Number: " + jerseyNumber);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        for (int i = 0; i < n; i++) {
            int choice = scanner.nextInt();
            if (choice == 1) {
                new Player().displayDetails();
            } else if (choice == 2) {
                String name = scanner.next();
                new Player(name).displayDetails();
            } else if (choice == 3) {
                String name = scanner.next();
                int age = scanner.nextInt();
                int j = scanner.nextInt();
                new Player(name, age, j).displayDetails();
            }
        }
    }
}""",
    "q24_method_overloading_calculator": """import java.util.Scanner;

class Calculator {
    int calculate(int a, int b) {
        return a + b;
    }

    double calculate(double a, double b) {
        return a + b;
    }

    int calculate(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int choice = scanner.nextInt();
        Calculator calc = new Calculator();
        if (choice == 1) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            System.out.println("Result: " + calc.calculate(a, b));
        } else if (choice == 2) {
            double a = scanner.nextDouble();
            double b = scanner.nextDouble();
            System.out.println("Result: " + calc.calculate(a, b));
        } else if (choice == 3) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int c = scanner.nextInt();
            System.out.println("Result: " + calc.calculate(a, b, c));
        }
    }
}""",
    "q25_check_number_is_palindrome_or_not": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int num = scanner.nextInt();
        int original = num;
        int rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        if (original == rev) System.out.println("Palindrome");
        else System.out.println("Not a Palindrome");
    }
}""",
    "q26_check_number_is_prime_or_not": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int num = scanner.nextInt();
        if (num <= 1) {
            System.out.println("Not Prime");
            return;
        }
        boolean prime = true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) { prime = false; break; }
        }
        if (prime) System.out.println("Prime");
        else System.out.println("Not Prime");
    }
}""",
    "q27_search_an_element_in_an_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        int search = scanner.nextInt();
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] == search) {
                System.out.println("Element Found at Position " + (i + 1));
                found = true;
                break;
            }
        }
        if (!found) System.out.println("Element Not Found");
    }
}""",
    "q28_count_even_and_odd_numbers_in_an_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int even = 0, odd = 0;
        for (int i = 0; i < n; i++) {
            if (scanner.nextInt() % 2 == 0) even++;
            else odd++;
        }
        System.out.println("Even Count: " + even);
        System.out.println("Odd Count: " + odd);
    }
}""",
    "q29_count_positive_and_negative_numbers_in_an_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int pos = 0, neg = 0;
        for (int i = 0; i < n; i++) {
            int val = scanner.nextInt();
            if (val > 0) pos++;
            else if (val < 0) neg++;
        }
        System.out.println("Positive Count: " + pos);
        System.out.println("Negative Count: " + neg);
    }
}""",
    "q30_find_the_sum_of_array_elements": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += scanner.nextInt();
        }
        System.out.println("Sum = " + sum);
    }
}""",
    "q31_reverse_an_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        for (int i = n - 1; i >= 0; i--) {
            System.out.print(arr[i] + (i == 0 ? "" : " "));
        }
        System.out.println();
    }
}""",
    "q32_copy_elements_from_one_array_to_another": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        int[] arr1 = new int[n];
        int[] arr2 = new int[n];
        System.out.println("Original Array:");
        for (int i = 0; i < n; i++) {
            arr1[i] = scanner.nextInt();
            arr2[i] = arr1[i];
            System.out.print(arr1[i] + (i == n - 1 ? "" : " "));
        }
        System.out.println("\\nCopied Array:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr2[i] + (i == n - 1 ? "" : " "));
        }
        System.out.println();
    }
}""",
    "q33_print_diagonal_elements_from_a_2d_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int rows = scanner.nextInt();
        int cols = scanner.nextInt();
        int[][] arr = new int[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                arr[i][j] = scanner.nextInt();
            }
        }
        for (int i = 0; i < Math.min(rows, cols); i++) {
            System.out.print(arr[i][i] + (i == Math.min(rows, cols) - 1 ? "" : " "));
        }
        System.out.println();
    }
}""",
    "q34_find_the_sum_of_elements_in_a_2d_array": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int rows = scanner.nextInt();
        int cols = scanner.nextInt();
        int sum = 0;
        for (int i = 0; i < rows * cols; i++) {
            sum += scanner.nextInt();
        }
        System.out.println("Sum = " + sum);
    }
}""",
    "q35_maximum_and_minimum_element_in_arraylist": """import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(scanner.nextInt());
        }
        int max = Collections.max(list);
        int min = Collections.min(list);
        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
    }
}""",
    "q36_find_second_largest_element_in_arraylist": """import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) list.add(scanner.nextInt());
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        for (int num : list) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num != max) {
                secondMax = num;
            }
        }
        if (secondMax == Integer.MIN_VALUE) secondMax = max;
        System.out.println(secondMax);
    }
}""",
    "q37_sum_of_arraylist_elements": """import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int val = scanner.nextInt();
            list.add(val);
            sum += val;
        }
        System.out.println(sum);
    }
}""",
    "q38_count_even_and_odd_numbers_from_arraylist": """import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        int even = 0, odd = 0;
        for (int i = 0; i < n; i++) {
            int val = scanner.nextInt();
            list.add(val);
            if (val % 2 == 0) even++;
            else odd++;
        }
        System.out.println(even);
        System.out.println(odd);
    }
}""",
    "q39_reverse_arraylist": """import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int n = scanner.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) list.add(scanner.nextInt());
        Collections.reverse(list);
        for (int i = 0; i < n; i++) {
            System.out.print(list.get(i) + (i == n - 1 ? "" : " "));
        }
        System.out.println();
    }
}""",
    "q40_invalid_number_conversion": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLine()) return;
        String line = scanner.nextLine().trim();
        try {
            int amount = Integer.parseInt(line);
            System.out.println("Amount: " + amount);
        } catch (NumberFormatException e) {
            System.out.println("Invalid Amount");
        }
    }
}""",
    "q41_age_validation": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int age = scanner.nextInt();
        try {
            if (age < 18) throw new Exception("Not Eligible for Ride");
            System.out.println("Eligible for Ride");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}""",
    "q42_bank_transaction": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int balance = scanner.nextInt();
        int amount = scanner.nextInt();
        try {
            if (amount > balance) {
                System.out.println("Insufficient Balance");
            } else {
                System.out.println("Withdrawal Successful");
            }
        } finally {
            System.out.println("Transaction Completed");
        }
    }
}""",
    "q43_convert_string_to_integer": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLine()) return;
        String str = scanner.nextLine().trim();
        try {
            int val = Integer.parseInt(str);
            System.out.println("Tickets: " + val);
        } catch (NumberFormatException e) {
            System.out.println("Invalid Ticket Count");
        }
    }
}""",
    "q44_safe_array_access": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNext()) return;
        try {
            int n = Integer.parseInt(scanner.next());
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(scanner.next());
            }
            int index = Integer.parseInt(scanner.next());
            System.out.println("Quantity: " + arr[index]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid Index");
        } catch (NumberFormatException e) {
            System.out.println("Invalid Input");
        } catch (Exception e) {
            System.out.println("Invalid Input");
        }
    }
}""",
    "q45_atm_withdrawal": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int balance = scanner.nextInt();
        int amount = scanner.nextInt();
        try {
            if (amount > balance) throw new Exception("Invalid Withdrawal");
            System.out.println("Withdrawal Successful");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}""",
    "q46_validate_marks": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int marks = scanner.nextInt();
        try {
            if (marks < 0 || marks > 100) throw new Exception("Invalid Marks");
            System.out.println("Valid Marks");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}""",
    "q47_transaction_completion": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int balance = scanner.nextInt();
        int amount = scanner.nextInt();
        try {
            if (amount > balance) System.out.println("Insufficient Balance");
            else System.out.println("Payment Successful");
        } finally {
            System.out.println("Transaction Process Completed");
        }
    }
}""",
    "q48_fruit_selling_system": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextLine()) return;
        try {
            int price = Integer.parseInt(scanner.nextLine().trim());
            int quantity = Integer.parseInt(scanner.nextLine().trim());
            System.out.println("Total Cost: " + (price * quantity));
        } catch (NumberFormatException e) {
            System.out.println("Invalid Quantity");
        } finally {
            System.out.println("Transaction Completed");
        }
    }
}""",
    "q49_bank_account_validation": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!scanner.hasNextInt()) return;
        int amount = scanner.nextInt();
        try {
            validateWithdrawal(amount);
            System.out.println("Valid Withdrawal");
        } catch (Exception e) {
            System.out.println("Invalid Withdrawal");
        } finally {
            System.out.println("Transaction Completed");
        }
    }
    
    static void validateWithdrawal(int amount) throws Exception {
        if (amount <= 0) {
            throw new Exception("Invalid");
        }
    }
}"""
}

with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

for qid, code in solutions.items():
    # Find the problem definition in app.js
    # We look for:
    # id: "q17_student_details",
    # ...
    # solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    
    # We can just replace the specific string after finding the id.
    # To be safe, we will use regex to find the block for the problem and replace its solutionCode.
    pattern = r'(id:\s*"' + qid + r'".*?solutionCode:\s*)"([^"]*Solution not provided[^"]*)"'
    replacement = r'\1' + json.dumps(code)
    app_content = re.sub(pattern, replacement, app_content, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_content)

print("Solutions written to app.js!")
