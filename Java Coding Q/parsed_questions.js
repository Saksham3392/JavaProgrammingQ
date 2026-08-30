
  ,
  q17_student_details: {
    id: "q17_student_details",
    num: "17",
    title: "Student Details",
    tag: "OOP",
    subtitle: "",
    brief: "Write a Java program to create a Student class that stores student details and demonstrates the use of the this and static keywords. The class should contain the following data members: \u2022 String name \u2022 int marks \u2022 static int studentCount Create a parameterized constructor that accepts the student's name and marks and uses the this keyword to initialize the instance variables. The constructor should also increment the static studentCount variable whenever a new student object is created. Create a displayDetails() method to display the student's name and marks. In the main() method, create multiple student objects, display their details, and finally display the total number of students created using the static variable.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "3\nAman 85\nRahul 90\nPriya 78",
            "expected": "Student Name: Aman\nMarks: 85\nStudent Name: Rahul\nMarks: 90\nStudent Name: Priya\nMarks: 78\nTotal Students: 3",
            "explanation": "The parameterized constructor uses the this keyword to initialize the name and marks instance variables. Every time a student object is created, the static studentCount variable is increased by 1. Three objects are created, so the final value of studentCount is 3."
      },
      {
            "id": 2,
            "input": "2\nKaran 92\nSimran 88",
            "expected": "Student Name: Karan\nMarks: 92\nStudent Name: Simran\nMarks: 88\nTotal Students: 2",
            "explanation": "The this keyword refers to the current object and initializes its instance variables. The static variable studentCount is shared among all Student objects and keeps track of the total number of objects created."
      }
]
  }
  ,
  q18_employee_salary_calculation_using_method_overloading: {
    id: "q18_employee_salary_calculation_using_method_overloading",
    num: "18",
    title: "Employee Salary Calculation Using Method Overloading",
    tag: "OOP",
    subtitle: "",
    brief: "A company wants to calculate the salary of its employees using classes, objects, and method overloading in Java. Write a Java program to create a class named Employee with the following data members: \u2022 int empId \u2022 String empName \u2022 double basicSalary Create the following overloaded methods: \u2022 double calculateSalary(double basicSalary) \u2013 Calculate the salary using only the basic salary. \u2022 double calculateSalary(double basicSalary, double bonus) \u2013 Calculate the salary by adding the basic salary and bonus. \u2022 double calculateSalary(double basicSalary, double bonus, double allowance) \u2013 Calculate the salary by adding the basic salary, bonus, and allowance. Create a method: \u2022 void displayDetails() \u2013 Display the employee ID, employee name, and calculated salary. In the main() method, create an object of the Employee class, accept the employee details from the user, call the appropriate overloaded calculateSalary() method, and display the result. Formula: \u2022 Salary = Basic Salary \u2022 Salary = Basic Salary + Bonus \u2022 Salary = Basic Salary + Bonus + Allowance",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "Enter Employee ID: 101\nEnter Employee Name: Aman\nEnter Basic Salary: 30000\nEnter Bonus: 5000\nEnter Allowance: 3000",
            "expected": "Employee ID: 101\nEmployee Name: Aman\nCalculated Salary: 38000.0",
            "explanation": ""
      }
]
  }
  ,
  q19_constructor_overloading_ice_cream_parlour: {
    id: "q19_constructor_overloading_ice_cream_parlour",
    num: "19",
    title: "Constructor Overloading \u2013 Ice Cream Parlour",
    tag: "OOP",
    subtitle: "",
    brief: "An ice cream parlour wants to maintain details of different ice creams ordered by customers. Write a Java program to create an IceCream class that demonstrates constructor overloading. The class should contain the following data members: \u2022 String flavor \u2022 int quantity \u2022 double price Create the following overloaded constructors: \u2022 A default constructor that initializes the flavor as \"Vanilla\", quantity as 1, and price as 50.0. \u2022 A constructor that accepts the flavor and initializes the quantity as 1 and price as 50.0. \u2022 A constructor that accepts the flavor, quantity, and price and initializes all the data members. Create a displayDetails() method to display the ice cream flavor, quantity, and price. In the main() method, take the number of ice creams and their details from the user, create objects using the appropriate overloaded constructors, and display the details of each ice cream. Constraints: \u2022 1 \u2264 n \u2264 100 \u2022 1 \u2264 quantity \u2264 20 \u2022 0 < price \u2264 1000",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "3\n1\n2\nChocolate\n3\nStrawberry 2 80",
            "expected": "Flavor: Vanilla\nQuantity: 1\nPrice: 50.0\nFlavor: Chocolate\nQuantity: 1\nPrice: 50.0\nFlavor: Strawberry\nQuantity: 2\nPrice: 80.0",
            "explanation": "The first ice cream is created using the default constructor, so the default values are assigned. The second ice cream is created using the constructor that accepts only the flavor. Therefore, the quantity is 1 and the price is 50.0. The third ice cream is created using the constructor that accepts the flavor, quantity, and price."
      },
      {
            "id": 2,
            "input": "2\n2\nButterscotch\n3\nMango 3 120",
            "expected": "Flavor: Butterscotch\nQuantity: 1\nPrice: 50.0\nFlavor: Mango\nQuantity: 3\nPrice: 120.0",
            "explanation": "The first ice cream uses the one-parameter constructor, while the second ice cream uses the three-parameter constructor."
      },
      {
            "id": 3,
            "input": "1\n1",
            "expected": "Flavor: Vanilla\nQuantity: 1\nPrice: 50.0",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "2\n3\nChocolate 2 100\n3\nVanilla 4 60",
            "expected": "Flavor: Chocolate\nQuantity: 2\nPrice: 100.0\nFlavor: Vanilla\nQuantity: 4\nPrice: 60.0",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n2\nPistachio\n2\nStrawberry\n3\nBlack Currant 2 90",
            "expected": "Flavor: Pistachio\nQuantity: 1\nPrice: 50.0\nFlavor: Strawberry\nQuantity: 1\nPrice: 50.0\nFlavor: Black Currant\nQuantity: 2\nPrice: 90.0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "1\n3\nKulfi 5 75",
            "expected": "Flavor: Kulfi\nQuantity: 5\nPrice: 75.0",
            "explanation": ""
      }
]
  }
  ,
  q20_method_overloading_cse_department_events: {
    id: "q20_method_overloading_cse_department_events",
    num: "20",
    title: "Method Overloading \u2013 CSE Department Events",
    tag: "OOP",
    subtitle: "",
    brief: "The CSE Department organized several events for students. The department wants to calculate the total participation points earned by students using different methods. Write a Java program to create an Event class that demonstrates method overloading. Create the following overloaded methods: \u2022 int calculatePoints(int participation) \u2013 Calculate points based only on participation. \u2022 int calculatePoints(int participation, int quiz) \u2013 Calculate total points from participation and quiz. \u2022 int calculatePoints(int participation, int quiz, int presentation) \u2013 Calculate total points from participation, quiz, and presentation. Create a displayResult() method to display the calculated total points. In the main() method, take the required values from the user, call the appropriate overloaded calculatePoints() method, and display the result. Constraints: \u2022 1 \u2264 participation \u2264 100 \u2022 0 \u2264 quiz \u2264 100 \u2022 0 \u2264 presentation \u2264 100",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "1\n80",
            "expected": "Total Points: 80",
            "explanation": "The CSE Department calculated the student's points using only participation. Therefore, the calculatePoints(int participation) method is called."
      },
      {
            "id": 2,
            "input": "2\n70 85",
            "expected": "Total Points: 155",
            "explanation": "The student's participation points are 70 and quiz points are 85. Therefore: 70 + 85 = 155 The overloaded method with two parameters is called."
      },
      {
            "id": 3,
            "input": "3\n70 80 90",
            "expected": "Total Points: 240",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "2\n60 75",
            "expected": "Total Points: 135",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n85 90 95",
            "expected": "Total Points: 270",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "1\n95",
            "expected": "Total Points: 95",
            "explanation": ""
      }
]
  }
  ,
  q21_classes_and_objects_mechanical_worker_details: {
    id: "q21_classes_and_objects_mechanical_worker_details",
    num: "21",
    title: "Classes and Objects \u2013 Mechanical Worker Details",
    tag: "OOP",
    subtitle: "",
    brief: "A mechanical workshop wants to maintain the details of its workers. Write a Java program to create a class named Worker with the following data members: \u2022 int workerId \u2022 String workerName \u2022 double dailyWage Create the following member methods: \u2022 void acceptDetails() \u2013 Accept the worker ID, worker name, and daily wage from the user. \u2022 void displayDetails() \u2013 Display the worker ID, worker name, and daily wage. In the main() method, create an object of the Worker class, accept the worker details, and display them. Constraints: \u2022 1 \u2264 workerId \u2264 9999 \u2022 1 \u2264 dailyWage \u2264 10000 \u2022 Worker name should not be empty.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "101\nRahul\n850",
            "expected": "Worker ID: 101\nWorker Name: Rahul\nDaily Wage: 850.0",
            "explanation": "The worker's ID is 101, name is Rahul, and daily wage is 850. The program accepts these details using the acceptDetails() method and displays them using the displayDetails() method."
      },
      {
            "id": 2,
            "input": "205\nAman\n950",
            "expected": "Worker ID: 205\nWorker Name: Aman\nDaily Wage: 950.0",
            "explanation": ""
      },
      {
            "id": 3,
            "input": "310\nKaran\n1200",
            "expected": "Worker ID: 310\nWorker Name: Karan\nDaily Wage: 1200.0",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "415\nRiya\n780",
            "expected": "Worker ID: 415\nWorker Name: Riya\nDaily Wage: 780.0",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "520\nSimran\n1000",
            "expected": "Worker ID: 520\nWorker Name: Simran\nDaily Wage: 1000.0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "601\nMayank\n1500",
            "expected": "Worker ID: 601\nWorker Name: Mayank\nDaily Wage: 1500.0",
            "explanation": ""
      }
]
  }
  ,
  q22_college_details_using_static_keyword: {
    id: "q22_college_details_using_static_keyword",
    num: "22",
    title: "College Details Using Static Keyword",
    tag: "OOP",
    subtitle: "",
    brief: "A college wants to maintain its common details for all students. The admin can enter the college details only once, and the same details should be displayed for every student. Write a Java program to create a Student class with the following data members: \u2022 String studentName \u2022 static String collegeName \u2022 static String collegeAddress The college name and college address should be entered by the admin only once using static variables. These details should be common and shared among all students. Create the following methods: \u2022 void acceptStudentDetails() \u2013 Accept the student's name from the user. \u2022 static void acceptCollegeDetails() \u2013 Accept the college name and address from the admin only once. \u2022 void displayDetails() \u2013 Display the student's name along with the common college details. In the main() method, accept the college details once from the admin, then accept the details of multiple students and display their details along with the same college information. Constraints: \u2022 College details should be entered only once. \u2022 collegeName and collegeAddress must be declared using the static keyword. \u2022 The same college details must be shared by all student objects. \u2022 Student name should not be empty. \u2022 1 \u2264 n \u2264 100.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "ABC College\nChandigarh\n3\nAman\nRahul\nPriya",
            "expected": "Student Name: Aman\nCollege Name: ABC College\nCollege Address: Chandigarh\nStudent Name: Rahul\nCollege Name: ABC College\nCollege Address: Chandigarh\nStudent Name: Priya\nCollege Name: ABC College\nCollege Address: Chandigarh",
            "explanation": "The admin enters the college name as ABC College and the address as Chandigarh only once. These values are stored in the static variables collegeName and collegeAddress. The same college details are then shared and displayed for all three student objects."
      },
      {
            "id": 2,
            "input": "XYZ University\nDelhi\n2\nKaran\nSimran",
            "expected": "Student Name: Karan\nCollege Name: XYZ University\nCollege Address: Delhi\nStudent Name: Simran\nCollege Name: XYZ University\nCollege Address: Delhi",
            "explanation": "The college details are entered only once by the admin. Since collegeName and collegeAddress are static, both Karan and Simran use the same college information."
      },
      {
            "id": 3,
            "input": "National College\nMumbai\n4\nRohit\nNeha\nArjun\nPooja",
            "expected": "Student Name: Rohit\nCollege Name: National College\nCollege Address: Mumbai\nStudent Name: Neha\nCollege Name: National College\nCollege Address: Mumbai\nStudent Name: Arjun\nCollege Name: National College\nCollege Address: Mumbai\nStudent Name: Pooja\nCollege Name: National College\nCollege Address: Mumbai",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "Green Valley College\nPatiala\n1\nHarpreet",
            "expected": "Student Name: Harpreet\nCollege Name: Green Valley College\nCollege Address: Patiala",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "Sunrise University\nJaipur\n5\nAnkit\nRiya\nMohit\nSimran\nVarun",
            "expected": "Student Name: Ankit\nCollege Name: Sunrise University\nCollege Address: Jaipur\nStudent Name: Riya\nCollege Name: Sunrise University\nCollege Address: Jaipur\nStudent Name: Mohit\nCollege Name: Sunrise University\nCollege Address: Jaipur\nStudent Name: Simran\nCollege Name: Sunrise University\nCollege Address: Jaipur\nStudent Name: Varun\nCollege Name: Sunrise University\nCollege Address: Jaipur",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "Techno Institute\nLudhiana\n2\nDeepak\nMehak",
            "expected": "Student Name: Deepak\nCollege Name: Techno Institute\nCollege Address: Ludhiana\nStudent Name: Mehak\nCollege Name: Techno Institute\nCollege Address: Ludhiana",
            "explanation": ""
      }
]
  }
  ,
  q23_constructor_overloading_student_football_players: {
    id: "q23_constructor_overloading_student_football_players",
    num: "23",
    title: "Constructor Overloading \u2013 Student Football Players",
    tag: "OOP",
    subtitle: "",
    brief: "A group of students is playing a football match. The coach wants to maintain the details of the players. Write a Java program to create a Player class and demonstrate constructor overloading. The class should contain the following data members: \u2022 String playerName \u2022 int age \u2022 int jerseyNumber Create the following overloaded constructors: \u2022 A default constructor that initializes the player name as \"Unknown\", age as 18, and jersey number as 0. \u2022 A constructor that accepts only the player name and initializes age as 18 and jersey number as 0. \u2022 A constructor that accepts player name, age, and jersey number and initializes all the data members. Create a displayDetails() method to display the player's name, age, and jersey number. In the main() method, take the required input from the user, create player objects using the appropriate overloaded constructors, and display their details. Constraints: \u2022 1 \u2264 n \u2264 11 \u2022 10 \u2264 age \u2264 40 \u2022 0 \u2264 jerseyNumber \u2264 99 \u2022 Player name must not be empty. \u2022 The program must use constructor overloading. \u2022 All constructors must have different parameter lists.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "3\n1\n2\nAman\n3\nRahul 20 10",
            "expected": "Player Name: Unknown\nAge: 18\nJersey Number: 0\nPlayer Name: Aman\nAge: 18\nJersey Number: 0\nPlayer Name: Rahul\nAge: 20\nJersey Number: 10",
            "explanation": "The first player is created using the default constructor. The second player is created using the constructor that accepts only the player name. The third player is created using the constructor that accepts the player name, age, and jersey number."
      },
      {
            "id": 2,
            "input": "2\n2\nKaran\n3\nSimran 19 7",
            "expected": "Player Name: Karan\nAge: 18\nJersey Number: 0\nPlayer Name: Simran\nAge: 19\nJersey Number: 7",
            "explanation": "The first player is created using the one-parameter constructor, while the second player is created using the three parameter constructor."
      },
      {
            "id": 3,
            "input": "1\n1",
            "expected": "Player Name: Unknown\nAge: 18\nJersey Number: 0",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "2\n3\nAmit 21 9\n3\nRohit 22 11",
            "expected": "Player Name: Amit\nAge: 21\nJersey Number: 9\nPlayer Name: Rohit\nAge: 22\nJersey Number: 11",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n2\nArjun\n2\nVikas\n3\nMohit 20 5",
            "expected": "Player Name: Arjun\nAge: 18\nJersey Number: 0\nPlayer Name: Vikas\nAge: 18\nJersey Number: 0\nPlayer Name: Mohit\nAge: 20\nJersey Number: 5",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "1\n3\nRavi 23 10",
            "expected": "Player Name: Ravi\nAge: 23\nJersey Number: 10",
            "explanation": ""
      }
]
  }
  ,
  q24_method_overloading_calculator: {
    id: "q24_method_overloading_calculator",
    num: "24",
    title: "Method Overloading \u2013 Calculator",
    tag: "OOP",
    subtitle: "",
    brief: "Riya is solving a mathematics question during her examination and needs to perform different types of calculations. To help her perform these calculations, write a Java program to create a Calculator class that demonstrates method overloading. Create the following overloaded calculate() methods: \u2022 int calculate(int a, int b) \u2013 Calculate the sum of two integers. \u2022 double calculate(double a, double b) \u2013 Calculate the sum of two decimal numbers. \u2022 int calculate(int a, int b, int c) \u2013 Calculate the sum of three integers. In the main() method, take the required values from the user, call the appropriate overloaded calculate() method, and display the result. Constraints: \u2022 -1000 \u2264 a, b, c \u2264 1000",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "1\n25 35",
            "expected": "Result: 60",
            "explanation": "Riya selects option 1 during her paper and enters two integer values, 25 and 35. The calculate(int, int) method is called. 25 + 35 = 60"
      },
      {
            "id": 2,
            "input": "2\n12.5 7.5",
            "expected": "Result: 20.0",
            "explanation": "Riya selects option 2 and enters two decimal values. The calculate(double, double) method is called. 12.5 + 7.5 = 20.0"
      },
      {
            "id": 3,
            "input": "3\n10 20 30",
            "expected": "Result: 60",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "1\n100 250",
            "expected": "Result: 350",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "2\n25.5 14.5",
            "expected": "Result: 40.0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "3\n5 15 25",
            "expected": "Result: 45",
            "explanation": ""
      }
]
  }
  ,
  q25_check_number_is_palindrome_or_not: {
    id: "q25_check_number_is_palindrome_or_not",
    num: "25",
    title: "Check Number is Palindrome or Not",
    tag: "Arrays",
    subtitle: "",
    brief: "Gaurav has a number and wants to check whether it is a palindrome or not. Write a Java program to determine if the given number reads the same from left to right and right to left.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "121",
            "expected": "Palindrome",
            "explanation": "The number 121 remains the same when its digits are reversed. Therefore, the output is Palindrome."
      },
      {
            "id": 2,
            "input": "12345",
            "expected": "Not a Palindrome",
            "explanation": "The number 12345 becomes 54321 when reversed, which is different from the original number. Therefore, the output is Not a Palindrome."
      },
      {
            "id": 3,
            "input": "1221",
            "expected": "Palindrome",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "9876",
            "expected": "Not a Palindrome",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "1001",
            "expected": "Palindrome",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "12321",
            "expected": "Palindrome",
            "explanation": ""
      }
]
  }
  ,
  q26_check_number_is_prime_or_not: {
    id: "q26_check_number_is_prime_or_not",
    num: "26",
    title: "Check Number is Prime or Not",
    tag: "Arrays",
    subtitle: "",
    brief: "Aman and his friends are playing a number game. They have selected a number and want to find out whether the number is a prime number or not. A prime number is a number greater than 1 that has exactly two factors: 1 and itself. Help Aman and his friends write a Java program to determine whether the given number is prime or not.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "7",
            "expected": "Prime",
            "explanation": "The number 7 has exactly two factors, 1 and 7. Therefore, 7 is a prime number, and the output is Prime."
      },
      {
            "id": 2,
            "input": "12",
            "expected": "Not Prime",
            "explanation": "The number 12 has more than two factors: 1, 2, 3, 4, 6, and 12. Therefore, 12 is not a prime number, and the output is Not Prime."
      },
      {
            "id": 3,
            "input": "2",
            "expected": "Prime",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "25",
            "expected": "Not Prime",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "31",
            "expected": "Prime",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "1",
            "expected": "Not Prime",
            "explanation": ""
      }
]
  }
  ,
  q27_search_an_element_in_an_array: {
    id: "q27_search_an_element_in_an_array",
    num: "27",
    title: "Search an Element in an Array",
    tag: "Arrays",
    subtitle: "",
    brief: "Aman and his group of pharmacy clinical students are working on a medicine inventory system. They have recorded the medicine codes in an array and want to search for a particular medicine code. Write a Java program to take the array elements from the user and then search for the given element. If the element is found, print its position in the array. Otherwise, print Element Not Found.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5\n101 205 310 415 520\n310",
            "expected": "Element Found at Position 3",
            "explanation": "The pharmacy clinical group entered five medicine codes. The code 310 is present at the third position in the array. Therefore, the output is Element Found at Position 3."
      },
      {
            "id": 2,
            "input": "6\n120 235 340 455 560 675\n400",
            "expected": "Element Not Found",
            "explanation": "The pharmacy clinical group wants to search for the code 400. This code is not present in the given array. Therefore, the output is Element Not Found."
      },
      {
            "id": 3,
            "input": "4\n25 50 75 100\n25",
            "expected": "Element Found at Position 1",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "7\n12 24 36 48 60 72 84\n72",
            "expected": "Element Found at Position 6",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "5\n15 30 45 60 75\n90",
            "expected": "Element Not Found",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6\n11 22 33 44 55 66\n66",
            "expected": "Element Found at Position 6",
            "explanation": ""
      }
]
  }
  ,
  q28_count_even_and_odd_numbers_in_an_array: {
    id: "q28_count_even_and_odd_numbers_in_an_array",
    num: "28",
    title: "Count Even and Odd Numbers in an Array",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of pharmacy clinical students has recorded a set of numerical values in an array. They want to analyze the values and count how many numbers are even and how many are odd. Write a Java program to take the array elements from the user and count the total number of even and odd numbers present in the array.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n10 15 20 25 30 35",
            "expected": "Even Count: 3\nOdd Count: 3",
            "explanation": "The even numbers are 10, 20, and 30, so the even count is 3. The odd numbers are 15, 25, and 35, so the odd count is 3."
      },
      {
            "id": 2,
            "input": "5\n2 4 6 8 10",
            "expected": "Even Count: 5\nOdd Count: 0",
            "explanation": "All the numbers in the array are even. Therefore, the even count is 5 and the odd count is 0."
      },
      {
            "id": 3,
            "input": "7\n1 3 5 7 9 11 13",
            "expected": "Even Count: 0\nOdd Count: 7",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "8\n12 7 18 25 30 41 50 63",
            "expected": "Even Count: 4\nOdd Count: 4",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "5\n0 10 20 30 40",
            "expected": "Even Count: 5\nOdd Count: 0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6 -5 -4 -3 -2 -1 0",
            "expected": "Even Count: 3\nOdd Count: 3",
            "explanation": ""
      }
]
  }
  ,
  q29_count_positive_and_negative_numbers_in_an_array: {
    id: "q29_count_positive_and_negative_numbers_in_an_array",
    num: "29",
    title: "Count Positive and Negative Numbers in an Array",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of different players in an array. Some scores may be positive and some may be negative. Write a Java program to take the array elements from the user and count how many positive and negative numbers are present in the array.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n10 -5 20 -8 15 -3",
            "expected": "Positive Count: 3\nNegative Count: 3",
            "explanation": "The positive numbers are 10, 20, and 15, so the positive count is 3. The negative numbers are -5, -8, and -3, so the negative count is 3."
      },
      {
            "id": 2,
            "input": "5\n12 25 -7 18 30",
            "expected": "Positive Count: 4\nNegative Count: 1",
            "explanation": "The positive numbers are 12, 25, 18, and 30, while -7 is the only negative number. Therefore, the positive count is 4 and the negative count is 1."
      },
      {
            "id": 3,
            "input": "7 -2 -4 -6 -8 -10 -12 -14",
            "expected": "Positive Count: 0\nNegative Count: 7",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "6\n5 10 15 20 25 30",
            "expected": "Positive Count: 6\nNegative Count: 0",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "5 -10 20 -30 40 -50",
            "expected": "Positive Count: 2\nNegative Count: 3",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6\n0 -5 10 -15 20 0",
            "expected": "Positive Count: 2\nNegative Count: 2",
            "explanation": ""
      }
]
  }
  ,
  q30_find_the_sum_of_array_elements: {
    id: "q30_find_the_sum_of_array_elements",
    num: "30",
    title: "Find the Sum of Array Elements",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of all the players in an array. They want to calculate the total score obtained by all the players. Write a Java program to take the number of elements and array elements from the user using the Scanner class and calculate the sum of all the elements in the array.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5\n10 20 30 40 50",
            "expected": "Sum = 150",
            "explanation": "The sum of all elements is 10 + 20 + 30 + 40 + 50 = 150. Therefore, the output is Sum = 150."
      },
      {
            "id": 2,
            "input": "6\n5 10 15 20 25 30",
            "expected": "Sum = 105",
            "explanation": "The sum of all elements is 5 + 10 + 15 + 20 + 25 + 30 = 105. Therefore, the output is Sum = 105."
      },
      {
            "id": 3,
            "input": "4\n1 2 3 4",
            "expected": "Sum = 10",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "5\n10 -5 20 -10 15",
            "expected": "Sum = 30",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n100 200 300",
            "expected": "Sum = 600",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "5\n0 10 0 20 0",
            "expected": "Sum = 30",
            "explanation": ""
      }
]
  }
  ,
  q31_reverse_an_array: {
    id: "q31_reverse_an_array",
    num: "31",
    title: "Reverse an Array",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of the players in an array. They want to display the scores in the reverse order. Write a Java program to take the number of elements and array elements from the user using the Scanner class and print the elements of the array in reverse order.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5\n10 20 30 40 50",
            "expected": "50 40 30 20 10",
            "explanation": "The original array is 10 20 30 40 50. After reversing the order of the elements, the array becomes 50 40 30 20 10."
      },
      {
            "id": 2,
            "input": "6\n5 10 15 20 25 30",
            "expected": "30 25 20 15 10 5",
            "explanation": "The original array is 5 10 15 20 25 30. Reading the elements from the last element to the first gives 30 25 20 15 10 5."
      },
      {
            "id": 3,
            "input": "4\n1 2 3 4",
            "expected": "4 3 2 1",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "5\n12 7 25 18 30",
            "expected": "30 18 25 7 12",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n100 200 300",
            "expected": "300 200 100",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6 -5 10 -15 20 -25 30",
            "expected": "30 -25 20 -15 10 -5",
            "explanation": ""
      }
]
  }
  ,
  q32_copy_elements_from_one_array_to_another: {
    id: "q32_copy_elements_from_one_array_to_another",
    num: "32",
    title: "Copy Elements from One Array to Another",
    tag: "Arrays",
    subtitle: "",
    brief: "Sachin's marks were recorded in an original array. To prepare a second record, he copied all the marks into another array. However, a discrepancy was found between the original and copied records. Write a Java program to take the elements of the original array from the user using the Scanner class and copy all its elements into a second array. Display both the original array and the copied array.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5\n85 90 78 92 88",
            "expected": "Original Array:\n85 90 78 92 88\nCopied Array:\n85 90 78 92 88",
            "explanation": "The elements from the original array are copied into the second array without changing their values. Therefore, both arrays contain the same elements."
      },
      {
            "id": 2,
            "input": "4\n70 65 80 75",
            "expected": "Original Array:\n70 65 80 75\nCopied Array:\n70 65 80 75",
            "explanation": "All four elements from the original array are copied into the second array. Hence, the copied array contains the same marks as the original array."
      },
      {
            "id": 3,
            "input": "6\n45 56 67 78 89 90",
            "expected": "Original Array:\n45 56 67 78 89 90\nCopied Array:\n45 56 67 78 89 90",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3\n100 95 88",
            "expected": "Original Array:\n100 95 88\nCopied Array:\n100 95 88",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "5\n55 60 72 81 94",
            "expected": "Original Array:\n55 60 72 81 94\nCopied Array:\n55 60 72 81 94",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "4\n35 48 62 79",
            "expected": "Original Array:\n35 48 62 79\nCopied Array:\n35 48 62 79",
            "explanation": ""
      }
]
  }
  ,
  q33_print_diagonal_elements_from_a_2d_array: {
    id: "q33_print_diagonal_elements_from_a_2d_array",
    num: "33",
    title: "Print Diagonal Elements from a 2D Array",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of students is working with a 2D array and wants to identify the elements present on its diagonal. Write a Java program to take the number of rows, columns, and array elements from the user using the Scanner class and print the main diagonal elements of the array. The main diagonal starts from the top-left corner and ends at the bottom-right corner.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "3 3\n10 20 30\n40 50 60\n70 80 90",
            "expected": "10 50 90",
            "explanation": "The main diagonal elements are 10, 50, and 90. Their positions are [0][0], [1][1], and [2][2]."
      },
      {
            "id": 2,
            "input": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
            "expected": "1 6 11 16",
            "explanation": "The main diagonal elements are 1, 6, 11, and 16, which are located at [0][0], [1][1], [2][2], and [3][3]."
      },
      {
            "id": 3,
            "input": "2 2\n5 10\n15 20",
            "expected": "5 20",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3 3\n2 4 6\n8 10 12\n14 16 18",
            "expected": "2 10 18",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3 3\n7 8 9\n4 5 6\n1 2 3",
            "expected": "7 5 3",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "4 4\n11 22 33 44\n55 66 77 88\n99 10 20 30\n40 50 60 70",
            "expected": "11 66 20 70",
            "explanation": ""
      }
]
  }
  ,
  q34_find_the_sum_of_elements_in_a_2d_array: {
    id: "q34_find_the_sum_of_elements_in_a_2d_array",
    num: "34",
    title: "Find the Sum of Elements in a 2D Array",
    tag: "Arrays",
    subtitle: "",
    brief: "A group of students is working with a 2D array. They want to calculate the total sum of all the elements present in the array. Write a Java program to take the number of rows and columns from the user and then take all the 2D array elements from the user using the Scanner class. Calculate and print the sum of all the elements in the 2D array.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "2 3\n10 20 30\n40 50 60",
            "expected": "Sum = 210",
            "explanation": "The sum of all elements is: 10 + 20 + 30 + 40 + 50 + 60 = 210 Therefore, the output is Sum = 210."
      },
      {
            "id": 2,
            "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
            "expected": "Sum = 45",
            "explanation": "The sum of all elements is: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 Therefore, the output is Sum = 45."
      },
      {
            "id": 3,
            "input": "2 2\n5 10\n15 20",
            "expected": "Sum = 50",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3 2\n10 20\n30 40\n50 60",
            "expected": "Sum = 210",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "2 4\n2 4 6 8\n10 12 14 16",
            "expected": "Sum = 72",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "3 3 -5 10 -15\n20 -25 30 -35 40 50",
            "expected": "Sum = 70",
            "explanation": ""
      }
]
  }
  ,
  q35_maximum_and_minimum_element_in_arraylist: {
    id: "q35_maximum_and_minimum_element_in_arraylist",
    num: "35",
    title: "Maximum and Minimum Element in ArrayList",
    tag: "ArrayList",
    subtitle: "",
    brief: "A student is maintaining a list of marks using an ArrayList<Integer>. Write a Java program to find the maximum and minimum element from the given ArrayList. The program should accept the number of elements and their values from the user, store them in an ArrayList, and determine the largest and smallest elements.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n45 78 23 91 56 34",
            "expected": "Maximum: 91\nMinimum: 23",
            "explanation": "The largest element in the ArrayList is 91, and the smallest element is 23."
      },
      {
            "id": 2,
            "input": "5\n120 85 250 45 175",
            "expected": "Maximum: 250\nMinimum: 45",
            "explanation": "The maximum element is 250, while the minimum element is 45."
      },
      {
            "id": 3,
            "input": "4\n10 20 30 40",
            "expected": "Maximum: 40\nMinimum: 10",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "5\n55 55 55 55 55",
            "expected": "Maximum: 55\nMinimum: 55",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "7\n12 89 34 67 5 45 23",
            "expected": "Maximum: 89\nMinimum: 5",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6 -10 25 -35 40 15 -5",
            "expected": "Maximum: 40\nMinimum: -35",
            "explanation": ""
      }
]
  }
  ,
  q36_find_second_largest_element_in_arraylist: {
    id: "q36_find_second_largest_element_in_arraylist",
    num: "36",
    title: "Find Second Largest Element in ArrayList",
    tag: "ArrayList",
    subtitle: "",
    brief: "A sports application stores the scores of players in an ArrayList<Integer>. Write a Java program to find the second largest element from the given ArrayList.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n45 78 23 91 56 34",
            "expected": "78",
            "explanation": "The largest element is 91 and the second largest element is 78."
      },
      {
            "id": 2,
            "input": "5\n120 85 250 45 175",
            "expected": "175",
            "explanation": "The largest element is 250, so the second largest element is 175."
      },
      {
            "id": 3,
            "input": "5\n10 50 30 80 60",
            "expected": "60",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "6\n25 15 75 45 95 65",
            "expected": "75",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "4\n100 200 150 50",
            "expected": "150",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "7\n12 89 34 67 5 45 23",
            "expected": "67",
            "explanation": ""
      }
]
  }
  ,
  q37_sum_of_arraylist_elements: {
    id: "q37_sum_of_arraylist_elements",
    num: "37",
    title: "Sum of ArrayList Elements",
    tag: "ArrayList",
    subtitle: "",
    brief: "A school maintains the marks of students who appeared for a class test. The marks are stored in an ArrayList<Integer> because the number of students may vary. The teacher wants to calculate the total marks obtained by all students for further analysis. Write a Java program that accepts the number of students and their marks, stores all the marks in an ArrayList<Integer>, and calculates the sum of all the elements present in the list. The program should traverse the ArrayList and add each element to a sum variable. Finally, display the total sum of all the marks.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5\n10 20 30 40 50",
            "expected": "150",
            "explanation": "The marks are 10, 20, 30, 40, 50. Their total is 10 + 20 + 30 + 40 + 50 = 150."
      },
      {
            "id": 2,
            "input": "6\n12 15 8 20 10 5",
            "expected": "70",
            "explanation": "The sum of all marks is 12 + 15 + 8 + 20 + 10 + 5 = 70."
      },
      {
            "id": 3,
            "input": "4\n25 35 45 55",
            "expected": "160",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "5\n5 10 15 20 25",
            "expected": "75",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n100 200 300",
            "expected": "600",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "7\n2 4 6 8 10 12 14",
            "expected": "56",
            "explanation": ""
      }
]
  }
  ,
  q38_count_even_and_odd_numbers_from_arraylist: {
    id: "q38_count_even_and_odd_numbers_from_arraylist",
    num: "38",
    title: "Count Even and Odd Numbers from ArrayList",
    tag: "ArrayList",
    subtitle: "",
    brief: "A teacher is conducting a mathematics activity in which students are given a list of integers. The teacher wants to analyze the numbers by separating them into two categories: even numbers and odd numbers. The numbers are stored in an ArrayList<Integer> for easy processing. Write a Java program that accepts n integers from the user and stores them in an ArrayList<Integer>. The program should traverse the ArrayList and count the total number of even and odd elements. A number is considered even if it is completely divisible by 2; otherwise, it is considered odd. Finally, display the count of even numbers followed by the count of odd numbers.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n12 15 20 7 18 9",
            "expected": "3\n3",
            "explanation": "The even numbers are 12, 20, 18, so there are 3 even numbers. The odd numbers are 15, 7, 9, so there are 3 odd numbers."
      },
      {
            "id": 2,
            "input": "5\n11 13 17 21 25",
            "expected": "0\n5",
            "explanation": "All the numbers are odd. Therefore, there are 0 even numbers and 5 odd numbers."
      },
      {
            "id": 3,
            "input": "7\n2 4 6 8 10 13 15",
            "expected": "5\n2",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "4\n9 21 35 47",
            "expected": "0\n4",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "6\n10 20 30 40 50 60",
            "expected": "6\n0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "8\n5 8 11 14 17 20 23 26",
            "expected": "4\n4",
            "explanation": ""
      }
]
  }
  ,
  q39_reverse_arraylist: {
    id: "q39_reverse_arraylist",
    num: "39",
    title: "Reverse ArrayList",
    tag: "ArrayList",
    subtitle: "",
    brief: "A music application stores the IDs of songs in an ArrayList<Integer>. The application displays the songs in the order in which they were added, but the user now wants to view them in the reverse order. Write a Java program that accepts n integer elements from the user, stores them in an ArrayList<Integer>, and reverses the order of all elements. The program should traverse the ArrayList from the last element to the first element and display the elements in reverse order.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n10 20 30 40 50 60",
            "expected": "60 50 40 30 20 10",
            "explanation": "The original ArrayList contains 10 20 30 40 50 60. Reading the elements from the last position to the first position produces 60 50 40 30 20 10."
      },
      {
            "id": 2,
            "input": "5\n15 25 35 45 55",
            "expected": "55 45 35 25 15",
            "explanation": "The last element 55 is displayed first, followed by the remaining elements in reverse order."
      },
      {
            "id": 3,
            "input": "4\n12 24 36 48",
            "expected": "48 36 24 12",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "7\n5 10 15 20 25 30 35",
            "expected": "35 30 25 20 15 10 5",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "3\n100 200 300",
            "expected": "300 200 100",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "8\n2 4 6 8 10 12 14 16",
            "expected": "16 14 12 10 8 6 4 2",
            "explanation": ""
      }
]
  }
  ,
  q40_invalid_number_conversion: {
    id: "q40_invalid_number_conversion",
    num: "40",
    title: "Invalid Number Conversion",
    tag: "Exceptions",
    subtitle: "",
    brief: "A payment system receives an amount as a string. Before processing the payment, the system must convert it into an integer. Write a Java program using try and catch to handle invalid numeric input.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5000",
            "expected": "Amount: 5000",
            "explanation": "The string \"5000\" can successfully be converted into an integer."
      },
      {
            "id": 2,
            "input": "five thousand",
            "expected": "Invalid Amount",
            "explanation": "The given string does not represent a valid integer, so NumberFormatException is handled."
      },
      {
            "id": 3,
            "input": "2500",
            "expected": "Amount: 2500",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "12A5",
            "expected": "Invalid Amount",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "9999",
            "expected": "Amount: 9999",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "100@200",
            "expected": "Invalid Amount",
            "explanation": ""
      }
]
  }
  ,
  q41_age_validation: {
    id: "q41_age_validation",
    num: "41",
    title: "Age Validation",
    tag: "Exceptions",
    subtitle: "",
    brief: "An amusement park allows visitors to enter a special ride only if their age is at least 18. Write a Java program that uses the throw keyword to generate an exception when the entered age is below 18.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "20",
            "expected": "Eligible for Ride",
            "explanation": "The visitor is 20 years old, which satisfies the minimum age requirement of 18."
      },
      {
            "id": 2,
            "input": "15",
            "expected": "Not Eligible for Ride",
            "explanation": "The visitor is below 18, so the program uses throw to generate an exception."
      },
      {
            "id": 3,
            "input": "18",
            "expected": "Eligible for Ride",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "25",
            "expected": "Eligible for Ride",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "12",
            "expected": "Not Eligible for Ride",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "17",
            "expected": "Not Eligible for Ride",
            "explanation": ""
      }
]
  }
  ,
  q42_bank_transaction: {
    id: "q42_bank_transaction",
    num: "42",
    title: "Bank Transaction",
    tag: "Exceptions",
    subtitle: "",
    brief: "A banking application performs a withdrawal operation. Whether the transaction succeeds or fails, the system must display a message indicating that the transaction process has ended. Write a Java program using try, catch, and finally.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "10000\n3000",
            "expected": "Withdrawal Successful\nTransaction Completed",
            "explanation": "The withdrawal amount is less than the available balance, so the transaction is successful. The finally block displays Transaction Completed."
      },
      {
            "id": 2,
            "input": "5000\n7000",
            "expected": "Insufficient Balance\nTransaction Completed",
            "explanation": "The withdrawal amount exceeds the available balance, so an exception is handled. The finally block still executes and displays Transaction Completed."
      },
      {
            "id": 3,
            "input": "20000\n5000",
            "expected": "Withdrawal Successful\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3000\n3000",
            "expected": "Withdrawal Successful\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "8000\n10000",
            "expected": "Insufficient Balance\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "15000\n2500",
            "expected": "Withdrawal Successful\nTransaction Completed",
            "explanation": ""
      }
]
  }
  ,
  q43_convert_string_to_integer: {
    id: "q43_convert_string_to_integer",
    num: "43",
    title: "Convert String to Integer",
    tag: "Exceptions",
    subtitle: "",
    brief: "A ticket booking system receives the number of tickets as a string. The system must convert the input into an integer before processing the booking. Use try-catch to handle invalid numeric input.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5",
            "expected": "Tickets: 5",
            "explanation": "The input \"5\" can be successfully converted into an integer."
      },
      {
            "id": 2,
            "input": "five",
            "expected": "Invalid Ticket Count",
            "explanation": "\"five\" is not a valid integer, so NumberFormatException is caught."
      },
      {
            "id": 3,
            "input": "10",
            "expected": "Tickets: 10",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "12A",
            "expected": "Invalid Ticket Count",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "0",
            "expected": "Tickets: 0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "25B",
            "expected": "Invalid Ticket Count",
            "explanation": ""
      }
]
  }
  ,
  q44_safe_array_access: {
    id: "q44_safe_array_access",
    num: "44",
    title: "Safe Array Access",
    tag: "Exceptions",
    subtitle: "",
    brief: "A warehouse application stores product quantities in an array. The user enters an index to check the quantity of a product. Use multiple catch clauses to handle invalid input and invalid array indexes.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "4\n20 30 40 50\n2",
            "expected": "Quantity: 40",
            "explanation": "Index 2 contains the quantity 40."
      },
      {
            "id": 2,
            "input": "4\n20 30 40 50\n7",
            "expected": "Invalid Index",
            "explanation": "The valid indexes are 0 to 3. Therefore, index 7 causes an array index exception."
      },
      {
            "id": 3,
            "input": "3\n10 20 30\n0",
            "expected": "Quantity: 10",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3\n10 20 30 -1",
            "expected": "Invalid Index",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "2\n100 200\n1",
            "expected": "Quantity: 200",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "3\nA B C\n1",
            "expected": "Invalid Input",
            "explanation": ""
      }
]
  }
  ,
  q45_atm_withdrawal: {
    id: "q45_atm_withdrawal",
    num: "45",
    title: "ATM Withdrawal",
    tag: "Exceptions",
    subtitle: "",
    brief: "An ATM system first verifies the account balance and then performs a withdrawal. Use a nested try block to handle an invalid withdrawal amount and division-related errors separately.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "10000\n2000",
            "expected": "Withdrawal Successful",
            "explanation": "The withdrawal amount is within the available balance, so the transaction is completed successfully."
      },
      {
            "id": 2,
            "input": "5000\n7000",
            "expected": "Invalid Withdrawal",
            "explanation": "The requested amount is greater than the available balance, so the nested exception handling prevents the invalid transaction."
      },
      {
            "id": 3,
            "input": "15000\n5000",
            "expected": "Withdrawal Successful",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "3000\n3000",
            "expected": "Withdrawal Successful",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "1000\n1500",
            "expected": "Invalid Withdrawal",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "20000\n10000",
            "expected": "Withdrawal Successful",
            "explanation": ""
      }
]
  }
  ,
  q46_validate_marks: {
    id: "q46_validate_marks",
    num: "46",
    title: "Validate Marks",
    tag: "Exceptions",
    subtitle: "",
    brief: "An examination system accepts marks for a subject. Marks must be between 0 and 100. Use the throw keyword to generate an exception when invalid marks are entered.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "85",
            "expected": "Valid Marks",
            "explanation": "85 is within the valid range of 0 to 100."
      },
      {
            "id": 2,
            "input": "120",
            "expected": "Invalid Marks",
            "explanation": "120 is greater than the maximum allowed marks of 100, so an exception is thrown."
      },
      {
            "id": 3,
            "input": "0",
            "expected": "Valid Marks",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "100",
            "expected": "Valid Marks",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "",
            "expected": "Invalid Marks",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "101",
            "expected": "Invalid Marks",
            "explanation": ""
      }
]
  }
  ,
  q47_transaction_completion: {
    id: "q47_transaction_completion",
    num: "47",
    title: "Transaction Completion",
    tag: "Exceptions",
    subtitle: "",
    brief: "An online payment application processes a transaction. Whether the payment is successful or an exception occurs, the system must always display \"Transaction Process Completed\". Use the finally block.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5000\n2000",
            "expected": "Payment Successful\nTransaction Process Completed",
            "explanation": "The payment amount is within the available balance, so the payment succeeds. The finally block prints the completion message."
      },
      {
            "id": 2,
            "input": "3000\n5000",
            "expected": "Insufficient Balance\nTransaction Process Completed",
            "explanation": "The payment exceeds the available balance, but the finally block still executes and displays the completion message."
      },
      {
            "id": 3,
            "input": "10000\n10000",
            "expected": "Payment Successful\nTransaction Process Completed",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "1000\n1500",
            "expected": "Insufficient Balance\nTransaction Process Completed",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "8000\n3000",
            "expected": "Payment Successful\nTransaction Process Completed",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "2000\n2500",
            "expected": "Insufficient Balance\nTransaction Process Completed",
            "explanation": ""
      }
]
  }
  ,
  q48_fruit_selling_system: {
    id: "q48_fruit_selling_system",
    num: "48",
    title: "Fruit Selling System",
    tag: "Exceptions",
    subtitle: "",
    brief: "Riya sells fruits at a local market. She maintains the price of fruits and wants to calculate the total cost based on the quantity purchased by a customer. Write a Java program using try, catch, and finally to safely handle invalid input and ensure that the transaction completion message is always displayed. The program should store the price of a fruit and accept the quantity from the user. The total cost is calculated as: Total Cost = Price \u00d7 Quantity If the user enters an invalid quantity, the program should handle the exception using catch. The finally block must always print: Transaction Completed",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "50\n4",
            "expected": "Total Cost: 200\nTransaction Completed",
            "explanation": "The price of one fruit is \u20b950 and the customer purchases 4 fruits. Therefore, the total cost is 50 \u00d7 4 = 200. The finally block then prints Transaction Completed."
      },
      {
            "id": 2,
            "input": "40\nabc",
            "expected": "Invalid Quantity\nTransaction Completed",
            "explanation": "The quantity abc is not a valid integer, so a NumberFormatException occurs and is handled by the catch block. The finally block still executes and prints Transaction Completed."
      },
      {
            "id": 3,
            "input": "30\n5",
            "expected": "Total Cost: 150\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "25\n10",
            "expected": "Total Cost: 250\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "60\nxyz",
            "expected": "Invalid Quantity\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "100\n3",
            "expected": "Total Cost: 300\nTransaction Completed",
            "explanation": ""
      }
]
  }
  ,
  q49_bank_account_validation: {
    id: "q49_bank_account_validation",
    num: "49",
    title: "Bank Account Validation",
    tag: "Exceptions",
    subtitle: "",
    brief: "Riya is managing a banking system where customers can request a cash withdrawal from their accounts. Before processing a withdrawal, the system must verify whether the requested withdrawal amount is valid. Write a Java program that uses throws to declare an exception when the withdrawal amount is invalid. The program should use a finally block to display a message indicating that the banking transaction has been completed, regardless of whether an exception occurs. Create a method named validateWithdrawal() that accepts the withdrawal amount. If the amount is less than or equal to 0, the method should throw an exception.",
    starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
    solutionCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
    hints: [],
    sampleCases: [
      {
            "id": 1,
            "input": "5000",
            "expected": "Valid Withdrawal\nTransaction Completed",
            "explanation": "The withdrawal amount is greater than zero, so it is considered valid. The finally block executes and prints Transaction Completed."
      },
      {
            "id": 2,
            "input": "0",
            "expected": "Invalid Withdrawal\nTransaction Completed",
            "explanation": "A withdrawal amount of zero is invalid. The validateWithdrawal() method throws an exception using throw and declares it using throws. The finally block executes regardless of the exception."
      },
      {
            "id": 3,
            "input": "2500",
            "expected": "Valid Withdrawal\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "",
            "expected": "Invalid Withdrawal\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "10000",
            "expected": "Valid Withdrawal\nTransaction Completed",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "",
            "expected": "Invalid Withdrawal\nTransaction Completed\n</USER_REQUEST>\n<ADDITIONAL_METADATA>\nThe current local time is: 2026-08-18T17:51:35+05:30.\n</ADDITIONAL_METADATA>",
            "explanation": ""
      }
]
  }