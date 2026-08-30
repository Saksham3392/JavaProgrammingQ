/**
 * Java Practice Compiler & Test Bench - Colorful CodeMirror Editor & Auto-Brackets
 * 10 String Processing Challenges with logic-focused templates
 */

const PROBLEMS = {
  q25_check_number_is_palindrome_or_not: {
    id: "q25_check_number_is_palindrome_or_not",
    num: "01",
    title: "Check Number is Palindrome or Not",
    tag: "Decision & Loop Constructs",
    category: "Control Statements",
    subtitle: "",
    brief: "Gaurav has a number and wants to check whether it is a palindrome or not. Write a Java program to determine if the given number reads the same from left to right and right to left.",
    inputFormat: "First line: An integer num.",
    outputFormat: "If the number is a palindrome,\nprint:\nPalindrome\nOtherwise, print:\nNot a Palindrome",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int original = num;
        int reverse = 0;

        // Write your code here

    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int original = num;
        int reverse = 0;

        while (num > 0) {
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num /= 10;
        }

        if (reverse == original) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a Palindrome");
        }
    }
}`,
    hints: [
      {
            "title": "Reversing Digits",
            "text": "Use a while loop: <code>rev = rev * 10 + (num % 10); num /= 10;</code>"
      },
      {
            "title": "Preserve Original",
            "text": "Save <code>int original = num;</code> before modifying <code>num</code> in the loop."
      }
],
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
  },

  q26_check_number_is_prime_or_not: {
    id: "q26_check_number_is_prime_or_not",
    num: "02",
    title: "Check Number is Prime or Not",
    tag: "Decision & Loop Constructs",
    category: "Control Statements",
    subtitle: "",
    brief: "Aman and his friends are playing a number game. They have selected a number and want to find out whether the number is a prime number or not. A prime number is a number greater than 1 that has exactly two factors: 1 and itself.\nHelp Aman and his friends write a Java program to determine whether the given number is prime or not.",
    inputFormat: "First line: An integer num.",
    outputFormat: "If the number is prime, print:\nPrime\nOtherwise, print:\nNot Prime",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int num = sc.nextInt();

        // Write your code here
        // Check whether 'num' is prime (greater than 1 and divisible only by 1 and itself)
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        //Write your code here
        int divisors = 0;
        
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisors++;
            }
        }
        if (divisors == 2) {
            System.out.println("Prime");
        } else {
            System.out.println("Not Prime");
        }
    }
}`,
    hints: [
      {
            "title": "Edge Cases",
            "text": "Numbers &le; 1 are never prime. 2 is the smallest prime."
      },
      {
            "title": "Trial Division",
            "text": "Check divisibility from <code>2</code> up to <code>Math.sqrt(num)</code>. If divisible, it's not prime."
      }
],
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
  },

  q27_search_an_element_in_an_array: {
    id: "q27_search_an_element_in_an_array",
    num: "03",
    title: "Search an Element in an Array",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "Aman and his group of pharmacy clinical students are working on a medicine inventory system. They have recorded the medicine codes in an array and want to search for a particular medicine code. Write a Java program to take the array elements from the user and then search for the given element.\nIf the element is found, print its position in the array. Otherwise, print Element Not Found.",
    inputFormat: "First line: An integer n, representing the number of elements in the array.\nSecond line: n integers representing the array elements.\nThird line: An integer search, representing the element to be searched.",
    outputFormat: "If the element is found, print:\nElement Found at Position X\nOtherwise, print:\nElement Not Found\nNote: Position starts from 1.",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int search = sc.nextInt();

        for (int i = 0; i < n; i++) {
            if (arr[i] == search) {
                System.out.println("Element Found at Position " + (i + 1));
                return; // Exits program immediately
            }
        }
        System.out.println("Element Not Found"); 
        
    }
}`,
    hints: [
      {
            "title": "Linear Search",
            "text": "Loop from <code>i = 0</code> to <code>n - 1</code>. If <code>arr[i] == search</code>, position is <code>i + 1</code>."
      },
      {
            "title": "Flag Variable",
            "text": "Use a boolean <code>found = false;</code> and break when found."
      }
],
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
  },

  q28_count_even_and_odd_numbers_in_an_array: {
    id: "q28_count_even_and_odd_numbers_in_an_array",
    num: "04",
    title: "Count Even and Odd Numbers in an Array",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of pharmacy clinical students has recorded a set of numerical values in an array. They want to analyze the values and count how many numbers are even and how many are odd.\nWrite a Java program to take the array elements from the user and count the total number of even and odd numbers present in the array.",
    inputFormat: "First line: An integer n, representing the number of elements in the array.\nSecond line: n integers representing the array elements.",
    outputFormat: "Print the number of even and odd elements in the following format:\nEven Count: X\nOdd Count: Y",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        //Write your code here
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int even = 0; 
        int odd = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0) { even++; }
            else { odd++; }
        }
        System.out.println("Even Count: " + even);
        System.out.println("Odd Count: " + odd);
        
    }
}`,
    hints: [
      {
            "title": "Modulo Check",
            "text": "Check if <code>val % 2 == 0</code> for even, else it is odd."
      },
      {
            "title": "Counters",
            "text": "Maintain separate <code>evenCount</code> and <code>oddCount</code> variables."
      }
],
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
  },

  q29_count_positive_and_negative_numbers_in_an_array: {
    id: "q29_count_positive_and_negative_numbers_in_an_array",
    num: "05",
    title: "Count Positive and Negative Numbers in an Array",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of different players in an array. Some scores may be positive and some may be negative. Write a Java program to take the array elements from the user and count how many positive and negative numbers are present in the array.",
    inputFormat: "• First line: An integer n, representing the number of elements in the array.\n• Second line: n integers representing the array elements.",
    outputFormat: "Print the count of positive and negative numbers in the following format:\nPositive Count: X\nNegative Count: Y",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        //Write your code here
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        //Write your code here
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int pos = 0;
        int neg = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] > 0) { pos++; }
            else if (arr[i] < 0) { neg++; }
        }
        System.out.println("Positive Count: " + pos);
        System.out.println("Negative Count: " + neg);
        
    }
}`,
    hints: [
      {
            "title": "Sign Check",
            "text": "If <code>val &gt; 0</code> increment positive; if <code>val &lt; 0</code> increment negative."
      },
      {
            "title": "Zero Handling",
            "text": "0 is neither positive nor negative."
      }
],
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
  },

  q30_find_the_sum_of_array_elements: {
    id: "q30_find_the_sum_of_array_elements",
    num: "06",
    title: "Find the Sum of Array Elements",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of all the players in an array. They want to calculate the total score obtained by all the players.\nWrite a Java program to take the number of elements and array elements from the user using the Scanner class and calculate the sum of all the elements in the array.",
    inputFormat: "• First line: An integer n, representing the number of elements in the array.\n• Second line: n integers representing the array elements.",
    outputFormat: "Print the sum of all array elements in the following format:\nSum = X",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        System.out.println("Sum = " + sum);
    }
}`,
    hints: [
      {
            "title": "Accumulation",
            "text": "Initialize <code>int sum = 0;</code> and add each element in a loop."
      },
      {
            "title": "Exact Format",
            "text": "Make sure to print with spaces: <code>\"Sum = \" + sum</code>."
      }
],
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
  },

  q31_reverse_an_array: {
    id: "q31_reverse_an_array",
    num: "07",
    title: "Reverse an Array",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of boys played a match and recorded the scores of the players in an array. They want to display the scores in the reverse order.\nWrite a Java program to take the number of elements and array elements from the user using the Scanner class and print the elements of the array in reverse order.",
    inputFormat: "• First line: An integer n, representing the number of elements in the array.\n• Second line: n integers representing the array elements.",
    outputFormat: "Print the array elements in reverse order.",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];

        // Write your code here
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = n - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        
    }
}`,
    hints: [
      {
            "title": "Reverse Loop",
            "text": "Loop from <code>i = n - 1</code> down to <code>0</code>."
      },
      {
            "title": "Space Separation",
            "text": "Use <code>System.out.print(arr[i] + (i == 0 ? \"\" : \" \"));</code>."
      }
],
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
  },

  q32_copy_elements_from_one_array_to_another: {
    id: "q32_copy_elements_from_one_array_to_another",
    num: "08",
    title: "Copy Elements from One Array to Another",
    tag: "1D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "Sachin's marks were recorded in an original array. To prepare a second record, he copied all the marks into another array. However, a discrepancy was found between the original and copied records.\nWrite a Java program to take the elements of the original array from the user using the Scanner class and copy all its elements into a second array. Display both the original array and the copied array.",
    inputFormat: "• First line: An integer n, representing the number of elements in the array.\n• Second line: n integers representing the elements of the original array.",
    outputFormat: "Print the elements of the original array and the copied array in the following format:\nOriginal Array:\nCopied Array:",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        //Write your code here
        
        
        

        
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        //Write your code here
        int n = sc.nextInt();
        int[] original = new int[n];
        int[] copied = new int[n];
        
        System.out.println("Original Array: ");
        for (int i = 0; i < n; i++) {
            original[i] = sc.nextInt();  //take input
            System.out.print(original[i] + " " ); //print in one line
        }
        
        System.out.println(); //for next line
        System.out.println("Copied Array: ");
        for (int i = 0; i < n; i++) {         //no need for input already have
            System.out.print(original[i] + " " );
        }

        
        sc.close();
    }
}`,
    hints: [
      {
            "title": "Array Allocation",
            "text": "Create a second array: <code>int[] copied = new int[n];</code>."
      },
      {
            "title": "Element-by-Element Copy",
            "text": "Assign <code>copied[i] = original[i];</code> in a loop."
      }
],
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
  },

  q33_print_diagonal_elements_from_a_2d_array: {
    id: "q33_print_diagonal_elements_from_a_2d_array",
    num: "09",
    title: "Print Diagonal Elements from a 2D Array",
    tag: "2D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of students is working with a 2D array and wants to identify the elements present on its diagonal. Write a Java program to take the number of rows, columns, and array elements from the user using the Scanner class and print the main diagonal elements of the array.\nThe main diagonal starts from the top-left corner and ends at the bottom-right corner.",
    inputFormat: "• First line: Two integers rows and columns, representing the number of rows and columns.\n• Next rows lines: columns integers representing the elements of the 2D array.",
    outputFormat: "Print the main diagonal elements in a single line.",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rows = sc.nextInt();
        int columns = sc.nextInt();

        // Write your code here

    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rows = sc.nextInt();
        int columns = sc.nextInt();

        int[][] arr = new int[rows][columns];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                arr[i][j] = sc.nextInt();
                if (i == j) {
                    System.out.print(arr[i][j] + " ");
                }
            }
        }
    }
}`,
    hints: [
      {
            "title": "Main Diagonal",
            "text": "The diagonal elements are at indices <code>arr[i][i]</code> where <code>0 &le; i &lt; min(rows, cols)</code>."
      },
      {
            "title": "Single Loop",
            "text": "You can print the diagonal in a single loop from <code>0</code> to <code>Math.min(rows, cols)</code>."
      }
],
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
  },

  q34_find_the_sum_of_elements_in_a_2d_array: {
    id: "q34_find_the_sum_of_elements_in_a_2d_array",
    num: "10",
    title: "Find the Sum of Elements in a 2D Array",
    tag: "2D Array Processing",
    category: "Working with Arrays",
    subtitle: "",
    brief: "A group of students is working with a 2D array. They want to calculate the total sum of all the elements present in the array.\nWrite a Java program to take the number of rows and columns from the user and then take all the 2D array elements from the user using the Scanner class. Calculate and print the sum of all the elements in the 2D array.",
    inputFormat: "• First line: Two integers rows and columns, representing the number of rows and columns.\n• Next rows lines: columns integers representing the elements of the 2D array.",
    outputFormat: "Print the sum of all elements in the 2D array in the following format:\nSum = X",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        
        // Write your code here
        
        
        
        
        
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        
        // Write your code here
        int[][] arr = new int[rows][cols];
        
        // Creating 2D Array
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        //Adding
        int sum = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                sum += arr[i][j];
            }
        }
        
        System.out.println("Sum = " + sum);
        
        sc.close();
    }
}`,
    hints: [
      {
            "title": "Nested Loops",
            "text": "Use nested loops for rows <code>i</code> and cols <code>j</code>, or a flat loop for all <code>rows * cols</code> items."
      },
      {
            "title": "Summation",
            "text": "Add each <code>arr[i][j]</code> to <code>sum</code> and print <code>\"Sum = \" + sum</code>."
      }
],
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
  },

  q21_classes_and_objects_mechanical_worker_details: {
    id: "q21_classes_and_objects_mechanical_worker_details",
    num: "11",
    title: "Classes and Objects  Mechanical Worker Details",
    tag: "Classes & Methods",
    category: "Classes & Objects",
    category: "Classes & Objects",
    subtitle: "",
    brief: "A mechanical workshop wants to maintain the details of its workers. Write a Java program to create a class named Worker with the following data members: • int workerId • String workerName • double dailyWage. Create the following member methods: • void acceptDetails()  Accept the worker ID, worker name, and daily wage from the user. • void displayDetails()  Display the worker ID, worker name, and daily wage. In the main() method, create an object of the Worker class, accept the worker details, and display them. Constraints: 1 <= workerId <= 9999, 1 <= dailyWage <= 10000, Worker name should not be empty.",
    inputFormat: "The first line contains an integer representing the worker ID.<br>The second line contains a string representing the worker name.<br>The third line contains a double value representing the daily wage.",
    outputFormat: "Print:<br>Worker ID<br>Worker Name<br>Daily Wage",
    starterCode: `import java.util.Scanner;

class Worker {
    int workerId;
    String workerName;
    double dailyWage;

    // Write your code here
}

public class Main {
    public static void main(String[] args) {
        Worker w = new Worker();
        w.acceptDetails();
        w.displayDetails();
    }
}`,
    solutionCode: `import java.util.Scanner;

class Worker {
    int workerId;
    String workerName;
    double dailyWage;

    Scanner sc = new Scanner(System.in);

    void acceptDetails() {
        workerId = sc.nextInt();
        workerName = sc.next();
        dailyWage = sc.nextDouble();
    }

    void displayDetails() {
        System.out.println(workerId);
        System.out.println(workerName);
        System.out.println(dailyWage);
    }
}

public class Main {
    public static void main(String[] args) {
        Worker w = new Worker();
        w.acceptDetails();
        w.displayDetails();
    }
}`,
    hints: [
      {
        "title": "Member Variables & Methods",
        "text": "Declare <code>int workerId; String workerName; double dailyWage;</code> and define <code>void acceptDetails()</code> and <code>void displayDetails()</code> inside the <code>Worker</code> class."
      },
      {
        "title": "acceptDetails Implementation",
        "text": "Inside <code>acceptDetails()</code>, create a <code>Scanner</code> and read <code>workerId = sc.nextInt(); workerName = sc.next(); dailyWage = sc.nextDouble();</code>."
      },
      {
        "title": "displayDetails Output",
        "text": "Print <code>workerId</code>, <code>workerName</code>, and <code>dailyWage</code> on separate lines."
      }
    ],
    sampleCases: [
      {
        "id": 1,
        "input": "101\nRahul\n850",
        "expected": "101\nRahul\n850.0",
        "explanation": "The worker's ID is 101, name is Rahul, and daily wage is 850. The program accepts these details using the acceptDetails() method and displays them using the displayDetails() method."
      },
      {
        "id": 2,
        "input": "205\nAman\n950",
        "expected": "205\nAman\n950.0",
        "explanation": "Worker 205 Aman with daily wage 950.0."
      },
      {
        "id": 3,
        "input": "310\nKaran\n1200",
        "expected": "310\nKaran\n1200.0",
        "explanation": ""
      },
      {
        "id": 4,
        "input": "415\nRiya\n780",
        "expected": "415\nRiya\n780.0",
        "explanation": ""
      },
      {
        "id": 5,
        "input": "520\nSimran\n1000",
        "expected": "520\nSimran\n1000.0",
        "explanation": ""
      },
      {
        "id": 6,
        "input": "601\nMayank\n1500",
        "expected": "601\nMayank\n1500.0",
        "explanation": ""
      }
    ]
  },

  q14_salary_details: {
    id: "q14_salary_details",
    num: "12",
    title: "Employee Salary Details",
    tag: "Classes & Methods",
    category: "Classes & Objects",
    subtitle: "Manage arrays within a class.",
    brief: "A company wants to store the salary details of an employee for six months. Create an Employee class that stores the employee ID, name, and salary of each month.\nThe class should have methods to:\n1. Display the employee ID and monthly salaries.\n2. Find the total salary of six months.\n3. Find the month number in which the employee got the highest salary.\nIf the highest salary occurs more than once, return the first month in which it occurs.",
    inputFormat: "First line: Employee ID\nSecond line: Employee name\nThird line: Six monthly salaries",
    outputFormat: "Print:\nEmployee ID\nSix monthly salaries\nTotal salary\nMonth number of highest salary",
    starterCode: `import java.util.Scanner;

class Employee {
    int id;
    String name;
    int[] salary = new int[6];

    // Write your code here
    
    
    
    
    }

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Employee emp = new Employee();

        emp.id = sc.nextInt();
        emp.name = sc.next();

        for (int i = 0; i < 6; i++) {
            emp.salary[i] = sc.nextInt();
        }

        emp.display();
        System.out.println(emp.totalSalary());
        System.out.println(emp.highestSalaryMonth());

        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

class Employee {
    int id;
    String name;
    int[] salary = new int[6];

    // Write your code here
    void display(){
        System.out.println(id);
        for(int i=0; i<6;i++){
            System.out.print(salary[i]+" ");
        }
        System.out.println();
    }
    //no void bcz already System.out.println(""); in footer
    int totalSalary(){
        int sum=0;
        for(int i=0; i<6;i++){
            sum+=salary[i];
        }
        return sum;
    }
    //no void bcz already System.out.println(""); in footer
    int highestSalaryMonth(){
        int max=salary[0];
        int month=0;
        for(int i=0; i<6;i++){
            if(max<salary[i]){
                max = salary[i];
                month = i+1; //bcz it is not not index
            }
        }
        return month;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Employee emp = new Employee();

        emp.id = sc.nextInt();
        emp.name = sc.next();

        for (int i = 0; i < 6; i++) {
            emp.salary[i] = sc.nextInt();
        }

        emp.display();
        System.out.println(emp.totalSalary());
        System.out.println(emp.highestSalaryMonth());

        sc.close();
    }
}`,
    hints: [
      { title: "Iterating Arrays", text: "Use a loop from <code>0</code> to <code>5</code>. Keep a running sum of salaries." },
      { title: "Finding Max", text: "Maintain a <code>maxSalary</code> variable and an <code>index</code> variable. If the current salary is strictly greater than <code>maxSalary</code>, update both." }
    ],
    sampleCases: [
      { id: 1, input: "101\nRahul\n40000 42000 45000 48000 50000 52000", expected: "101\n40000 42000 45000 48000 50000 52000\n277000\n6", explanation: "Total is 277000. Max is 52000 in month 6." },
      { id: 2, input: "102\nPriya\n30000 35000 40000 40000 42000 42000", expected: "102\n30000 35000 40000 40000 42000 42000\n229000\n5", explanation: "Max is 42000, first occurs in month 5." },
      { id: 3, input: "103\nAman\n25000 28000 30000 32000 34000 36000", expected: "103\n25000 28000 30000 32000 34000 36000\n185000\n6", explanation: "" },
      { id: 4, input: "104\nNeha\n50000 45000 55000 50000 52000 54000", expected: "104\n50000 45000 55000 50000 52000 54000\n306000\n3", explanation: "" },
      { id: 5, input: "105\nRohan\n20000 22000 25000 23000 27000 29000", expected: "105\n20000 22000 25000 23000 27000 29000\n146000\n6", explanation: "" },
      { id: 6, input: "106\nSimran\n45000 45000 48000 50000 50000 48000", expected: "106\n45000 45000 48000 50000 50000 48000\n286000\n4", explanation: "" }
    ]
  },

  q16_book_price: {
    id: "q16_book_price",
    num: "13",
    title: "Book Price Manager",
    tag: "Constructors & Objects",
    category: "Classes & Objects",
    subtitle: "Use constructors and copy constructors.",
    brief: "A bookstore wants to store the price of a book. Create a Java class Book that stores the price of a book.\nEvery new book has a default price of 500. The price can also be changed using a method. A new book can be created by copying the price of another book.\nWrite a Java program using a class, constructors, and methods to perform these operations.\nClass Name: Book\nData Member\nprivate int price – Stores the price of the book.\nConstructors\nBook() – Creates a book with a default price of 500.\nBook(Book b) – Creates a new book by copying the price of another book.\nMember Functions\nvoid setPrice(int price) – Changes the price of the book.\nint getPrice() – Returns the current price of the book.\nNote: No need to write the main function.",
    inputFormat: "A single integer representing the new price of the second book.",
    outputFormat: "Print the prices of the two books.",
    starterCode: `import java.util.Scanner;

class Book {
    //Write your Code here

    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int newPrice = sc.nextInt();
        
        Book b1 = new Book();
        Book b2 = new Book(b1);
        b2.setPrice(newPrice);
        
        System.out.println(b1.getPrice());
        System.out.println(b2.getPrice());
    }
}`,
    solutionCode: `import java.util.Scanner;

class Book { // class name
    // Write your code here
    private int price;
    //Book() is a constructor so no void it initialize an object
    Book() {
        this.price = 500;
    }
    // This also has Class name
    Book(Book b) {
        this.price = b.price;
    }
    //setPrice() is void because its job is only to change the value, not to return anything.
    void setPrice(int price) {
        this.price = price;
    }
    // already in footer System.out.println("");
    int getPrice() {
        return price;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int newPrice = sc.nextInt();
        
        Book b1 = new Book();
        Book b2 = new Book(b1);
        b2.setPrice(newPrice);
        
        System.out.println(b1.getPrice());
        System.out.println(b2.getPrice());
    }
}`,
    hints: [
      { title: "Default Constructor", text: "Assign <code>500</code> to <code>price</code> in the <code>Book()</code> constructor." },
      { title: "Copy Constructor", text: "In <code>Book(Book b)</code>, assign <code>b.price</code> to <code>this.price</code>." }
    ],
    sampleCases: [
      { id: 1, input: "800", expected: "500\n800", explanation: "First book remains default 500, second book changed to 800." },
      { id: 2, input: "1000", expected: "500\n1000", explanation: "" },
      { id: 3, input: "300", expected: "500\n300", explanation: "" },
      { id: 4, input: "750", expected: "500\n750", explanation: "" },
      { id: 5, input: "1200", expected: "500\n1200", explanation: "" },
      { id: 6, input: "450", expected: "500\n450", explanation: "" }
    ]
  },

  q17_student_details: {
    id: "q17_student_details",
    num: "14",
    title: "Student Details",
    tag: "Static & Counters",
    category: "Classes & Objects",
    subtitle: "",
    brief: "Write a Java program to create a Student class that stores student details and demonstrates the use of the this and static keywords. The class should contain the following data members: \u2022 String name \u2022 int marks \u2022 static int studentCount Create a parameterized constructor that accepts the student's name and marks and uses the this keyword to initialize the instance variables. The constructor should also increment the static studentCount variable whenever a new student object is created. Create a displayDetails() method to display the student's name and marks. In the main() method, create multiple student objects, display their details, and finally display the total number of students created using the static variable.",
    inputFormat: "First line: Integer <code>n</code> (number of students).<br>Next n lines: String <code>name</code> and Integer <code>marks</code>.",
    outputFormat: "For each student: <code>Student Name: &lt;name&gt;</code> and <code>Marks: &lt;marks&gt;</code>.<br>Last line: <code>Total Students: &lt;count&gt;</code>",
    starterCode: `import java.util.Scanner;

class Student {
    String name;
    int marks;
    static int studentCount = 0;

    // Write your code here
    
    
    
    
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            String name = sc.next();
            int marks = sc.nextInt();
            Student s = new Student(name, marks);
            s.displayDetails();
        }
        System.out.println("Total Students: " + Student.studentCount);
    }
}`,
    solutionCode: `import java.util.Scanner;

class Student {
    String name;
    int marks;
    static int studentCount = 0;

    // Write your code here
    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
        studentCount++; // Increments every time a new object is created
    }

    void displayDetails() {
        System.out.println("Student Name: " + this.name);
        System.out.println("Marks: " + this.marks);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            String name = sc.next();
            int marks = sc.nextInt();
            Student s = new Student(name, marks);
            s.displayDetails();
        }
        System.out.println("Total Students: " + Student.studentCount);
    }
}`,
    hints: [
      {
            "title": "'this' Keyword",
            "text": "Use <code>this.name = name; this.marks = marks;</code> in the constructor."
      },
      {
            "title": "Static Counter",
            "text": "Increment <code>studentCount++</code> inside the constructor to track total students."
      }
],
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
  },

  q22_college_details_using_static_keyword: {
    id: "q22_college_details_using_static_keyword",
    num: "15",
    title: "College Details Using Static Keyword",
    tag: "Static Keyword",
    category: "Classes & Objects",
    category: "Classes & Objects",
    subtitle: "",
    brief: "A college wants to maintain its common details for all students. The admin can enter the college details only once, and the same details should be displayed for every student. Write a Java program to create a Student class with data members: String studentName, static String collegeName, static String collegeAddress. Create methods: void acceptStudentDetails(Scanner sc), static void acceptCollegeDetails(Scanner sc), void displayDetails(). In main(), accept college details once from admin, then accept multiple student details and display them.",
    inputFormat: "Line 1: <code>collegeName</code><br>Line 2: <code>collegeAddress</code><br>Line 3: Integer <code>n</code> (number of students)<br>Next n lines: student names.",
    outputFormat: "For each student, display:<br>Student Name<br>College Name<br>College Address",
    starterCode: `import java.util.Scanner;

class Student{
    String studentName;
    static String collegeName;
    static String collegeAddress;

    void acceptStudentDetails(Scanner sc)
    {
        studentName = sc.nextLine();
    }
    // Write your code here
    
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student.acceptCollegeDetails(sc);
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            Student s = new Student();
            s.acceptStudentDetails(sc);
            s.displayDetails();
        }
    }
}`,
    solutionCode: `import java.util.Scanner;

class Student{
    String studentName;
    static String collegeName;
    static String collegeAddress;

    void acceptStudentDetails(Scanner sc)
    {
        studentName = sc.nextLine();
    }
    // Write your code here
    // As String required for collage are static do we have to take static void
    // And also when static we cannot take sc.next() so give it in method()
    // Hint is given in void acceptStudentDetails(Scanner sc)
    static void acceptCollegeDetails(Scanner sc){
        collegeName = sc.nextLine();
        collegeAddress = sc.nextLine();
    }
    void displayDetails(){
        System.out.println(studentName);
        System.out.println(collegeName);
        System.out.println(collegeAddress);
    }
}


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student.acceptCollegeDetails(sc);
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            Student s = new Student();
            s.acceptStudentDetails(sc);
            s.displayDetails();
        }
    }
}`,
    hints: [
      {
        "title": "Static Variables",
        "text": "Declare <code>static String collegeName, collegeAddress;</code> to share them across all instances."
      },
      {
        "title": "acceptCollegeDetails",
        "text": "In <code>static void acceptCollegeDetails(Scanner sc)</code>, read <code>collegeName = sc.nextLine(); collegeAddress = sc.nextLine();</code>."
      },
      {
        "title": "displayDetails",
        "text": "Print <code>studentName</code>, <code>collegeName</code>, and <code>collegeAddress</code> on separate lines."
      }
    ],
    sampleCases: [
      {
        "id": 1,
        "input": "ABC College\nChandigarh\n3\nAman\nRahul\nPriya",
        "expected": "Aman\nABC College\nChandigarh\nRahul\nABC College\nChandigarh\nPriya\nABC College\nChandigarh",
        "explanation": "The admin enters the college name as ABC College and address as Chandigarh only once. These static values are shared among all three student objects."
      },
      {
        "id": 2,
        "input": "XYZ University\nDelhi\n2\nKaran\nSimran",
        "expected": "Karan\nXYZ University\nDelhi\nSimran\nXYZ University\nDelhi",
        "explanation": "College details are entered once and shared across Karan and Simran."
      },
      {
        "id": 3,
        "input": "National College\nMumbai\n4\nRohit\nNeha\nArjun\nPooja",
        "expected": "Rohit\nNational College\nMumbai\nNeha\nNational College\nMumbai\nArjun\nNational College\nMumbai\nPooja\nNational College\nMumbai",
        "explanation": ""
      },
      {
        "id": 4,
        "input": "Green Valley College\nPatiala\n1\nHarpreet",
        "expected": "Harpreet\nGreen Valley College\nPatiala",
        "explanation": ""
      },
      {
        "id": 5,
        "input": "Sunrise University\nJaipur\n5\nAnkit\nRiya\nMohit\nSimran\nVarun",
        "expected": "Ankit\nSunrise University\nJaipur\nRiya\nSunrise University\nJaipur\nMohit\nSunrise University\nJaipur\nSimran\nSunrise University\nJaipur\nVarun\nSunrise University\nJaipur",
        "explanation": ""
      },
      {
        "id": 6,
        "input": "Techno Institute\nLudhiana\n2\nDeepak\nMehak",
        "expected": "Deepak\nTechno Institute\nLudhiana\nMehak\nTechno Institute\nLudhiana",
        "explanation": ""
      }
    ]
  },

  q24_method_overloading_calculator: {
    id: "q24_method_overloading_calculator",
    num: "16",
    title: "Method Overloading \u2013 Calculator",
    tag: "Method Overloading",
    category: "Classes & Objects",
    subtitle: "",
    brief: "Riya is solving a mathematics question during her examination and needs to perform different types of calculations. To help her perform these calculations, write a Java program to create a Calculator class that demonstrates method overloading. Create the following overloaded calculate() methods: \u2022 int calculate(int a, int b) \u2013 Calculate the sum of two integers. \u2022 double calculate(double a, double b) \u2013 Calculate the sum of two decimal numbers. \u2022 int calculate(int a, int b, int c) \u2013 Calculate the sum of three integers. In the main() method, take the required values from the user, call the appropriate overloaded calculate() method, and display the result. Constraints: \u2022 -1000 \u2264 a, b, c \u2264 1000",
    inputFormat: "First line: Integer <code>choice</code> (1 for 2 ints, 2 for 2 doubles, 3 for 3 ints).<br>Second line: The numbers.",
    outputFormat: "Print the calculated sum.",
    starterCode: `import java.util.Scanner;

class Calculator {
    // Write your code here









            System.out.println(c.calculate(a, b, d));
        }
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

class Calculator {
    int calculate(int a, int b) {
        return a + b;
    }

    double calculate(double a, double b) {
        return (double)(a + b);
    }

    int calculate(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        if (n == 1) {
            int l = sc.nextInt();
            int y = sc.nextInt();
            System.out.println(c.calculate(l, y));
        }

        if (n == 2) {
            Double m = sc.nextDouble();
            Double q = sc.nextDouble();
            System.out.println(c.calculate(m, q));
        }

        if (n == 3) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int d = sc.nextInt();
            System.out.println(c.calculate(a, b, d));
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "Different Types & Counts",
            "text": "Overload <code>calculate(int, int)</code>, <code>calculate(double, double)</code>, and <code>calculate(int, int, int)</code>."
      },
      {
            "title": "Summation",
            "text": "Return the sum for each method signature."
      }
],
    sampleCases: [
      {
            "id": 1,
            "input": "1\n25 35",
            "expected": "60",
            "explanation": "Option 1 enters two integers 25 and 35. calculate(int, int) returns 25 + 35 = 60."
      },
      {
            "id": 2,
            "input": "2\n12.5 7.5",
            "expected": "20.0",
            "explanation": "Option 2 enters two decimals. calculate(double, double) returns 12.5 + 7.5 = 20.0."
      },
      {
            "id": 3,
            "input": "3\n10 20 30",
            "expected": "60",
            "explanation": "Option 3 enters three integers. calculate(int, int, int) returns 10 + 20 + 30 = 60."
      },
      {
            "id": 4,
            "input": "1\n100 250",
            "expected": "350",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "2\n25.5 14.5",
            "expected": "40.0",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "3\n5 15 25",
            "expected": "45",
            "explanation": ""
      }
]
  },

  q20_method_overloading_cse_department_events: {
    id: "q20_method_overloading_cse_department_events",
    num: "17",
    title: "Method Overloading \u2013 CSE Department Events",
    tag: "Method Overloading",
    category: "Classes & Objects",
    subtitle: "",
    brief: "The CSE Department organized several events for students. The department wants to calculate the total participation points earned by students using different methods. Write a Java program to create an Event class that demonstrates method overloading. Create the following overloaded methods: \u2022 int calculatePoints(int participation) \u2013 Calculate points based only on participation. \u2022 int calculatePoints(int participation, int quiz) \u2013 Calculate total points from participation and quiz. \u2022 int calculatePoints(int participation, int quiz, int presentation) \u2013 Calculate total points from participation, quiz, and presentation. Create a displayResult() method to display the calculated total points. In the main() method, take the required values from the user, call the appropriate overloaded calculatePoints() method, and display the result. Constraints: \u2022 1 \u2264 participation \u2264 100 \u2022 0 \u2264 quiz \u2264 100 \u2022 0 \u2264 presentation \u2264 100",
    inputFormat: "First line: Integer <code>choice</code> (1, 2, or 3).<br>Following lines: Event points.",
    outputFormat: "Print: <code>Total Points: &lt;points&gt;</code>",
    starterCode: `import java.util.Scanner;

class Event {
    // Write your code here
    
    
    

      
   
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = sc.nextInt();
        Event ev = new Event();
        if (choice == 1) {
            int p = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p));
        } else if (choice == 2) {
            int p = sc.nextInt();
            int q = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p, q));
        } else if (choice == 3) {
            int p = sc.nextInt();
            int q = sc.nextInt();
            int pr = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p, q, pr));
        }
    }
}`,
    solutionCode: `import java.util.Scanner;

class Event {
    // Write your code here
    int calculatePoints(int participation) {
        return participation;
    }
    int calculatePoints(int participation, int quiz){
        return participation + quiz;
    }
    int calculatePoints(int participation, int quiz, int presentation){
        return participation + quiz + presentation;
    }
    //ev.displayResult(ev.calculatePoints(p, q, pr));
    //eventually this becomes after calculating points
    // ev.displayResult(p+q+r)  Acc. to choise
    // = ev.displayResult(Number)
    void displayResult(int points){
        System.out.println("Total Points: " + points);
    }
      
   
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = sc.nextInt();
        Event ev = new Event();
        if (choice == 1) {
            int p = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p));
        } else if (choice == 2) {
            int p = sc.nextInt();
            int q = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p, q));
        } else if (choice == 3) {
            int p = sc.nextInt();
            int q = sc.nextInt();
            int pr = sc.nextInt();
            ev.displayResult(ev.calculatePoints(p, q, pr));
        }
    }
}`,
    hints: [
      {
            "title": "Overload Signatures",
            "text": "Create <code>calculatePoints(p)</code>, <code>calculatePoints(p, q)</code>, and <code>calculatePoints(p, q, pr)</code>."
      },
      {
            "title": "Return Sum",
            "text": "Each method returns the sum of its passed integer point parameters."
      }
],
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
  },

  q18_employee_salary_calculation_using_method_overloading: {
    id: "q18_employee_salary_calculation_using_method_overloading",
    num: "18",
    title: "Employee Salary Calculation Using Method Overloading",
    tag: "Method Overloading",
    category: "Classes & Objects",
    category: "Classes & Objects",
    subtitle: "",
    brief: "A company wants to calculate the salary of its employees using classes, objects, and method overloading in Java. Write a Java program to create a class named Employee with data members: empId, empName, basicSalary. Create the overloaded methods: double calculateSalary(double basicSalary), double calculateSalary(double basicSalary, double bonus), and double calculateSalary(double basicSalary, double bonus, double allowance). Create a method void displayDetails(double salary) to display the employee ID, name, and total calculated salary. In main(), create an Employee object, accept details, call calculateSalary(basicSalary, bonus, allowance), and display details.",
    inputFormat: "Line 1: Integer <code>empId</code>.<br>Line 2: String <code>empName</code>.<br>Line 3: Double <code>basicSalary</code>.<br>Line 4: Double <code>bonus</code>.<br>Line 5: Double <code>allowance</code>.",
    outputFormat: "Print:<br>Employee ID<br>Employee Name<br>Total Salary",
    starterCode: `import java.util.Scanner;

class Employee {
    int empId;
    String empName;
    double basicSalary;

    // Write your code here
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Employee e = new Employee();
        e.empId = sc.nextInt();
        sc.nextLine();
        e.empName = sc.nextLine();
        e.basicSalary = sc.nextDouble();
        double bonus = sc.nextDouble();
        double allowance = sc.nextDouble();
        double salary = e.calculateSalary(
            e.basicSalary, bonus, allowance
        );

        e.displayDetails(salary);
    }
}`,
    solutionCode: `import java.util.Scanner;

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

    public void displayDetails(double salary) {
        System.out.println(empId);
        System.out.println(empName);
        System.out.println(salary);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Employee e = new Employee();
        e.empId = sc.nextInt();
        sc.nextLine();
        e.empName = sc.nextLine();
        e.basicSalary = sc.nextDouble();
        double bonus = sc.nextDouble();
        double allowance = sc.nextDouble();
        double salary = e.calculateSalary(
            e.basicSalary, bonus, allowance
        );

        e.displayDetails(salary);
    }
}`,
    hints: [
      {
        "title": "Method Overloading",
        "text": "Define three overloaded <code>calculateSalary</code> methods: with 1 parameter, 2 parameters, and 3 parameters."
      },
      {
        "title": "Formula Implementation",
        "text": "Return <code>basicSalary</code>, <code>basicSalary + bonus</code>, and <code>basicSalary + bonus + allowance</code> respectively."
      },
      {
        "title": "displayDetails Implementation",
        "text": "In <code>displayDetails(double salary)</code>, print <code>empId</code>, <code>empName</code>, and <code>salary</code> on separate lines."
      }
    ],
    sampleCases: [
      {
        "id": 1,
        "input": "101\nAman\n30000\n5000\n3000",
        "expected": "101\nAman\n38000.0",
        "explanation": "Calculated salary: 30000 + 5000 + 3000 = 38000.0"
      },
      {
        "id": 2,
        "input": "102\nRahul\n45000\n6000\n4000",
        "expected": "102\nRahul\n55000.0",
        "explanation": ""
      },
      {
        "id": 3,
        "input": "103\nPriya\n50000\n8000\n5000",
        "expected": "103\nPriya\n63000.0",
        "explanation": ""
      },
      {
        "id": 4,
        "input": "104\nKaran\n25000\n3000\n2000",
        "expected": "104\nKaran\n30000.0",
        "explanation": ""
      },
      {
        "id": 5,
        "input": "105\nSneha\n60000\n10000\n7500",
        "expected": "105\nSneha\n77500.0",
        "explanation": ""
      },
      {
        "id": 6,
        "input": "106\nVikram\n40000\n4500\n3500",
        "expected": "106\nVikram\n48000.0",
        "explanation": ""
      }
    ]
  },

  q19_constructor_overloading_ice_cream_parlour: {
    id: "q19_constructor_overloading_ice_cream_parlour",
    num: "19",
    title: "Constructor Overloading \u2013 Ice Cream Parlour",
    tag: "Constructor Overloading",
    category: "Classes & Objects",
    subtitle: "",
    brief: "An ice cream parlour wants to maintain details of different ice creams ordered by customers. Write a Java program to create an IceCream class that demonstrates constructor overloading. The class should contain the following data members: \u2022 String flavor \u2022 int quantity \u2022 double price Create the following overloaded constructors: \u2022 A default constructor that initializes the flavor as \"Vanilla\", quantity as 1, and price as 50.0. \u2022 A constructor that accepts the flavor and initializes the quantity as 1 and price as 50.0. \u2022 A constructor that accepts the flavor, quantity, and price and initializes all the data members. Create a displayDetails() method to display the ice cream flavor, quantity, and price. In the main() method, take the number of ice creams and their details from the user, create objects using the appropriate overloaded constructors, and display the details of each ice cream. Constraints: \u2022 1 \u2264 n \u2264 100 \u2022 1 \u2264 quantity \u2264 20 \u2022 0 < price \u2264 1000",
    inputFormat: "First line: Number of ice creams <code>n</code>.<br>For each ice cream: choice (1, 2, or 3) followed by the required parameters.",
    outputFormat: "Print flavor, quantity, and price for each ice cream.",
    starterCode: `import java.util.Scanner;

class IceCream {
    String flavor;
    int quantity;
    double price;

    // Write your code here
    
    
    
    
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            int choice = sc.nextInt();
            if (choice == 1) {
                new IceCream().displayDetails();
            } else if (choice == 2) {
                String f = sc.next();
                if (sc.hasNextLine()) {
                    String rest = sc.nextLine();
                    if (rest.trim().length() > 0) f += rest;
                }
                new IceCream(f.trim()).displayDetails();
            } else if (choice == 3) {
                sc.nextLine();
                String line = sc.nextLine().trim();
                String[] parts = line.split(" ");
                double p = Double.parseDouble(parts[parts.length - 1]);
                int q = Integer.parseInt(parts[parts.length - 2]);
                String f = "";
                for (int k = 0; k < parts.length - 2; k++) {
                    f += parts[k] + (k == parts.length - 3 ? "" : " ");
                }
                new IceCream(f, q, p).displayDetails();
            }
        }
    }
}`,
    solutionCode: `import java.util.Scanner;

class IceCream {
    String flavor;
    int quantity;
    double price;

    // 1. Default constructor
    public IceCream() {
        this.flavor = "Vanilla";
        this.quantity = 1;
        this.price = 50.0;
    }
    // 2. Overloaded constructor with flavor parameter
    public IceCream(String flavor) {
        this.flavor = flavor;
        this.quantity = 1;
        this.price = 50.0;
    }
    // 3. Overloaded constructor with all parameters
    public IceCream(String flavor, int quantity, double price) {
        this.flavor = flavor;
        this.quantity = quantity;
        this.price = price;
    }
    // Method to display the ice cream details
    public void displayDetails() {
        System.out.println("Flavor: " + flavor);
        System.out.println("Quantity: " + quantity);
        System.out.println("Price: " + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            int choice = sc.nextInt();
            if (choice == 1) {
                new IceCream().displayDetails();
            } else if (choice == 2) {
                String f = sc.next();
                if (sc.hasNextLine()) {
                    String rest = sc.nextLine();
                    if (rest.trim().length() > 0) f += rest;
                }
                new IceCream(f.trim()).displayDetails();
            } else if (choice == 3) {
                sc.nextLine();
                String line = sc.nextLine().trim();
                String[] parts = line.split(" ");
                double p = Double.parseDouble(parts[parts.length - 1]);
                int q = Integer.parseInt(parts[parts.length - 2]);
                String f = "";
                for (int k = 0; k < parts.length - 2; k++) {
                    f += parts[k] + (k == parts.length - 3 ? "" : " ");
                }
                new IceCream(f, q, p).displayDetails();
            }
        }
    }
}`,
    hints: [
      {
            "title": "Constructor Overloading",
            "text": "Provide default constructor <code>IceCream()</code>, 1-param <code>IceCream(flavor)</code>, and 3-param <code>IceCream(flavor, qty, price)</code>."
      },
      {
            "title": "Defaults",
            "text": "Default flavor is <code>\"Vanilla\"</code>, quantity is <code>1</code>, price is <code>50.0</code>."
      }
],
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
  },

  q23_constructor_overloading_student_football_players: {
    id: "q23_constructor_overloading_student_football_players",
    num: "20",
    title: "Constructor Overloading  Student Football Players",
    tag: "Constructor Overloading",
    category: "Classes & Objects",
    category: "Classes & Objects",
    subtitle: "",
    brief: "A group of students is playing a football match. The coach wants to maintain the details of the players. Write a Java program to create a Player class and demonstrate constructor overloading. Data members: String playerName, int age, int jerseyNumber. Overloaded constructors: Default constructor (Unknown, 18, 0), one-arg constructor (playerName, 18, 0), and three-arg constructor (playerName, age, jerseyNumber). Method: void displayDetails(). In main(), accept n queries with choice and initialize player objects.",
    inputFormat: "Line 1: Integer <code>n</code> (number of players).<br>Next lines: Choice (1, 2, or 3) followed by required parameters (choice 1: none; choice 2: name; choice 3: name, age, jersey).",
    outputFormat: "For each player, display:<br>Player Name<br>Age<br>Jersey Number",
    starterCode: `import java.util.Scanner;

class Player {
    String playerName;
    int age;
    int jerseyNumber;

    // Write your code here
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int choice = sc.nextInt();
            Player p;

            if (choice == 1) {
                p = new Player();
            } else if (choice == 2) {
                String name = sc.next();
                p = new Player(name);
            } else {
                String name = sc.next();
                int age = sc.nextInt();
                int jersey = sc.nextInt();
                p = new Player(name, age, jersey);
            }

            p.displayDetails();
        }
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

class Player {
    String playerName;
    int age;
    int jerseyNumber;

    Player() {
        this.playerName = "Unknown";
        this.age = 18;
        this.jerseyNumber = 0;
    }

    Player(String playerName) {
        this.playerName = playerName;
        this.age = 18;
        this.jerseyNumber = 0;
    }

    Player(String playerName, int age, int jerseyNumber) {
        this.playerName = playerName;
        this.age = age;
        this.jerseyNumber = jerseyNumber;
    }

    void displayDetails() {
        System.out.println(this.playerName);
        System.out.println(this.age);
        System.out.println(this.jerseyNumber);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int choice = sc.nextInt();
            Player p;

            if (choice == 1) {
                p = new Player();
            } else if (choice == 2) {
                String name = sc.next();
                p = new Player(name);
            } else {
                String name = sc.next();
                int age = sc.nextInt();
                int jersey = sc.nextInt();
                p = new Player(name, age, jersey);
            }

            p.displayDetails();
        }
        sc.close();
    }
}`,
    hints: [
      {
        "title": "Default Constructor",
        "text": "Initialize <code>playerName = 'Unknown'; age = 18; jerseyNumber = 0;</code>."
      },
      {
        "title": "One-Argument Constructor",
        "text": "Initialize <code>playerName</code> with the given argument, and set <code>age = 18; jerseyNumber = 0;</code>."
      },
      {
        "title": "Three-Argument Constructor",
        "text": "Initialize all three fields <code>playerName, age, jerseyNumber</code>."
      },
      {
        "title": "displayDetails",
        "text": "Print <code>this.playerName</code>, <code>this.age</code>, and <code>this.jerseyNumber</code> on separate lines."
      }
    ],
    sampleCases: [
      {
        "id": 1,
        "input": "3\n1\n2\nAman\n3\nRahul 20 10",
        "expected": "Unknown\n18\n0\nAman\n18\n0\nRahul\n20\n10",
        "explanation": "Player 1 uses default constructor, Player 2 uses 1-arg constructor, Player 3 uses 3-arg constructor."
      },
      {
        "id": 2,
        "input": "2\n2\nKaran\n3\nSimran 19 7",
        "expected": "Karan\n18\n0\nSimran\n19\n7",
        "explanation": ""
      },
      {
        "id": 3,
        "input": "1\n1",
        "expected": "Unknown\n18\n0",
        "explanation": ""
      },
      {
        "id": 4,
        "input": "2\n3\nAmit 21 9\n3\nRohit 22 11",
        "expected": "Amit\n21\n9\nRohit\n22\n11",
        "explanation": ""
      },
      {
        "id": 5,
        "input": "3\n2\nArjun\n2\nVikas\n3\nMohit 20 5",
        "expected": "Arjun\n18\n0\nVikas\n18\n0\nMohit\n20\n5",
        "explanation": ""
      },
      {
        "id": 6,
        "input": "1\n3\nRavi 23 10",
        "expected": "Ravi\n23\n10",
        "explanation": ""
      }
    ]
  },

  q13_bonus: {
    id: "q13_bonus",
    num: "21",
    title: "Employee Bonus Calculation",
    tag: "Inheritance & super",
    category: "Inheritance",
    brief: "A company has different types of employees, and each type of employee receives a different bonus based on the employee's basic salary.\n\nCreate a superclass Employee that contains employee details and a method calculateBonus() to calculate the bonus.\n\nCreate a subclass Manager that extends Employee and overrides the calculateBonus() method.\n\nFor a regular employee, the bonus is 5% of the basic salary, while for a manager, the bonus is 10% of the basic salary.\n\nWrite a Java program to demonstrate method overriding, where the subclass provides its own implementation of the method defined in the superclass.",
    inputFormat: "First line: An integer id representing the employee ID.\nSecond line: A double salary representing the basic salary.",
    outputFormat: "Print:\nEmployee ID\nBonus",
    starterCode: `import java.util.Scanner;

class Employee {
    int id;
    double salary;
    
    // Write your code here
    


}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        double salary = sc.nextDouble();
        
        Manager manager = new Manager(id, salary);
        System.out.println(manager.id);
        System.out.println(manager.calculateBonus());
    }
}`,
    solutionCode: `import java.util.Scanner;

class Employee {
    int id;
    double salary;
    
    //Write your code here
    Employee(int id, double salary) {
        this.id = id;
        this.salary = salary;
    }
    double calculateBonus() {
        return salary * 0.05;
    }
}
//Inheritance
class Manager extends Employee {
    Manager(int id, double salary) {
        super(id, salary); //Takes id,salary from Employee
    }
    @Override
    double calculateBonus() {
        // TODO: Implement manager bonus (10%)
        return salary*0.10;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        double salary = sc.nextDouble();
        
        Manager manager = new Manager(id, salary);
        System.out.println(manager.id);
        System.out.println(manager.calculateBonus());
    }
}`,
    hints: [
      { title: "Method Overriding", text: "In the <code>Manager</code> class, override <code>calculateBonus()</code> to return <code>salary * 0.10</code>." }
    ],
    sampleCases: [
      { id: 1, input: "101\n50000", expected: "101\n5000.0", explanation: "10% of 50000 is 5000." },
      { id: 2, input: "205\n40000", expected: "205\n4000.0", explanation: "10% of 40000 is 4000." },
      { id: 3, input: "310\n75000", expected: "310\n7500.0", explanation: "" },
      { id: 4, input: "415\n60000", expected: "415\n6000.0", explanation: "" },
      { id: 5, input: "520\n30000", expected: "520\n3000.0", explanation: "" },
      { id: 6, input: "625\n90000", expected: "625\n9000.0", explanation: "" }
    ]
  },

  q15_player_music: {
    id: "q15_player_music",
    num: "22",
    title: "Player Plays Music Using Class and Object",
    tag: "Method Overriding",
    category: "Inheritance",
    subtitle: "Create a class and an object to display details.",
    brief: "A music application allows a player to play a song.\n\nCreate a Player class that stores the player name and song name.\n\nCreate a method playMusic() that displays a message showing which player is playing which song.\n\nCreate an object of the Player class and call the method.",
    inputFormat: "First line: Player name\nSecond line: Song name",
    outputFormat: "Print:\nPlayer is playing Song",
    starterCode: `import java.util.Scanner;

class Player {
    String playerName;
    String songName;

    // TODO: Implement playMusic() to print: playerName + " is playing " + songName
    void playMusic() {
        
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String playerName = sc.nextLine().trim();
        String songName = sc.nextLine().trim();
        
        Player p = new Player();
        p.playerName = playerName;
        p.songName = songName;
        p.playMusic();
    }
}`,
    solutionCode: `import java.util.Scanner;

class Player {
    String playerName;
    String songName;

    void playMusic() {
        System.out.println(playerName + " is playing " + songName);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String playerName = sc.nextLine().trim();
        String songName = sc.nextLine().trim();
        
        Player p = new Player();
        p.playerName = playerName;
        p.songName = songName;
        p.playMusic();
    }
}`,
    hints: [
      { title: "Method Definition", text: "Add <code>void playMusic()</code> inside the <code>Player</code> class." },
      { title: "Method Call", text: "In the main method, call <code>p.playMusic()</code>." }
    ],
    sampleCases: [
      { id: 1, input: "Rahul\nPerfect", expected: "Rahul is playing Perfect", explanation: "" },
      { id: 2, input: "Priya\nShape of You", expected: "Priya is playing Shape of You", explanation: "" },
      { id: 3, input: "Aman\nBeliever", expected: "Aman is playing Believer", explanation: "" },
      { id: 4, input: "Neha\nLove Story", expected: "Neha is playing Love Story", explanation: "" },
      { id: 5, input: "Rohan\nFaded", expected: "Rohan is playing Faded", explanation: "" },
      { id: 6, input: "Simran\nMemories", expected: "Simran is playing Memories", explanation: "" }
    ]
  },

  q11_employee_salary: {
    id: "q11_employee_salary",
    num: "23",
    title: "Employee Salary",
    tag: "Abstract Methods & Classes",
    category: "Abstract Classes & Interfaces",
    brief: "A company manages different types of employees, and each type of employee may have a different method of calculating salary.\n\nTo provide a common structure, create an abstract class Employee that stores the employee ID and basic salary. The class should contain an abstract method calculateSalary() that must be implemented by its subclasses.\n\nCreate a class PermanentEmployee that extends the Employee class. The permanent employee receives a fixed bonus in addition to the basic salary.\n\nOverride the calculateSalary() method to calculate and return the final salary.\n\nUse an abstract class to demonstrate abstraction and method overriding in Java.",
    inputFormat: "First line: An integer id representing the employee ID.\nSecond line: A double basicSalary representing the basic salary.\nThird line: A double bonus representing the bonus amount.",
    outputFormat: "Print:\nEmployee ID\nFinal Salary",
    starterCode: `import java.util.Scanner;

abstract class Employee {
    int id;
    double basicSalary;

    // Write your code here
    
    
    
}



public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        double basicSalary = sc.nextDouble();
        double bonus = sc.nextDouble();
        
        PermanentEmployee emp = new PermanentEmployee(id, basicSalary, bonus);
        System.out.println(emp.id);
        System.out.println(emp.calculateSalary());
    }
}`,
    solutionCode: `import java.util.Scanner;

abstract class Employee {
    int id;
    double basicSalary;

    Employee(int id, double basicSalary) {
        this.id = id;
        this.basicSalary = basicSalary;
    }

    abstract double calculateSalary();
    // It tells that whenever it again calculateSalary formula
    // it calculates for this if subclass is not neeeded
    // basically uses 1 formula for 2 methods => if Employee or PermanentEmployee
    // btw we can do is 
    // double calculateSalary();{
    // return basicSalary;
    // }
}

class PermanentEmployee extends Employee {
    double bonus;

    PermanentEmployee(int id, double basicSalary, double bonus) {
        super(id, basicSalary);
        this.bonus = bonus;
    }

    @Override
    double calculateSalary() {
        // TODO: Implement calculation
        return basicSalary+bonus;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        double basicSalary = sc.nextDouble();
        double bonus = sc.nextDouble();
        
        PermanentEmployee emp = new PermanentEmployee(id, basicSalary, bonus);
        System.out.println(emp.id);
        System.out.println(emp.calculateSalary());
    }
}`,
    hints: [
      { title: "Method Overriding", text: "Implement <code>calculateSalary()</code> inside <code>PermanentEmployee</code> to return <code>basicSalary + bonus</code>." }
    ],
    sampleCases: [
      { id: 1, input: "101\n50000\n5000", expected: "101\n55000.0", explanation: "Basic salary + bonus = 55000" },
      { id: 2, input: "205\n40000\n4000", expected: "205\n44000.0", explanation: "Final salary is 44000.0" },
      { id: 3, input: "310\n75000\n7500", expected: "310\n82500.0", explanation: "" },
      { id: 4, input: "415\n60000\n6000", expected: "415\n66000.0", explanation: "" },
      { id: 5, input: "520\n30000\n3000", expected: "520\n33000.0", explanation: "" },
      { id: 6, input: "625\n90000\n10000", expected: "625\n100000.0", explanation: "" }
    ]
  },

  q12_payment: {
    id: "q12_payment",
    num: "24",
    title: "Interface for Payment Processing",
    tag: "Interfaces",
    category: "Abstract Classes & Interfaces",
    subtitle: "Implement an interface and perform calculation.",
    brief: "A digital payment system supports different types of payment methods.\n\nTo ensure that every payment method follows a common structure, create an interface named Payment containing a method makePayment().\n\nCreate a class CreditCardPayment that implements the Payment interface. The class should receive a payment amount and calculate the final amount by adding a 2% processing fee to the original amount.\n\nThe program should demonstrate how an interface can be implemented by a class and how the implemented method can perform the required calculation.",
    inputFormat: "First line: A double amount representing the payment amount.",
    outputFormat: "Print the final payment amount.",
    starterCode: `import java.util.Scanner;

interface Payment {
    //Write your code here
    
    
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double amount = sc.nextDouble();
        Payment payment = new CreditCardPayment();
        System.out.println(payment.makePayment(amount));
    }
}`,
    solutionCode: `import java.util.Scanner;

interface Payment { 
    // given double amount = sc.nextDouble();
    double makePayment(double amount);  //It is public by default
    // It prints amount
}

class CreditCardPayment implements Payment { //Note: implements is used in Interface
    @Override
    public double makePayment(double amount) { // so this should be public
        return amount + (amount * 0.02);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double amount = sc.nextDouble();
        Payment payment = new CreditCardPayment();
        System.out.println(payment.makePayment(amount));
    }
}`,
    hints: [
      { title: "Percentage Calculation", text: "Add 2% to the original amount using <code>amount + (amount * 0.02)</code>." }
    ],
    sampleCases: [
      { id: 1, input: "5000", expected: "5100.0", explanation: "2% of 5000 is 100, so final is 5100." },
      { id: 2, input: "10000", expected: "10200.0", explanation: "2% of 10000 is 200, so final is 10200." },
      { id: 3, input: "2500", expected: "2550.0", explanation: "" },
      { id: 4, input: "7500", expected: "7650.0", explanation: "" },
      { id: 5, input: "12000", expected: "12240.0", explanation: "" },
      { id: 6, input: "20000", expected: "20400.0", explanation: "" }
    ]
  },

  q1_concat: {
    id: "q1_concat",
    num: "25",
    title: "Concatenate Two Strings",
    category: "Strings & StringBuilder",
    tag: "String Basics",
    subtitle: "Combine two independent strings into a single contiguous string.",
    brief: "Rahul is working on a simple text-processing program. He has two strings and wants to combine them into a single string. Write a Java program to concatenate the two given strings and display the resulting string.",
    inputFormat: "First line: A string str1.\nSecond line: A string str2.",
    outputFormat: "Print the concatenated string.",
    constraints: "Strings contain alphanumeric characters.",
    sampleInput: "Hello\nWorld",
    sampleOutput: "HelloWorld",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Write code here
        

        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Write code here
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();
        String result = str1.concat(str2);
        System.out.println(result);

        sc.close();
    }
}`,
    hints: [
      { title: "String Concatenation Operator", text: "In Java, you can concatenate two strings directly using the <code>+</code> operator: <code>str1 + str2</code> or using <code>str1.concat(str2)</code>." },
      { title: "Printing without spaces", text: "Ensure you don't add extra spaces between the strings unless they were part of the input." }
    ],
    sampleCases: [
      { id: 1, input: "Hello\nWorld", expected: "HelloWorld", explanation: "Hello and World combined form HelloWorld." },
      { id: 2, input: "Java\nProgramming", expected: "JavaProgramming", explanation: "Java and Programming combined form JavaProgramming." },
      { id: 3, input: "Good\nMorning", expected: "GoodMorning", explanation: "Good and Morning combined." },
      { id: 4, input: "Data\nScience", expected: "DataScience", explanation: "Data and Science combined." },
      { id: 5, input: "Computer\nScience", expected: "ComputerScience", explanation: "Computer and Science combined." },
      { id: 6, input: "Open\nSource", expected: "OpenSource", explanation: "Open and Source combined." }
    ],
    edgeCases: []
  },


  q2_palindrome: {
    id: "q2_palindrome",
    num: "26",
    title: "Check String is Palindrome or Not",
    category: "Strings & StringBuilder",
    tag: "String Traversal",
    subtitle: "Determine whether a string reads identically forwards and backwards.",
    brief: "People who want to learn programming are practicing different string-based problems. One such problem is to check whether a given string is a palindrome or not. Write a Java program to determine whether the given string reads the same from left to right and right to left.",
    inputFormat: "First line: A string str.",
    outputFormat: "If the string is a palindrome, print:\nPalindrome\nOtherwise, print:\nNot a Palindrome",
    constraints: "1 ≤ str.length() ≤ 1000",
    sampleInput: "madam",
    sampleOutput: "Palindrome",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }

        // Write code here
        


        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }

        // Write code here
        if(str.equalsIgnoreCase(reverse)){
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a Palindrome");
        }


        sc.close();
    }
}`,
    hints: [
      { title: "Two-Pointer Approach", text: "Use two pointers: <code>left = 0</code> and <code>right = str.length() - 1</code>. Compare characters while moving towards the center." },
      { title: "StringBuilder Reverse", text: "Alternatively, compare <code>str.equals(new StringBuilder(str).reverse().toString())</code>." }
    ],
    sampleCases: [
      { id: 1, input: "madam", expected: "Palindrome", explanation: "madam reads the same forwards and backwards." },
      { id: 2, input: "hello", expected: "Not a Palindrome", explanation: "hello reversed is olleh." },
      { id: 3, input: "level", expected: "Palindrome", explanation: "level is symmetrical." },
      { id: 4, input: "computer", expected: "Not a Palindrome", explanation: "computer reversed is retupmoc." },
      { id: 5, input: "racecar", expected: "Palindrome", explanation: "racecar is a classic palindrome." },
      { id: 6, input: "java", expected: "Not a Palindrome", explanation: "java reversed is avaj." }
    ],
    edgeCases: []
  },


  q3_count_digits: {
    id: "q3_count_digits",
    num: "27",
    title: "Count Digits in a String",
    category: "Strings & StringBuilder",
    tag: "Character Inspection",
    subtitle: "Count how many numerical digits (0-9) exist in an alphanumeric string.",
    brief: "An online registration system allows users to enter a username containing letters and numbers. Write a Java program to count the total number of digits present in the given string.",
    inputFormat: "First line: A string str.",
    outputFormat: "Print the total number of digits present in the string.",
    constraints: "1 ≤ str.length() ≤ 1000",
    sampleInput: "user123",
    sampleOutput: "3",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        // Write your code here

        
        

        System.out.println(digitCount);
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
 
        // Write your code here
        int digitCount = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isDigit(ch)) {
                digitCount++;
            }
        }

        System.out.println(digitCount);
    }
}`,
    hints: [
      { title: "Using Character.isDigit()", text: "Iterate through each character using a loop: <code>if (Character.isDigit(str.charAt(i))) digitCount++;</code>." },
      { title: "ASCII Range", text: "You can also check if <code>ch >= '0' && ch <= '9'</code>." }
    ],
    sampleCases: [
      { id: 1, input: "user123", expected: "3", explanation: "Digits 1, 2, 3 -> count is 3." },
      { id: 2, input: "abc12345", expected: "5", explanation: "Digits 1, 2, 3, 4, 5 -> count is 5." },
      { id: 3, input: "java", expected: "0", explanation: "No digits present." },
      { id: 4, input: "A1B2C3", expected: "3", explanation: "Digits 1, 2, 3 -> count is 3." },
      { id: 5, input: "2026", expected: "4", explanation: "All 4 characters are digits." },
      { id: 6, input: "hello123world45", expected: "5", explanation: "Digits 1, 2, 3, 4, 5 -> count is 5." }
    ],
    edgeCases: []
  },


  q4_toggle_case: {
    id: "q4_toggle_case",
    num: "28",
    title: "Toggle Case of a String",
    category: "Strings & StringBuilder",
    tag: "Character Transformation",
    subtitle: "Invert uppercase letters to lowercase and lowercase letters to uppercase.",
    brief: "A text editor provides an option to change uppercase letters into lowercase and lowercase letters into uppercase. Write a Java program to toggle the case of every alphabet in the given string.",
    inputFormat: "First line: A string str.",
    outputFormat: "Print the string after toggling the case.",
    constraints: "1 ≤ str.length() ≤ 1000",
    sampleInput: "Hello",
    sampleOutput: "hELLO",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = "";

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Write code here
  


        System.out.println(result);
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = "";

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Write code here
            if (Character.isUpperCase(ch)) {
                result += Character.toLowerCase(ch);
            } else if (Character.isLowerCase(ch)) {
                result += Character.toUpperCase(ch);
            } else {
                result += ch;
            }
        }

        System.out.println(result);
        sc.close();
    }
}`,
    hints: [
      { title: "Character Case Methods", text: "Use <code>Character.isUpperCase(ch)</code> and <code>Character.toUpperCase()</code> / <code>Character.toLowerCase()</code>." },
      { title: "Preserve Non-Alphabetic Chars", text: "Keep spaces, digits, and punctuation unchanged." }
    ],
    sampleCases: [
      { id: 1, input: "Hello", expected: "hELLO", explanation: "H -> h, ello -> ELLO" },
      { id: 2, input: "Java", expected: "jAVA", explanation: "J -> j, ava -> AVA" },
      { id: 3, input: "HELLO", expected: "hello", explanation: "All uppercase converted to lowercase." },
      { id: 4, input: "Java Programming", expected: "jAVA pROGRAMMING", explanation: "Spaces preserved while toggling letters." },
      { id: 5, input: "AbC123", expected: "aBc123", explanation: "Digits 123 preserved." }
    ],
    edgeCases: []
  },


  q5_longest_word: {
    id: "q5_longest_word",
    num: "29",
    title: "Find the Longest Word in a String",
    category: "Strings & StringBuilder",
    tag: "Word Splitting",
    subtitle: "Identify the word with maximum character length, breaking ties with first occurrence.",
    brief: "A document analysis system receives a sentence containing multiple words. Write a Java program to find and print the longest word in the given sentence. If two or more words have the same maximum length, print the word that appears first in the sentence.",
    inputFormat: "First line: A sentence containing multiple words separated by spaces.",
    outputFormat: "Print the longest word in the sentence.",
    constraints: "Sentence contains 1 to 100 words separated by spaces.",
    sampleInput: "Java programming language",
    sampleOutput: "programming",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String sentence = sc.nextLine();

        // Write your code here

        

        System.out.println(longestWord);
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String sentence = sc.nextLine().trim();

        // Write your code here
        String longestWord="";
        for(String word : sentence.split(" ")){
            if(word.length() > longestWord.length()){
                longestWord = word;
            }
        }
        

        System.out.println(longestWord);
    }
}`,
    hints: [
      { title: "Splitting into Words", text: "Use <code>sentence.split(\"\\\\s+\")</code> to split by spaces." },
      { title: "Strictly Greater Comparison", text: "Use <code>if (word.length() > longestWord.length())</code> (strict <code>></code>) so that earlier words are preserved in case of ties." }
    ],
    sampleCases: [
      { id: 1, input: "Java programming language", expected: "programming", explanation: "programming has 11 letters, which is longest." },
      { id: 2, input: "I love coding", expected: "coding", explanation: "coding has 6 letters." },
      { id: 3, input: "Data Structures and Algorithms", expected: "Structures", explanation: "Structures and Algorithms are both 10 chars; Structures appears first." },
      { id: 4, input: "Python is powerful", expected: "powerful", explanation: "powerful has 8 chars." },
      { id: 5, input: "Computer Science Engineering", expected: "Engineering", explanation: "Engineering has 11 letters." },
      { id: 6, input: "Java", expected: "Java", explanation: "Single word sentence." }
    ],
    edgeCases: []
  },


  q6_perfect_string: {
    id: "q6_perfect_string",
    num: "30",
    title: "Perfect String",
    category: "Strings & StringBuilder",
    tag: "Character Counting",
    subtitle: "Verify if (a + b) count is odd AND (x + y) count is even.",
    brief: "Riya is working on a special string checker for her programming assignment. She is given a string containing only four lowercase characters: a, b, x, and y.\nA string is considered perfect if it satisfies both of the following conditions:\n• The total count of a and b is odd.\n• The total count of x and y is even.\nSome characters may not appear in the string, and their count should be considered as zero.\nWrite a Java program to check whether the given string is a Perfect String or Not a Perfect String.",
    inputFormat: "First line: A string str containing only the characters a, b, x, and y.",
    outputFormat: "If the string satisfies both conditions, print:\nPerfect\nOtherwise, print:\nNot Perfect",
    constraints: "1 ≤ str.length() ≤ 1000",
    sampleInput: "axy",
    sampleOutput: "Perfect",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        // Write your code here
        

        // Count (a + b) and (x + y):
        

        // Check if abCount is odd AND xyCount is even:
        if (abCount % 2 != 0 && xyCount % 2 == 0) {
            System.out.println("Perfect");
        } else {
            System.out.println("Not Perfect");
        }
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        
        int abCount = 0;
        int xyCount = 0;
        
        // Count (a + b) and (x + y)
        for (char ch : str.toCharArray()) {
            if (ch == 'a' || ch == 'b') {
                abCount++;
            } else if (ch == 'x' || ch == 'y') {
                xyCount++;
            }
        }
        
        // Check if abCount is odd AND xyCount is even
        if (abCount % 2 != 0 && xyCount % 2 == 0) {
            System.out.println("Perfect");
        } else {
            System.out.println("Not Perfect");
        }
        
        sc.close();
    }
}`,
    hints: [
      { title: "Parity Checking", text: "Odd: <code>count % 2 != 0</code>. Even: <code>count % 2 == 0</code> (note that 0 is even!)." },
      { title: "Combined Counts", text: "Combine counts of 'a' + 'b' into one sum, and 'x' + 'y' into another sum." }
    ],
    sampleCases: [
      { id: 1, input: "abxy", expected: "Not Perfect", explanation: "a+b = 2 (even, fails condition 1)." },
      { id: 2, input: "axy", expected: "Perfect", explanation: "a+b = 1 (odd), x+y = 2 (even) -> Perfect." },
      { id: 3, input: "aabbxy", expected: "Not Perfect", explanation: "a+b = 4 (even)." },
      { id: 4, input: "abaxy", expected: "Perfect", explanation: "a+b = 3 (odd), x+y = 2 (even) -> Perfect." },
      { id: 5, input: "xxx", expected: "Not Perfect", explanation: "a+b = 0 (even), x+y = 3 (odd)." },
      { id: 6, input: "a", expected: "Perfect", explanation: "a+b = 1 (odd), x+y = 0 (even) -> Perfect." }
    ],
    edgeCases: []
  },


  q7_vowels_consonants: {
    id: "q7_vowels_consonants",
    num: "31",
    title: "Count Vowels and Consonants in a String",
    category: "Strings & StringBuilder",
    tag: "Character Categorization",
    subtitle: "Count vowels (a, e, i, o, u) and consonants while ignoring spaces and digits.",
    brief: "A text analysis application is designed to examine a given string and determine the number of vowels and consonants present in it. Write a Java program to count the total number of vowels and consonants in the given string. Consider a, e, i, o, u as vowels. Spaces, digits, and special characters should not be counted.",
    inputFormat: "First line: A string str.",
    outputFormat: "Print the number of vowels and consonants in the following format:\nVowels: count\nConsonants: count",
    constraints: "1 ≤ str.length() ≤ 1000",
    sampleInput: "Hello",
    sampleOutput: "2\n3",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int vowels = 0;
        int consonants = 0;

        // Write code here
        



        System.out.println(vowels);
        System.out.println(consonants);
        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int vowels = 0;
        int consonants = 0;

        // Write code here
        str = str.toLowerCase();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isLetter(ch)) {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println(vowels);
        System.out.println(consonants);
        sc.close();
    }
}`,
    hints: [
      { title: "Case Insensitive Check", text: "Convert character to lowercase with <code>Character.toLowerCase(ch)</code> before checking." },
      { title: "Ignore Non-Letters", text: "First verify <code>ch >= 'a' && ch <= 'z'</code> so digits and spaces are ignored." }
    ],
    sampleCases: [
      { id: 1, input: "Hello", expected: "2\n3", explanation: "Vowels: e, o (2). Consonants: H, l, l (3)." },
      { id: 2, input: "Programming", expected: "3\n8", explanation: "Vowels: o, a, i (3). Consonants: 8." },
      { id: 3, input: "Java Programming", expected: "5\n10", explanation: "Spaces ignored." },
      { id: 4, input: "Computer123", expected: "3\n5", explanation: "Digits 1, 2, 3 ignored." },
      { id: 5, input: "AEIOU", expected: "5\n0", explanation: "All uppercase vowels." },
      { id: 6, input: "xyz123", expected: "0\n3", explanation: "Consonants: x, y, z." }
    ],
    edgeCases: []
  },


  q8_validate_username: {
    id: "q8_validate_username",
    num: "32",
    title: "Validate Username Based on Character Conditions",
    category: "Strings & StringBuilder",
    tag: "Validation & Security",
    subtitle: "Enforce exact constraints: exactly 3 digits, 2 uppercase, and 2 lowercase letters.",
    brief: "A registration system requires users to create a username that follows specific security rules. Write a Java program to check whether the given username satisfies all the required conditions.\nThe username must contain:\n• Exactly 3 digits\n• Exactly 2 uppercase characters\n• Exactly 2 lowercase characters\nIf all three conditions are satisfied, the username is considered Valid.",
    inputFormat: "First line: A string username.",
    outputFormat: "If the username satisfies all the given conditions, print:\nValid Username\nOtherwise, print:\nInvalid Username",
    constraints: "1 ≤ username.length() ≤ 100",
    sampleInput: "ABcd123",
    sampleOutput: "Valid Username",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String username = sc.nextLine();

        int upper = 0;
        int lower = 0;
        int digits = 0;

        // Write your code here
        
        

        // Must have exactly 3 digits, 2 uppercase, and 2 lowercase:
        if (digits == 3 && upper == 2 && lower == 2) {
            System.out.println("Valid Username");
        } else {
            System.out.println("Invalid Username");
        }
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String username = sc.nextLine();

        int upper = 0;
        int lower = 0;
        int digits = 0;

        // Write your Code here
        for (int i = 0; i < username.length(); i++) {
            char ch = username.charAt(i);
            if (Character.isUpperCase(ch)) {
                upper++;
            } else if (Character.isLowerCase(ch)) {
                lower++;
            } else if (Character.isDigit(ch)) {
                digits++;
            }
        }

        if (digits == 3 && upper == 2 && lower == 2) {
            System.out.println("Valid Username");
        } else {
            System.out.println("Invalid Username");
        }
    }
}`,
    hints: [
      { title: "Exact Count Condition", text: "Verify <code>upper == 2 && lower == 2 && digits == 3</code>." },
      { title: "Character methods", text: "Use <code>Character.isUpperCase()</code>, <code>Character.isLowerCase()</code>, and <code>Character.isDigit()</code>." }
    ],
    sampleCases: [
      { id: 1, input: "ABcd123", expected: "Valid Username", explanation: "2 uppercase (A,B), 2 lowercase (c,d), 3 digits (1,2,3)." },
      { id: 2, input: "XYab456", expected: "Valid Username", explanation: "2 uppercase (X,Y), 2 lowercase (a,b), 3 digits (4,5,6)." },
      { id: 3, input: "ABCde123", expected: "Invalid Username", explanation: "3 uppercase (A,B,C) -> Invalid." },
      { id: 4, input: "ABcde123", expected: "Invalid Username", explanation: "3 lowercase (c,d,e) -> Invalid." },
      { id: 5, input: "ABcd12", expected: "Invalid Username", explanation: "Only 2 digits instead of 3." },
      { id: 6, input: "abCD789", expected: "Valid Username", explanation: "2 lowercase, 2 uppercase, 3 digits." }
    ],
    edgeCases: []
  },


  q9_password_strength: {
    id: "q9_password_strength",
    num: "33",
    title: "Check Password Strength",
    category: "Strings & StringBuilder",
    tag: "Validation & Security",
    subtitle: "Check for uppercase, lowercase, digit, and special character presence.",
    brief: "A website requires users to create secure passwords. A password is considered Strong if it contains at least one uppercase character, one lowercase character, one digit, and one special character. Write a Java program to check whether the given password is Strong or Weak.",
    inputFormat: "First line: A string password.",
    outputFormat: "If all the required conditions are satisfied, print:\nStrong Password\nOtherwise, print:\nWeak Password",
    constraints: "1 ≤ password.length() ≤ 100",
    sampleInput: "Abc@123",
    sampleOutput: "Strong Password",
    starterCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String password = sc.nextLine();
        int upperCount = 0;
        int lowerCount = 0;
        int digitCount = 0;
        int specialCount = 0;

        // Write your code
        
        
            

        if (upperCount >= 1 && lowerCount >= 1 && digitCount >= 1 && specialCount >= 1) {
            System.out.println("Strong Password");
        } else {
            System.out.println("Weak Password");
        }
    }
}`,
    solutionCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String password = sc.nextLine();
        int upperCount = 0;
        int lowerCount = 0;
        int digitCount = 0;
        int specialCount = 0;

        // Write your code
        for(int i=0; i<password.length();i++){
        char ch = password.charAt(i);
            if (Character.isUpperCase(ch)) {
                upperCount++;
            } else if (Character.isLowerCase(ch)) {
                lowerCount++;
            } else if (Character.isDigit(ch)) {
                digitCount++;
            } else {
                specialCount++;
            }
        }
            

        if (upperCount >= 1 && lowerCount >= 1 && digitCount >= 1 && specialCount >= 1) {
            System.out.println("Strong Password");
        } else {
            System.out.println("Weak Password");
        }
    }
}`,
    hints: [
      { title: "Special Character Definition", text: "Any non-alphanumeric character that isn't whitespace counts as special (e.g. <code>!Character.isLetterOrDigit(ch)</code>)." },
      { title: "All Flags Required", text: "All 4 flags (hasUpper, hasLower, hasDigit, hasSpecial) must be <code>true</code>." }
    ],
    sampleCases: [
      { id: 1, input: "Abc@123", expected: "Strong Password", explanation: "Contains A (upper), b (lower), 1 (digit), @ (special)." },
      { id: 2, input: "abcdef123", expected: "Weak Password", explanation: "Missing uppercase and special character." },
      { id: 3, input: "Java@2026", expected: "Strong Password", explanation: "Contains uppercase, lowercase, special char, digits." },
      { id: 4, input: "abc@123", expected: "Weak Password", explanation: "Missing uppercase." },
      { id: 5, input: "ABC@123", expected: "Weak Password", explanation: "Missing lowercase." },
      { id: 6, input: "Code#789X", expected: "Strong Password", explanation: "Contains all 4 requirements." }
    ],
    edgeCases: []
  },


  q10_anagrams: {
    id: "q10_anagrams",
    num: "34",
    title: "Check Whether Two Strings are Anagrams",
    category: "Strings & StringBuilder",
    tag: "Frequency & Permutations",
    subtitle: "Determine if two strings contain identical character frequencies.",
    brief: "A word puzzle application needs to determine whether two given strings are anagrams of each other. Two strings are considered anagrams if they contain the same characters with the same frequency, but the characters may appear in a different order.\nWrite a Java program to check whether the given two strings are anagrams.",
    inputFormat: "The input consists of two lines:\nFirst line: A string str1.\nSecond line: A string str2.\nThe strings contain only lowercase English letters.",
    outputFormat: "If the two strings are anagrams, print:\nAnagram\nOtherwise, print:\nNot Anagram",
    constraints: "Strings contain lowercase english letters.",
    starterCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();
        
        // Write your code here
        // Check if str1 and str2 are anagrams:
        
        
        
    }
}`,
    solutionCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();
        
        // Write your code here
        // Check if str1 and str2 are anagrams:
        char[] ch1 = str1.toCharArray();
        Arrays.sort(ch1);
        char[] ch2 = str2.toCharArray();
        Arrays.sort(ch2);

        if (Arrays.equals(ch1, ch2)) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not Anagram");
        }
    }
}`,
    hints: [
      { title: "Sorting Technique", text: "Convert both strings to <code>char[]</code> with <code>str.toCharArray()</code>, sort them with <code>Arrays.sort()</code>, and compare with <code>Arrays.equals()</code>." },
      { title: "Length Check", text: "If <code>str1.length() != str2.length()</code>, they can never be anagrams." }
    ],
    sampleCases: [
      { id: 1, input: "listen\nsilent", expected: "Anagram", explanation: "listen and silent have identical characters." },
      { id: 2, input: "hello\nworld", expected: "Not Anagram", explanation: "Different character sets." },
      { id: 3, input: "triangle\nintegral", expected: "Anagram", explanation: "Same letters rearranged." },
      { id: 4, input: "apple\npapel", expected: "Anagram", explanation: "Same letters rearranged." },
      { id: 5, input: "java\navac", expected: "Not Anagram", explanation: "Different character frequencies." },
      { id: 6, input: "earth\nheart", expected: "Anagram", explanation: "Same letters rearranged." }
    ],
    edgeCases: []
  },

  q40_invalid_number_conversion: {
    id: "q40_invalid_number_conversion",
    num: "35",
    title: "Invalid Number Conversion",
    tag: "NumberFormatException",
    category: "Exception Handling",
    subtitle: "",
    brief: "A payment system receives an amount as a string. Before processing the payment, the system must convert it into an integer. Write a Java program using try and catch to handle invalid numeric input.",
    inputFormat: "First line: A string amount.",
    outputFormat: "If conversion is successful:\nAmount: value\nOtherwise:\nInvalid Amount",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String amount = sc.nextLine();
        try {
            int value = Integer.parseInt(amount);
            // Write code here
           


        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String amount = sc.nextLine();
        try {
            int value = Integer.parseInt(amount);
            // Write code here
            System.out.println(value);
        } catch (NumberFormatException e) {
            System.out.println("Invalid Amount");
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "Integer.parseInt",
            "text": "Parse using <code>int val = Integer.parseInt(line);</code> inside a <code>try</code> block."
      },
      {
            "title": "Catching NumberFormatException",
            "text": "In <code>catch (NumberFormatException e)</code>, print <code>\"Invalid Amount\"</code>."
      }
],
    sampleCases: [
      {
            "id": 1,
            "input": "5000",
            "expected": "5000",
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
            "expected": "2500",
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
            "expected": "9999",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "100@200",
            "expected": "Invalid Amount",
            "explanation": ""
      }
]
  },

  q41_age_validation: {
    id: "q41_age_validation",
    num: "36",
    title: "Age Validation",
    tag: "Custom Exceptions",
    category: "Exception Handling",
    subtitle: "",
    brief: "An amusement park allows visitors to enter a special ride only if their age is at least 18. Write a Java program that uses the throw keyword to generate an exception when the entered age is below 18.",
    inputFormat: "First line: An integer age.",
    outputFormat: "If age is 18 or above:\nEligible for Ride\nOtherwise:\nNot Eligible for Ride",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();

        // Write code here
        


        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();

        // Write code here
        try {
            if (age < 18) {
                throw new Exception("Not Eligible for Ride");
            }
            System.out.println("Eligible for Ride");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "throw Keyword",
            "text": "If <code>age &lt; 18</code>, write <code>throw new Exception(\"Not Eligible for Ride\");</code>."
      },
      {
            "title": "Catch & Message",
            "text": "Catch <code>Exception e</code> and print <code>e.getMessage()</code>."
      }
],
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
  },

  q42_bank_transaction: {
    id: "q42_bank_transaction",
    num: "37",
    title: "Bank Transaction",
    tag: "Custom Exceptions",
    category: "Exception Handling",
    subtitle: "",
    brief: "A banking application performs a withdrawal operation. Whether the transaction succeeds or fails, the system must display a message indicating that the transaction process has ended. Write a Java program using try, catch, and finally.",
    inputFormat: "First line: Available balance.\nSecond line: Withdrawal amount.",
    outputFormat: "For a successful withdrawal:\nWithdrawal Successful\nTransaction Completed\nIf the withdrawal amount is greater than the balance:\nInsufficient Balance\nTransaction Completed",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        int withdrawal = sc.nextInt();

        // Write code here
        


        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        int withdrawal = sc.nextInt();

        // Write code here
        try {
            if (withdrawal > balance) {
                throw new Exception("Insufficient Balance");
            }
            System.out.println("Withdrawal Successful");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Transaction Completed");
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "finally Block",
            "text": "Code in the <code>finally</code> block executes regardless of whether an exception is thrown."
      },
      {
            "title": "Completion Message",
            "text": "Place <code>System.out.println(\"Transaction Completed\");</code> in the <code>finally</code> block."
      }
],
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
  },

  q43_convert_string_to_integer: {
    id: "q43_convert_string_to_integer",
    num: "38",
    title: "Convert String to Integer",
    tag: "Try-Catch Blocks",
    category: "Exception Handling",
    subtitle: "",
    brief: "A ticket booking system receives the number of tickets as a string. The system must convert the input into an integer before processing the booking. Use try-catch to handle invalid numeric input.",
    inputFormat: "First line: A string tickets.",
    outputFormat: "For valid input:\nTickets: value\nFor invalid input:\nInvalid Ticket Count",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  
        String str = sc.nextLine();

        // Write your code here
        // On success: print "Tickets: " + tickets
        // On NumberFormatException: print "Invalid Ticket Count"

        
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  
        String str = sc.nextLine();

        // Write your code here
        // On success: print "Tickets: " + tickets
        // On NumberFormatException: print "Invalid Ticket Count"

        try {
            int val = Integer.parseInt(str);
            System.out.println("Tickets: " + val);
        } catch (NumberFormatException e) {  // also runs on (Exception e)
            System.out.println("Invalid Ticket Count");
        }


    }
}`,
    hints: [
      {
            "title": "try-catch Block",
            "text": "Attempt <code>int count = Integer.parseInt(str);</code>."
      },
      {
            "title": "Handle Format Error",
            "text": "Catch <code>NumberFormatException</code> and print <code>\"Invalid Ticket Count\"</code>."
      }
],
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
  },

  q44_safe_array_access: {
    id: "q44_safe_array_access",
    num: "39",
    title: "Safe Array Access",
    tag: "ArrayIndexOutOfBoundsException",
    category: "Exception Handling",
    subtitle: "",
    brief: "A warehouse application stores product quantities in an array. The user enters an index to check the quantity of a product. Use multiple catch clauses to handle invalid input and invalid array indexes.",
    inputFormat: "First line: Number of products.\nSecond line: Product quantities.\nThird line: Index.",
    outputFormat: "Quantity: value\nFor invalid index:\nInvalid Index\nFor invalid input:\nInvalid Input",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);

        // Write your code
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
        try {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int index = sc.nextInt();
            System.out.println("Quantity: " + arr[index]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid Index");
        } catch (Exception e) {
            System.out.println("Invalid Input");
        }
    }
}`,
    hints: [
      {
            "title": "Multiple Catch Blocks",
            "text": "Catch <code>ArrayIndexOutOfBoundsException</code> first, followed by general <code>Exception</code>."
      },
      {
            "title": "Order of Handlers",
            "text": "More specific exceptions must be placed before general ones."
      }
],
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
  },

  q45_atm_withdrawal: {
    id: "q45_atm_withdrawal",
    num: "40",
    title: "ATM Withdrawal",
    tag: "Custom Exceptions",
    category: "Exception Handling",
    subtitle: "",
    brief: "An ATM system first verifies the account balance and then performs a withdrawal. Use a nested try block to handle an invalid withdrawal amount and division-related errors separately.",
    inputFormat: "First line: Account balance.\nSecond line: Withdrawal amount.",
    outputFormat: "Withdrawal Successful\nIf the amount is invalid:\nInvalid Withdrawal",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int balance = sc.nextInt();
        int amount = sc.nextInt();
        try {
            //Write your code here


        } 
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int balance = sc.nextInt();
        int amount = sc.nextInt();
        try {
            //Write your code here
            if(balance<amount){
                throw new Exception();
            } else if (balance>=amount){
                System.out.println("Withdrawal Successful");
            }
            
        } catch (Exception e){
            System.out.println("Invalid Withdrawal");
        }
        
        
    }
}`,
    hints: [
      {
            "title": "Validation Logic",
            "text": "If <code>amount &gt; balance</code>, throw <code>new Exception(\"Invalid Withdrawal\")</code>."
      },
      {
            "title": "Catching Error",
            "text": "Catch the exception and display <code>e.getMessage()</code>."
      }
],
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
  },

  q46_validate_marks: {
    id: "q46_validate_marks",
    num: "41",
    title: "Validate Marks",
    tag: "Throw Keyword",
    category: "Exception Handling",
    subtitle: "",
    brief: "An examination system accepts marks for a subject. Marks must be between 0 and 100. Use the throw keyword to generate an exception when invalid marks are entered.",
    inputFormat: "First line: Integer marks.",
    outputFormat: "Valid Marks\nor\nInvalid Marks",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        try {
            // Write code here
            


        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        try {
            // Write code here
            if (marks < 0 || marks > 100) {
                throw new Exception("Invalid Marks");
            }
            System.out.println("Valid Marks");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "Range Check",
            "text": "Valid marks are between <code>0</code> and <code>100</code> inclusive."
      },
      {
            "title": "throw Keyword",
            "text": "If <code>marks &lt; 0 || marks &gt; 100</code>, throw <code>new Exception(\"Invalid Marks\");</code>."
      }
],
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
            "input": "-10",
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
  },

  q47_transaction_completion: {
    id: "q47_transaction_completion",
    num: "42",
    title: "Transaction Completion",
    tag: "Finally Block",
    category: "Exception Handling",
    subtitle: "",
    brief: "An online payment application processes a transaction. Whether the payment is successful or an exception occurs, the system must always display \"Transaction Process Completed\". Use the finally block.",
    inputFormat: "First line: Account balance.\nSecond line: Payment amount.",
    outputFormat: "For successful payment:\nPayment Successful\nTransaction Process Completed\nFor insufficient balance:\nInsufficient Balance\nTransaction Process Completed",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        int amount = sc.nextInt();

        // Write your code here
        // If amount > balance, print "Insufficient Balance"
        // Otherwise, print "Payment Successful"
        // In finally block, print "Transaction Process Completed"
        
        
        
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        int amount = sc.nextInt();

        // Write your code here
        // If amount > balance, print "Insufficient Balance"
        // Otherwise, print "Payment Successful"
        // In finally block, print "Transaction Process Completed"
        try {
            if (amount > balance) {
                throw new Exception();
            }
            else System.out.println("Payment Successful");
        }catch (Exception e){
            System.out.println("Insufficient Balance");
        }
        finally {
            System.out.println("Transaction Process Completed");
        }
    }
}`,
    hints: [
      {
            "title": "try-finally",
            "text": "Place balance verification in <code>try</code>, and completion message in <code>finally</code>."
      },
      {
            "title": "Guaranteed Execution",
            "text": "The <code>finally</code> block guarantees the process completion message is printed."
      }
],
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
  },

  q48_fruit_selling_system: {
    id: "q48_fruit_selling_system",
    num: "43",
    title: "Fruit Selling System",
    tag: "Custom Exceptions",
    category: "Exception Handling",
    subtitle: "",
    brief: "Riya sells fruits at a local market. She maintains the price of fruits and wants to calculate the total cost based on the quantity purchased by a customer. Write a Java program using try, catch, and finally to safely handle invalid input and ensure that the transaction completion message is always displayed.\nThe program should store the price of a fruit and accept the quantity from the user. The total cost is calculated as:\nTotal Cost = Price × Quantity\nIf the user enters an invalid quantity, the program should handle the exception using catch.\nThe finally block must always print:\nTransaction Completed",
    inputFormat: "The input consists of two lines:\nFirst line: An integer representing the price of one fruit.\nSecond line: An integer representing the quantity purchased.",
    outputFormat: "If the input is valid, print:\nTotal Cost: <total>\nTransaction Completed\nIf the quantity is invalid or cannot be converted into an integer, print:\nInvalid Quantity\nTransaction Completed",
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
        // Read price and quantity. Calculate Total Cost = Price * Quantity
        // On NumberFormatException: print "Invalid Quantity"
        // In finally block: print "Transaction Completed"

        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here

        try {
            int price = sc.nextInt();
            int quantity = sc.nextInt();
            System.out.println("Total Cost: " + (price * quantity));
        } catch (Exception e) {
            System.out.println("Invalid Quantity");
        } finally {
            System.out.println("Transaction Completed");
        }
    }
}`,
    hints: [
      {
            "title": "Calculation",
            "text": "Parse both inputs as integers and compute <code>price * quantity</code>."
      },
      {
            "title": "try-catch-finally",
            "text": "Handle <code>NumberFormatException</code> in <code>catch</code>, and print completion in <code>finally</code>."
      }
],
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
  },

  q49_bank_account_validation: {
    id: "q49_bank_account_validation",
    num: "44",
    title: "Bank Account Validation",
    tag: "Custom Exceptions",
    category: "Exception Handling",
    subtitle: "",
    brief: "Riya is managing a banking system where customers can request a cash withdrawal from their accounts. Before processing a withdrawal, the system must verify whether the requested withdrawal amount is valid.\nWrite a Java program that uses throws to declare an exception when the withdrawal amount is invalid. The program should use a finally block to display a message indicating that the banking transaction has been completed, regardless of whether an exception occurs.\nCreate a method named validateWithdrawal() that accepts the withdrawal amount. If the amount is less than or equal to 0, the method should throw an exception.",
    inputFormat: "The input consists of one line:\nAn integer representing the withdrawal amount.",
    outputFormat: "If the withdrawal amount is valid, print:\nValid Withdrawal\nTransaction Completed\nIf the withdrawal amount is invalid, print:\nInvalid Withdrawal\nTransaction Completed",
    starterCode: `import java.util.Scanner;

public class Main {
    // Method that throws an exception if amount <= 0
    static void validateWithdrawal(int amount) throws Exception {
        // TODO: If amount <= 0, throw an exception using 'throw'
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int amount = sc.nextInt();
        
        // Call validateWithdrawal inside try-catch with finally:
        
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    static void validateWithdrawal(int amount) throws Exception {
        if (amount <= 0) {
            throw new Exception("Invalid");
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int amount = sc.nextInt();
        
        try {
            validateWithdrawal(amount);
            System.out.println("Valid Withdrawal");
        } catch (Exception e) {
            System.out.println("Invalid Withdrawal");
        } finally {
            System.out.println("Transaction Completed");
        }
    }
}`,
    hints: [
      {
            "title": "throws Declaration",
            "text": "Declare <code>static void validateWithdrawal(int amount) throws Exception</code>."
      },
      {
            "title": "Negative/Zero Check",
            "text": "If <code>amount &le; 0</code>, throw an exception. Catch in main and print completion in <code>finally</code>."
      }
],
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
            "input": "-1000",
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
            "input": "-500",
            "expected": "Invalid Withdrawal\nTransaction Completed",
            "explanation": ""
      }
]
  },

  q35_maximum_and_minimum_element_in_arraylist: {
    id: "q35_maximum_and_minimum_element_in_arraylist",
    num: "45",
    title: "Maximum and Minimum Element in ArrayList",
    tag: "ArrayList Basics",
    category: "Collections Framework",
    subtitle: "",
    brief: "A student is maintaining a list of marks using an ArrayList<Integer>. Write a Java program to find the maximum and minimum element from the given ArrayList.\nThe program should accept the number of elements and their values from the user, store them in an ArrayList, and determine the largest and smallest elements.",
    inputFormat: "• First line: An integer n representing the number of elements.\n• Second line: n integer elements separated by spaces.",
    outputFormat: "Print the maximum and minimum elements in the following format:\nMaximum: value\nMinimum: value",
    starterCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> marks = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            marks.add(sc.nextInt());
        }

        // Write code here
        




        System.out.println(maximum);
        System.out.println(minimum);
        sc.close();
    }
}`,
    solutionCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> marks = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            marks.add(sc.nextInt());
        }

        // Write code here
        int maximum = marks.get(0);
        int minimum = marks.get(0);

        for (int mark : marks) {
            if (mark > maximum) {
                maximum = mark;
            } else if (mark < minimum) {
                minimum = mark;
            }
        }

        System.out.println(maximum);
        System.out.println(minimum);
        sc.close();
    }
}`,
    hints: [
      {
            "title": "Collections Utility",
            "text": "You can use <code>Collections.max(list)</code> and <code>Collections.min(list)</code>."
      },
      {
            "title": "Manual Loop",
            "text": "Alternatively, traverse the list maintaining <code>max</code> and <code>min</code> variables."
      }
],
    sampleCases: [
      {
            "id": 1,
            "input": "6\n45 78 23 91 56 34",
            "expected": "91\n23",
            "explanation": "The largest element in the ArrayList is 91, and the smallest element is 23."
      },
      {
            "id": 2,
            "input": "5\n120 85 250 45 175",
            "expected": "250\n45",
            "explanation": "The maximum element is 250, while the minimum element is 45."
      },
      {
            "id": 3,
            "input": "4\n10 20 30 40",
            "expected": "40\n10",
            "explanation": ""
      },
      {
            "id": 4,
            "input": "5\n55 55 55 55 55",
            "expected": "55\n55",
            "explanation": ""
      },
      {
            "id": 5,
            "input": "7\n12 89 34 67 5 45 23",
            "expected": "89\n5",
            "explanation": ""
      },
      {
            "id": 6,
            "input": "6\n-10 25 -35 40 15 -5",
            "expected": "40\n-35",
            "explanation": ""
      }
]
  },

  q36_find_second_largest_element_in_arraylist: {
    id: "q36_find_second_largest_element_in_arraylist",
    num: "46",
    title: "Find Second Largest Element in ArrayList",
    tag: "ArrayList Operations",
    category: "Collections Framework",
    subtitle: "",
    brief: "A sports application stores the scores of players in an ArrayList<Integer>. Write a Java program to find the second largest element from the given ArrayList.",
    inputFormat: "First line: An integer n representing the number of elements.\nSecond line: n integer scores.",
    outputFormat: "Print the second largest element.",
    starterCode: `import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        
        //Write your code here
        

        sc.close();
    }
}`,
    solutionCode: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
        
        //Write your code here
        //Take input of numbers
        for (int i = 0; i < n; i++) {
            list.add(sc.nextInt());
        }
        // 1. Sort list in ascending order: [23, 34, 45, 56, 78, 91]
        Collections.sort(list);
        // 2. Second largest is at index (n - 2)
        System.out.println(list.get(n - 2));
        
        sc.close();
    }
}`,
    hints: [
      {
            "title": "Tracking Max & Second Max",
            "text": "If <code>num &gt; max</code>, update <code>secondMax = max; max = num;</code>."
      },
      {
            "title": "Distinct Check",
            "text": "Else if <code>num &gt; secondMax &amp;&amp; num != max</code>, update <code>secondMax = num;</code>."
      }
],
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
  },

  q37_sum_of_arraylist_elements: {
    id: "q37_sum_of_arraylist_elements",
    num: "47",
    title: "Sum of ArrayList Elements",
    tag: "ArrayList Operations",
    category: "Collections Framework",
    subtitle: "",
    brief: "A school maintains the marks of students who appeared for a class test. The marks are stored in an ArrayList<Integer> because the number of students may vary. The teacher wants to calculate the total marks obtained by all students for further analysis. Write a Java program that accepts the number of students and their marks, stores all the marks in an ArrayList<Integer>, and calculates the sum of all the elements present in the list.\nThe program should traverse the ArrayList and add each element to a sum variable. Finally, display the total sum of all the marks.",
    inputFormat: "First line: An integer n representing the number of students.\nSecond line: n integer marks separated by spaces.",
    outputFormat: "Print the sum of all elements in the ArrayList.",
    starterCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> marks = new ArrayList<>();

        // Write code here
       



        System.out.println(sum);
        sc.close();
    }
}`,
    solutionCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> marks = new ArrayList<>();

        // Write code here
        for (int i = 0; i < n; i++) {
            marks.add(sc.nextInt());
        }

        int sum = 0;
        for (int mark : marks) {
            sum += mark;
        }

        System.out.println(sum);
        sc.close();
    }
}`,
    hints: [
      {
            "title": "For-Each Loop",
            "text": "Iterate using <code>for (int num : list) { sum += num; }</code>."
      },
      {
            "title": "Output",
            "text": "Print the sum directly using <code>System.out.println(sum);</code>."
      }
],
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
  },

  q38_count_even_and_odd_numbers_from_arraylist: {
    id: "q38_count_even_and_odd_numbers_from_arraylist",
    num: "48",
    title: "Count Even and Odd Numbers from ArrayList",
    tag: "ArrayList Operations",
    category: "Collections Framework",
    subtitle: "",
    brief: "A teacher is conducting a mathematics activity in which students are given a list of integers. The teacher wants to analyze the numbers by separating them into two categories: even numbers and odd numbers. The numbers are stored in an ArrayList<Integer> for easy processing.\nWrite a Java program that accepts n integers from the user and stores them in an ArrayList<Integer>. The program should traverse the ArrayList and count the total number of even and odd elements. A number is considered even if it is completely divisible by 2; otherwise, it is considered odd. Finally, display the count of even numbers followed by the count of odd numbers.",
    inputFormat: "First line: An integer n representing the number of elements.\nSecond line: n integer elements separated by spaces.",
    outputFormat: "Print the count of even numbers and odd numbers on separate lines.",
    starterCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            numbers.add(sc.nextInt());
        }

        // Write code here
        



        System.out.println(even);
        System.out.println(odd);
        sc.close();
    }
}`,
    solutionCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            numbers.add(sc.nextInt());
        }

        // Write code here
        int even = 0;
        int odd = 0;
        for (int num : numbers) {
            if (num % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        System.out.println(even);
        System.out.println(odd);
        sc.close();
    }
}`,
    hints: [
      {
            "title": "Traverse & Parity Check",
            "text": "Check each element with <code>num % 2 == 0</code>."
      },
      {
            "title": "Two Lines",
            "text": "Print <code>even</code> on line 1, and <code>odd</code> on line 2."
      }
],
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
  },

  q39_reverse_arraylist: {
    id: "q39_reverse_arraylist",
    num: "49",
    title: "Reverse ArrayList",
    tag: "ArrayList Operations",
    category: "Collections Framework",
    subtitle: "",
    brief: "A music application stores the IDs of songs in an ArrayList<Integer>. The application displays the songs in the order in which they were added, but the user now wants to view them in the reverse order. Write a Java program that accepts n integer elements from the user, stores them in an ArrayList<Integer>, and reverses the order of all elements.\nThe program should traverse the ArrayList from the last element to the first element and display the elements in reverse order.",
    inputFormat: "First line: An integer n representing the number of elements.\nSecond line: n integer elements separated by spaces.",
    outputFormat: "Print the elements of the ArrayList in reverse order.",
    starterCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> numbers = new ArrayList<>();

        // Write code here
        




        sc.close();
    }
}`,
    solutionCode: `import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> numbers = new ArrayList<>();

        // Write code here
        for (int i = 0; i < n; i++) {
            numbers.add(sc.nextInt());
        }

        // for (int i = numbers.size() - 1; i >= 0; i--) {
        for (int i = n - 1; i >= 0; i--) {
            System.out.print(numbers.get(i) + " ");
        }

        sc.close();
    }
}`,
    hints: [
      {
            "title": "Collections.reverse",
            "text": "Use <code>Collections.reverse(list);</code> to reverse the list in-place."
      },
      {
            "title": "Reverse Iteration",
            "text": "Or loop backwards from <code>list.size() - 1</code> down to <code>0</code>."
      }
],
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
};

let currentProblemId = "q25_check_number_is_palindrome_or_not";
let isRunning = false;
let compilerReady = false;
let cmEditor = null;
let testResultsMap = new Map(); // id -> result object
const solvedProblems = new Set(); // Track solved problem IDs
const SOLVED_STORAGE_KEY = "java_bench_solved_questions";

function loadSolvedProgress() {
  try {
    const raw = localStorage.getItem(SOLVED_STORAGE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        arr.forEach(id => solvedProblems.add(id));
      }
    }
  } catch (e) {}
}

function saveSolvedProgress() {
  try {
    localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify(Array.from(solvedProblems)));
  } catch (e) {}
}

// DOM Elements
const problemListNav = document.getElementById("problem-list-nav");
const codeTextarea = document.getElementById("code-editor");
const editorBody = document.getElementById("editor-body");
const btnRunTests = document.getElementById("btn-run-tests");
const runBtnText = document.getElementById("run-btn-text");
const runBtnSpinner = document.getElementById("run-btn-spinner");
const btnResetCode = document.getElementById("btn-reset-code");
const btnCopyCode = document.getElementById("btn-copy-code");
const copyBtnText = document.getElementById("copy-btn-text");
const compilerStatusBadge = document.getElementById("compiler-status-badge");
const compilerStatusDot = document.getElementById("compiler-status-dot");
const compilerStatusText = document.getElementById("compiler-status-text");
const btnResetProgress = document.getElementById("btn-reset-progress");
const summaryCard = document.getElementById("summary-card");
const summaryTitle = document.getElementById("summary-title");
const summarySubtitle = document.getElementById("summary-subtitle");
const sampleTestcaseList = document.getElementById("sample-testcase-list");
const edgeTestcaseList = document.getElementById("edge-testcase-list");
const diffDetailsSection = document.getElementById("diff-details-section");
const diffDetailsList = document.getElementById("diff-details-list");
const compilerLogsContent = document.getElementById("compiler-logs-content");
const btnClearLogs = document.getElementById("btn-clear-logs");
const toast = document.getElementById("toast");
const btnThemeToggle = document.getElementById("btn-theme-toggle");
const toggleSamplesBtn = document.getElementById("toggle-samples-btn");
const samplesTableContent = document.getElementById("samples-table-content");
const btnToggleSolution = document.getElementById("btn-toggle-solution");
const solutionContainer = document.getElementById("solution-container");
const btnLoadSolution = document.getElementById("btn-load-solution");
const customInputBox = document.getElementById("custom-input-box");
const btnRunCustom = document.getElementById("btn-run-custom");
const customResultCard = document.getElementById("custom-result-card");
const customResStdout = document.getElementById("custom-res-stdout");
const customResExpected = document.getElementById("custom-res-expected");
const customResTime = document.getElementById("custom-res-time");
const customResStatusBanner = document.getElementById("custom-res-status-banner");

// ==========================================
// Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadSolvedProgress();
  initTheme();
  initCodeMirror();
  renderProblemNavList();
  loadSavedCodeOrBoilerplate();
  updateProblemView();
  setupEventListeners();
  checkCompilerStatus();

  // Focus and refresh editor
  setTimeout(() => {
    if (cmEditor) {
      cmEditor.refresh();
      cmEditor.focus();
    }
  }, 100);
});

// ==========================================
// CodeMirror Colorful Editor Setup
// ==========================================
function initCodeMirror() {
  if (typeof CodeMirror === "undefined") {
    console.warn("CodeMirror script not ready, using enhanced textarea");
    setupFallbackTextarea();
    return;
  }

  try {
    cmEditor = CodeMirror.fromTextArea(codeTextarea, {
      mode: "text/x-java",
      theme: "dracula",
      lineNumbers: true,
      tabSize: 4,
      indentUnit: 4,
      indentWithTabs: false,
      autoCloseBrackets: "()[]{}''\"\"",
      matchBrackets: true,
      lineWrapping: true,
      autofocus: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete",
        "Ctrl-Enter": () => runAllTests(),
        "Cmd-Enter": () => runAllTests(),
        "Ctrl-.": () => toggleSolutionVisibility(),
        "Cmd-.": () => toggleSolutionVisibility(),
        "Ctrl-Period": () => toggleSolutionVisibility(),
        "Cmd-Period": () => toggleSolutionVisibility(),
        "Ctrl-/": (cm) => toggleComment(cm),
        "Cmd-/": (cm) => toggleComment(cm),
        "Tab": (cm) => {
          if (cm.somethingSelected()) {
            cm.indentSelection("add");
          } else {
            cm.replaceSelection("    ", "end");
          }
        }
      }
    });

    // Capture Ctrl + . directly on CodeMirror keydown event
    cmEditor.on("keydown", (cm, e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "." || e.code === "Period" || e.keyCode === 190)) {
        e.preventDefault();
        e.stopPropagation();
        toggleSolutionVisibility();
        return;
      }
    });

    // Auto-save code on change
    cmEditor.on("change", () => {
      saveCodeToStorage();
    });

    // Focus editor when clicking anywhere on wrapper
    editorBody.addEventListener("click", () => {
      if (cmEditor) cmEditor.focus();
    });

    // Custom Java Hint with 'sout' and common snippet support
    if (CodeMirror.registerHelper) {
      CodeMirror.registerHelper("hint", "java", function(editor, options) {
        const cur = editor.getCursor();
        const line = editor.getLine(cur.line);
        let start = cur.ch;
        let end = cur.ch;
        while (start && /[\w$]/.test(line.charAt(start - 1))) --start;
        while (end < line.length && /[\w$]/.test(line.charAt(end))) ++end;
        const word = line.slice(start, cur.ch);

        const list = [];
        const from = CodeMirror.Pos(cur.line, start);
        const to = CodeMirror.Pos(cur.line, end);

        // Snippet: 'sout' -> System.out.println(""); when typing 'sou' or 'sout'
        const wLower = word.toLowerCase();
        if (wLower === "sou" || wLower === "sout") {
          list.push({
            text: 'System.out.println("");',
            displayText: 'sout → System.out.println("");',
            className: 'cm-hint-snippet',
            hint: function(cm, self, data) {
              cm.replaceRange('System.out.println("");', from, to);
              // Position cursor right inside the quotes: line, start + 20
              cm.setCursor({ line: from.line, ch: from.ch + 20 });
            }
          });
        }

        // Standard anyword completion merge
        if (CodeMirror.hint.anyword) {
          const anywordResult = CodeMirror.hint.anyword(editor, options);
          if (anywordResult && anywordResult.list) {
            anywordResult.list.forEach(item => {
              if (item !== word && !list.some(l => (typeof l === 'string' ? l : l.text) === item)) {
                list.push(item);
              }
            });
          }
        }

        return {
          list: list,
          from: from,
          to: to
        };
      });
    }

    // Autocomplete on typing word characters
    cmEditor.on("inputRead", (cm, change) => {
      if (change.origin !== "+input") return;
      const text = change.text[0];
      if (/[a-zA-Z\.]/.test(text) && !cm.state.completionActive) {
        CodeMirror.commands.autocomplete(cm, null, {
          hint: CodeMirror.hint.java || CodeMirror.hint.anyword,
          completeSingle: false
        });
      }
    });
  } catch (e) {
    console.error("Failed to initialize CodeMirror, using fallback", e);
    setupFallbackTextarea();
  }
}

// Toggle Java line comments (//) for selected lines or current line in CodeMirror
function toggleComment(cm) {
  if (!cm) return;
  cm.operation(() => {
    const from = cm.getCursor("from");
    const to = cm.getCursor("to");
    const startLine = from.line;
    let endLine = to.line;
    // If multiple lines selected and selection ends at col 0, don't comment the extra empty line
    if (from.line !== to.line && to.ch === 0) {
      endLine = Math.max(startLine, endLine - 1);
    }

    // Determine if all non-empty lines in selection are already commented with //
    let allCommented = true;
    let nonBlankCount = 0;
    for (let i = startLine; i <= endLine; i++) {
      const lineText = cm.getLine(i);
      const trimmed = lineText.trim();
      if (trimmed.length > 0) {
        nonBlankCount++;
        if (!trimmed.startsWith("//")) {
          allCommented = false;
          break;
        }
      }
    }

    if (nonBlankCount === 0) {
      // Empty line, just insert //
      const curLine = cm.getLine(startLine);
      cm.replaceRange("// ", { line: startLine, ch: 0 }, { line: startLine, ch: 0 });
      return;
    }

    if (allCommented) {
      // Uncomment each line: remove first occurrence of // (and optional following space)
      for (let i = startLine; i <= endLine; i++) {
        const lineText = cm.getLine(i);
        const match = lineText.match(/^(\s*)\/\/\s?/);
        if (match) {
          const matchLen = match[0].length;
          const leadingSpaces = match[1].length;
          cm.replaceRange(match[1], { line: i, ch: 0 }, { line: i, ch: matchLen });
        }
      }
    } else {
      // Comment each line: add // at beginning of line
      for (let i = startLine; i <= endLine; i++) {
        const lineText = cm.getLine(i);
        // Find indentation
        const indentMatch = lineText.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : "";
        const rest = lineText.slice(indent.length);
        cm.replaceRange(indent + "// " + rest, { line: i, ch: 0 }, { line: i, ch: lineText.length });
      }
    }
  });
}

// Fallback auto-brackets for raw textarea if ever needed
function setupFallbackTextarea() {
  if (!codeTextarea) return;
  codeTextarea.style.display = "block";

  codeTextarea.addEventListener("keydown", (e) => {
    // Bracket auto-closing
    const pairs = { '(': ')', '{': '}', '[': ']', '"': '"', "'": "'" };
    if (pairs[e.key]) {
      e.preventDefault();
      const start = codeTextarea.selectionStart;
      const end = codeTextarea.selectionEnd;
      const val = codeTextarea.value;
      const closing = pairs[e.key];
      codeTextarea.value = val.substring(0, start) + e.key + closing + val.substring(end);
      codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 1;
      saveCodeToStorage();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeTextarea.selectionStart;
      const end = codeTextarea.selectionEnd;
      const val = codeTextarea.value;
      codeTextarea.value = val.substring(0, start) + "    " + val.substring(end);
      codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 4;
      saveCodeToStorage();
      return;
    }

    // Ctrl + / for raw textarea fallback
    if ((e.ctrlKey || e.metaKey) && (e.key === "/" || e.code === "Slash")) {
      e.preventDefault();
      const start = codeTextarea.selectionStart;
      const end = codeTextarea.selectionEnd;
      const val = codeTextarea.value;
      const lines = val.split("\n");
      // Find line indexes
      let charCount = 0;
      let startLineIdx = 0;
      let endLineIdx = 0;
      for (let i = 0; i < lines.length; i++) {
        const lineLen = lines[i].length + 1; // +1 for \n
        if (charCount <= start && start < charCount + lineLen) startLineIdx = i;
        if (charCount <= end && end <= charCount + lineLen) endLineIdx = i;
        charCount += lineLen;
      }
      let allCommented = true;
      for (let i = startLineIdx; i <= endLineIdx; i++) {
        if (lines[i].trim().length > 0 && !lines[i].trim().startsWith("//")) {
          allCommented = false;
          break;
        }
      }
      for (let i = startLineIdx; i <= endLineIdx; i++) {
        if (allCommented) {
          lines[i] = lines[i].replace(/^(\s*)\/\/\s?/, "$1");
        } else {
          lines[i] = "// " + lines[i];
        }
      }
      codeTextarea.value = lines.join("\n");
      saveCodeToStorage();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === "." || e.code === "Period")) {
      e.preventDefault();
      toggleSolutionVisibility();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runAllTests();
    }
  });

  codeTextarea.addEventListener("input", () => {
    saveCodeToStorage();
  });
}

function getEditorCode() {
  if (cmEditor) return cmEditor.getValue();
  return codeTextarea ? codeTextarea.value : "";
}

function setEditorCode(code) {
  if (cmEditor) {
    cmEditor.setValue(code);
    cmEditor.refresh();
  } else if (codeTextarea) {
    codeTextarea.value = code;
  }
}

// ==========================================
// Theme Management
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem("java_bench_theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }
}

function toggleTheme() {
  if (document.body.classList.contains("theme-light")) {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
    localStorage.setItem("java_bench_theme", "dark");
    showToast("Switched to dark theme");
  } else {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
    localStorage.setItem("java_bench_theme", "light");
    showToast("Switched to warm light theme");
  }
}

// List of starred question numbers: 1, 9, 11, 15, 16, 18, 20, 25, 26, 28, 31, 35, 36, 37, 41, 45, 47, 48, 49
const STARRED_PROBLEMS = new Set(["01", "09", "11", "15", "16", "18", "20", "25", "26", "28", "31", "35", "36", "37", "41", "45", "47", "48", "49", "1", "9"]);

// Active filter state
let currentFilter = "all";
let currentSearchQuery = "";
let editorFontSize = 13;

// ==========================================
// Navigation & Problem List
// ==========================================
function renderProblemNavList() {
  if (!problemListNav) return;
  const problemsArray = Object.values(PROBLEMS);
  
  // Filter problems based on search query and filter pills
  const filteredProblems = problemsArray.filter(p => {
    const isSolved = solvedProblems.has(p.id);
    const isStarred = STARRED_PROBLEMS.has(String(p.num).trim()) || STARRED_PROBLEMS.has(String(parseInt(p.num, 10)));

    // Filter pill matching
    if (currentFilter === "starred" && !isStarred) return false;
    if (currentFilter === "solved" && !isSolved) return false;
    if (currentFilter === "unsolved" && isSolved) return false;

    // Search query matching
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      const matchTitle = (p.title || "").toLowerCase().includes(q);
      const matchNum = String(p.num || "").toLowerCase().includes(q);
      const matchCategory = (p.category || "").toLowerCase().includes(q);
      const matchTag = (p.tag || "").toLowerCase().includes(q);
      if (!matchTitle && !matchNum && !matchCategory && !matchTag) return false;
    }

    return true;
  });

  // Update match count badge
  const matchCountBadge = document.getElementById("sidebar-match-count");
  if (matchCountBadge) {
    matchCountBadge.textContent = `${filteredProblems.length}`;
  }

  // Update progress tracking stats
  updateProgressStats(problemsArray.length);

  if (filteredProblems.length === 0) {
    problemListNav.innerHTML = `
      <div style="padding: 24px 12px; text-align: center; color: var(--text-subtle); font-size: 11px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 6px; opacity: 0.5;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p>No matching challenges found.</p>
      </div>
    `;
    return;
  }

  let html = "";
  let lastCategory = "";

  filteredProblems.forEach(p => {
    const category = p.category || "Java Practice";
    if (category !== lastCategory && !currentSearchQuery) {
      lastCategory = category;
      html += `
        <div class="sidebar-category-header">
          <span class="category-header-title">${escapeHtml(category)}</span>
        </div>
      `;
    }

    const isSolved = solvedProblems.has(p.id);
    const isStarred = STARRED_PROBLEMS.has(String(p.num).trim()) || STARRED_PROBLEMS.has(String(parseInt(p.num, 10)));
    
    let iconHtml = "";
    if (isSolved && isStarred) {
      iconHtml = `
        <svg class="problem-icon solved-icon solved-star-icon" width="15" height="15" viewBox="0 0 24 24" fill="#22c55e" stroke="#15803d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else if (isSolved) {
      iconHtml = `
        <svg class="problem-icon solved-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="8 12 11 15 16 9"></polyline>
        </svg>
      `;
    } else if (isStarred) {
      iconHtml = `
        <svg class="problem-icon starred-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else {
      iconHtml = `
        <svg class="problem-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      `;
    }

    html += `
      <div class="problem-nav-item ${p.id === currentProblemId ? 'active' : ''} ${isSolved ? 'solved' : ''} ${isStarred ? 'starred-item' : ''}" data-problem="${p.id}">
        ${iconHtml}
        <div class="nav-text-col">
          <span class="problem-nav-name">${escapeHtml(p.title)}</span>
          <span class="problem-nav-cat">${escapeHtml(p.tag || p.category || "Java")}</span>
        </div>
        <span class="problem-nav-num">${p.num}</span>
      </div>
    `;
  });

  problemListNav.innerHTML = html;

  document.querySelectorAll(".problem-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const probId = item.getAttribute("data-problem");
      if (probId && probId !== currentProblemId && PROBLEMS[probId]) {
        switchProblem(probId);
      }
    });
  });
}

function updateProgressStats(totalProblems) {
  const solvedCount = solvedProblems.size;
  const ratioElem = document.getElementById("sidebar-progress-ratio");
  const barElem = document.getElementById("sidebar-progress-bar");
  
  if (ratioElem) {
    ratioElem.textContent = `${solvedCount} / ${totalProblems}`;
  }
  if (barElem) {
    const percentage = totalProblems > 0 ? (solvedCount / totalProblems) * 100 : 0;
    barElem.style.width = `${percentage}%`;
  }
}

function updateProblemView() {
  const prob = PROBLEMS[currentProblemId];
  if (!prob) return;

  const isStarred = STARRED_PROBLEMS.has(String(prob.num).trim()) || STARRED_PROBLEMS.has(String(parseInt(prob.num, 10)));
  const starHeadingBadge = isStarred ? ` <svg class="hero-star-icon" width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" title="Important Starred Problem"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>` : "";

  // Header and Hero
  document.querySelector(".hero-title").innerHTML = `${escapeHtml(prob.title)}${starHeadingBadge}<span class="hero-period">.</span>`;
  const tagText = document.getElementById("hero-tag-text");
  if (tagText) tagText.textContent = `Focused exercise ${prob.num}`;
  document.querySelector(".hero-subtitle").textContent = prob.subtitle;
  
  const headerCurrTitle = document.getElementById("header-curr-title");
  if (headerCurrTitle) headerCurrTitle.textContent = `${prob.num}. ${prob.title}`;

  // Problem Statement formatted into readable paragraphs and structured sections
  const psBody = document.querySelector(".problem-statement-body");
  if (psBody) {
    psBody.innerHTML = formatProblemBrief(prob.brief);
    psBody.classList.remove("problem-fade-enter");
    void psBody.offsetWidth; // trigger reflow
    psBody.classList.add("problem-fade-enter");
  }
  
  // Input / Output rules with robust fallbacks
  const defaultInFmt = (prob.sampleCases && prob.sampleCases[0]) 
    ? `Read standard input (e.g. <code>${escapeHtml(prob.sampleCases[0].input.replace(/\n/g, " "))}</code>)` 
    : "Read input from standard input using Scanner.";
  const defaultOutFmt = (prob.sampleCases && prob.sampleCases[0]) 
    ? `Print output matching expected format (e.g. <code>${escapeHtml(prob.sampleCases[0].expected.replace(/\n/g, " "))}</code>)` 
    : "Print result to standard output.";
    
  document.getElementById("rule-input-format").innerHTML = `<strong>Input Format:</strong> ${prob.inputFormat || defaultInFmt}`;
  document.getElementById("rule-output-format").innerHTML = `<strong>Output Format:</strong> ${prob.outputFormat || defaultOutFmt}`;
  
  // Sample Pill with robust fallback
  const firstSample = (prob.sampleCases && prob.sampleCases.length > 0) ? prob.sampleCases[0] : null;
  const sampleIn = prob.sampleInput || (firstSample ? firstSample.input.replace(/\n/g, " ↵ ") : "—");
  const sampleOut = prob.sampleOutput || (firstSample ? firstSample.expected.replace(/\n/g, " ↵ ") : "—");
  
  document.querySelector(".sample-box .sample-val").textContent = sampleIn;
  document.querySelector(".sample-box .sample-val.highlight").textContent = sampleOut;

  // Quick Samples Accordion
  renderQuickSamplesTable(prob);

  // Hints
  renderHints(prob);

  // Solution Reference Code
  document.querySelector(".solution-code code").textContent = prob.solutionCode || "";
  document.getElementById("solution-badge-text").textContent = prob.category || prob.tag || "Java Solution";
  
  // Solution Hover Card Preview
  const solPreview = document.getElementById("solution-preview-code");
  if (solPreview) {
    solPreview.innerHTML = `<code>${escapeHtml(prob.solutionCode || "// No solution available")}</code>`;
  }

  // Custom runner placeholder
  customInputBox.value = firstSample ? firstSample.input : "";

  // Testcases
  renderTestcases();
  resetTestBenchState();
  updatePrevNextButtons();
}

function updatePrevNextButtons() {
  const problemsArray = Object.values(PROBLEMS);
  const currentIndex = problemsArray.findIndex(p => p.id === currentProblemId);
  const prevBtn = document.getElementById("btn-prev-problem");
  const nextBtn = document.getElementById("btn-next-problem");

  if (prevBtn) prevBtn.disabled = currentIndex <= 0;
  if (nextBtn) nextBtn.disabled = currentIndex >= problemsArray.length - 1;
}

function navigateProblem(direction) {
  const problemsArray = Object.values(PROBLEMS);
  const currentIndex = problemsArray.findIndex(p => p.id === currentProblemId);
  const targetIndex = currentIndex + direction;

  if (targetIndex >= 0 && targetIndex < problemsArray.length) {
    switchProblem(problemsArray[targetIndex].id);
  }
}

function formatProblemBrief(rawText) {
  if (!rawText) return "<p class='ps-paragraph'>No problem description available.</p>";

  // Normalize bullet markers
  let text = String(rawText).replace(/\uFFFD/g, "•").replace(/•/g, "•");

  // Break apart common section titles and structural triggers into separate blocks
  text = text.replace(/\s*(The class should contain the following data members:|with the following data members:|with data members:|Data members:|Data Member:?\b)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create the following member methods:|Create the following overloaded methods:|Create the following overloaded constructors:|Create the following overloaded calculate\(\) methods:|Create the following overloaded calculatePoints\(\) methods:|Create the following methods:|Create member methods:|Create methods:|Overloaded constructors:|Member Functions:?|Constructors:?\b)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(To provide a common structure,?\s*create an? (?:abstract )?class[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create an? (?:abstract )?class[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create an? (?:interface)[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create a superclass[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create a subclass[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Create (?:a|the) (?:parameterized|default|overloaded)?\s*constructor[^\n.]*\b)/gi, "\n\n$1");
  text = text.replace(/\s*(Create (?:a|the) (?:member )?method[^\n.]*\b)/gi, "\n\n$1");
  text = text.replace(/\s*(Create (?:a|the) display(?:Details|Result)\(\)[^\n.]*\b)/gi, "\n\n$1");
  text = text.replace(/\s*(Override the [^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(The class should contain an? abstract method[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(The permanent employee receives[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(For a regular employee[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Use an? (?:abstract class|interface) to demonstrate[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(Write a Java program[^\n.]*\.)/gi, "\n\n$1\n\n");
  text = text.replace(/\s*(In (?:the )?main\(\)[^\n.]*\b)/gi, "\n\n$1");
  text = text.replace(/\s*(Constraints:)/gi, "\n\n__SEC_CONSTRAINTS__$1");
  text = text.replace(/\s*(Formula:)/gi, "\n\n__SEC_FORMULA__$1");

  // Ensure each bullet starts on a new line
  text = text.replace(/\s*(•|\u2022)\s*/g, "\n• ");

  const rawSections = text.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
  const htmlBlocks = [];

  rawSections.forEach(sec => {
    if (sec.includes("__SEC_CONSTRAINTS__")) {
      const clean = sec.replace("__SEC_CONSTRAINTS__", "").replace(/Constraints:/i, "").trim();
      const items = clean.split(/[,;\n•]+/).map(c => c.trim()).filter(Boolean);
      const badges = items.map(it => {
        const mathClean = escapeHtml(it)
          .replace(/<=|&lt;=/g, "⩽")
          .replace(/>=|&gt;=/g, "⩾");
        return `<span class="ps-constraint-pill"><code>${mathClean}</code></span>`;
      }).join("");
      htmlBlocks.push(`
        <div class="ps-constraints-section">
          <div class="ps-section-heading">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>CONSTRAINTS</span>
          </div>
          <div class="ps-constraints-grid">${badges}</div>
        </div>
      `);
    } else {
      const lines = sec.split("\n").map(l => l.trim()).filter(Boolean);
      let currentParaLines = [];
      let currentListItems = [];
      let currentListType = "";

      function flushPara() {
        if (currentParaLines.length > 0) {
          const pText = currentParaLines.join(" ");
          if (/^(Class Name:|Data Member|Constructors|Member Functions|Note:|The class should contain the following data members:|Create the following|Overloaded constructors:|The class should have methods to:|The username must contain:|A string is considered perfect)/i.test(pText)) {
            htmlBlocks.push(`<div class="ps-lead">${highlightJavaKeywords(escapeHtml(pText))}</div>`);
          } else {
            htmlBlocks.push(`<p class="ps-paragraph">${highlightJavaKeywords(escapeHtml(pText))}</p>`);
          }
          currentParaLines = [];
        }
      }

      function flushList() {
        if (currentListItems.length > 0) {
          const listHtml = currentListItems.map(item => `
            <li class="ps-list-item">
              <span class="ps-bullet-dot"></span>
              <span>${highlightJavaKeywords(escapeHtml(item))}</span>
            </li>
          `).join("");
          htmlBlocks.push(`
            <div class="ps-block">
              <ul class="ps-list">${listHtml}</ul>
            </div>
          `);
          currentListItems = [];
          currentListType = "";
        }
      }

      lines.forEach(line => {
        const isBullet = line.startsWith("•") || line.startsWith("- ") || line.startsWith("* ");
        const isNumber = /^\d+\.\s+/.test(line);

        if (isBullet) {
          flushPara();
          if (currentListType && currentListType !== "bullet") flushList();
          currentListType = "bullet";
          currentListItems.push(line.replace(/^[•\-\*]\s*/, ""));
        } else if (isNumber) {
          flushPara();
          if (currentListType && currentListType !== "number") flushList();
          currentListType = "number";
          currentListItems.push(line.replace(/^\d+\.\s*/, ""));
        } else if (/^(Class Name:|Data Member|Constructors|Member Functions|Note:|The class should contain the following data members:|Create the following|Overloaded constructors:|The class should have methods to:|The username must contain:|A string is considered perfect)/i.test(line)) {
          flushList();
          flushPara();
          htmlBlocks.push(`<div class="ps-lead">${highlightJavaKeywords(escapeHtml(line))}</div>`);
        } else {
          flushList();
          currentParaLines.push(line);
        }
      });

      flushList();
      flushPara();
    }
  });

  return htmlBlocks.join("");
}

function highlightJavaKeywords(str) {
  if (!str) return "";

  // Highlight keywords and compound type variable declarations e.g. "static int studentCount", "String name", "int marks", "double dailyWage"
  return str
    // Compound declarations with static/type + identifier
    .replace(/\b((?:static\s+)?(?:int|double|float|long|boolean|char|String|void)\s+[a-zA-Z0-9_]+)\b/g, '<code class="code-decl">$1</code>')
    // Standard keywords
    .replace(/\b(int|double|float|long|boolean|char|String|void|static|abstract|class|extends|implements|public|private|protected|try|catch|finally|throw|throws|new|return|this|super)\b(?![^<]*>)/g, '<code class="code-kw">$1</code>')
    // Method signatures like calculateSalary() or displayDetails()
    .replace(/\b([a-zA-Z0-9_]+\([^)]*\))/g, '<code class="code-fn">$1</code>');
}

function renderQuickSamplesTable(prob) {
  const tbody = document.getElementById("quick-samples-tbody");
  if (!tbody) return;
  tbody.innerHTML = (prob.sampleCases || []).map((tc, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><code>${escapeHtml(tc.input.replace(/\n/g, " ↵ "))}</code></td>
      <td><span class="badge-success">${escapeHtml(tc.expected.replace(/\n/g, " ↵ "))}</span></td>
      <td>${escapeHtml(tc.explanation || "")}</td>
    </tr>
  `).join("");
}

function renderHints(prob) {
  const container = document.getElementById("hints-stepper-container");
  if (!container) return;
  
  const hints = (prob.hints && prob.hints.length > 0) ? prob.hints : [
    { title: "Core Logic", text: "Carefully trace through the problem statement, inputs, and expected outputs." },
    { title: "Data Types & Flow", text: "Ensure proper data types (int, double, String) and loop boundaries are maintained." },
    { title: "Edge Cases", text: "Verify zero, negative numbers, single elements, and empty or large inputs." }
  ];

  container.innerHTML = hints.map((hint, idx) => `
    <details class="hint-details">
      <summary class="hint-summary">
        <span>💡 Hint ${idx + 1}: ${escapeHtml(hint.title || `Step ${idx + 1}`)}</span>
      </summary>
      <div class="hint-body">
        ${hint.text}
      </div>
    </details>
  `).join("");
}

function switchProblem(probId) {
  currentProblemId = probId;
  renderProblemNavList();
  loadSavedCodeOrBoilerplate();
  updateProblemView();
  if (cmEditor) {
    cmEditor.refresh();
    cmEditor.focus();
  }
  showToast(`Loaded: ${PROBLEMS[probId].title}`);
}

// ==========================================
// Code Storage & Reset Logic
// ==========================================
function loadSavedCodeOrBoilerplate() {
  const prob = PROBLEMS[currentProblemId];
  if (!prob) return;
  try {
    const saved = localStorage.getItem(`code_${currentProblemId}`);
    if (saved !== null && saved !== undefined) {
      setEditorCode(saved);
      return;
    }
  } catch (e) {}
  if (prob.starterCode) {
    setEditorCode(prob.starterCode);
  }
}

function saveCodeToStorage() {
  if (!currentProblemId) return;
  try {
    const code = getEditorCode();
    localStorage.setItem(`code_${currentProblemId}`, code);
  } catch (e) {}
}

// ==========================================
// Testcases Rendering
// ==========================================
function renderTestcases() {
  const prob = PROBLEMS[currentProblemId];

  sampleTestcaseList.innerHTML = prob.sampleCases.map(tc => {
    const res = testResultsMap.get(tc.id);
    return `
      <div class="testcase-row" data-id="${tc.id}">
        <span class="tc-input" title="${escapeHtml(tc.input)}">${escapeHtml(tc.input.replace(/\n/g, " ↵ "))}</span>
        <span class="tc-expected" title="${escapeHtml(tc.expected)}">${escapeHtml(tc.expected.replace(/\n/g, " ↵ "))}</span>
        <div class="tc-status-cell">
          ${renderStatusCell(res)}
        </div>
      </div>
    `;
  }).join("");

  if (prob.edgeCases && prob.edgeCases.length > 0) {
    edgeTestcaseList.innerHTML = prob.edgeCases.map(tc => {
      const res = testResultsMap.get(tc.id);
      return `
        <div class="testcase-row" data-id="${tc.id}">
          <span class="tc-input" title="${escapeHtml(tc.input)}">${escapeHtml(tc.input.replace(/\n/g, " ↵ "))}</span>
          <span class="tc-expected" title="${escapeHtml(tc.expected)}">${escapeHtml(tc.expected.replace(/\n/g, " ↵ "))}</span>
          <div class="tc-status-cell">
            ${renderStatusCell(res)}
          </div>
        </div>
      `;
    }).join("");
  } else {
    edgeTestcaseList.innerHTML = `
      <div style="padding: 20px; text-align: center; color: var(--text-subtle); font-size: 12px;">
        All official test cases for this question are listed under Sample Cases.
      </div>
    `;
  }

  document.getElementById("tab-sample-count").textContent = `Sample Cases (${prob.sampleCases.length})`;
  document.getElementById("tab-edge-count").textContent = `Edge Cases (${prob.edgeCases ? prob.edgeCases.length : 0})`;
}

function renderStatusCell(res) {
  if (!res) {
    return `<span class="status-dot-idle"></span>`;
  }
  if (res.status === "passed") {
    return `<span class="status-pill pass">✓ Pass</span>`;
  }
  if (res.status === "failed") {
    return `<span class="status-pill fail">✗ Fail</span>`;
  }
  if (res.status === "timeout") {
    return `<span class="status-pill timeout">⏱ Time</span>`;
  }
  return `<span class="status-pill error">⚠ Err</span>`;
}

// ==========================================
// Event Listeners Setup
// ==========================================
// Toggle Reference Solution visibility (via button or Ctrl + .)
function toggleSolutionVisibility() {
  const hoverCard = document.getElementById("solution-hover-card");
  const leftSolContainer = document.getElementById("solution-container");
  const leftSolBtn = document.getElementById("btn-toggle-solution");

  let isAnyOpened = false;

  // Toggle hover popover on the editor topbar
  if (hoverCard) {
    if (hoverCard.classList.contains("visible-open")) {
      hoverCard.classList.remove("visible-open");
    } else {
      hoverCard.classList.add("visible-open");
      isAnyOpened = true;
    }
  }

  // Also toggle the full solution card in the problem description column
  if (leftSolContainer) {
    if (isAnyOpened) {
      leftSolContainer.classList.remove("hidden");
      if (leftSolBtn) leftSolBtn.querySelector("span").textContent = "Hide Solution";
    } else {
      leftSolContainer.classList.add("hidden");
      if (leftSolBtn) leftSolBtn.querySelector("span").textContent = "Show Full Solution & Explanation";
    }
  }

  showToast(isAnyOpened ? "Solution visible (Ctrl + . to hide)" : "Solution hidden (Ctrl + . to see)");
}

function setupEventListeners() {
  btnThemeToggle.addEventListener("click", toggleTheme);
  btnRunTests.addEventListener("click", runAllTests);

  // Quick navigation
  const prevBtn = document.getElementById("btn-prev-problem");
  const nextBtn = document.getElementById("btn-next-problem");
  if (prevBtn) prevBtn.addEventListener("click", () => navigateProblem(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navigateProblem(1));

  // Search input & clear button
  const searchInput = document.getElementById("sidebar-search-input");
  const searchClear = document.getElementById("sidebar-search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim();
      if (searchClear) {
        if (currentSearchQuery) {
          searchClear.classList.remove("hidden");
        } else {
          searchClear.classList.add("hidden");
        }
      }
      renderProblemNavList();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        currentSearchQuery = "";
        searchClear.classList.add("hidden");
        renderProblemNavList();
        searchInput.focus();
      }
    });
  }

  // Filter pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter") || "all";
      renderProblemNavList();
    });
  });

  // Shortcuts Modal
  const shortcutsBtn = document.getElementById("btn-show-shortcuts");
  const shortcutsModal = document.getElementById("shortcuts-modal");
  const closeModalBtn = document.getElementById("btn-close-modal");

  if (shortcutsBtn && shortcutsModal) {
    shortcutsBtn.addEventListener("click", () => {
      shortcutsModal.classList.remove("hidden");
    });
  }
  if (closeModalBtn && shortcutsModal) {
    closeModalBtn.addEventListener("click", () => {
      shortcutsModal.classList.add("hidden");
    });
  }
  if (shortcutsModal) {
    shortcutsModal.addEventListener("click", (e) => {
      if (e.target === shortcutsModal) {
        shortcutsModal.classList.add("hidden");
      }
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // Ctrl + . or Cmd + . to toggle solution visibility
    if ((e.ctrlKey || e.metaKey) && (e.key === "." || e.code === "Period")) {
      e.preventDefault();
      toggleSolutionVisibility();
      return;
    }
    // Focus search on '/'
    if (e.key === "/" && document.activeElement !== searchInput && !isEditorFocused()) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
    // Toggle Shortcuts on '?'
    if (e.key === "?" && !isEditorFocused() && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (shortcutsModal) shortcutsModal.classList.toggle("hidden");
    }
    // Escape closes modal / solution hover
    if (e.key === "Escape") {
      if (shortcutsModal && !shortcutsModal.classList.contains("hidden")) {
        shortcutsModal.classList.add("hidden");
      }
      const hoverCard = document.getElementById("solution-hover-card");
      if (hoverCard && hoverCard.classList.contains("visible-open")) {
        hoverCard.classList.remove("visible-open");
      }
    }
    // Alt + Left: Prev problem
    if (e.altKey && e.key === "ArrowLeft") {
      e.preventDefault();
      navigateProblem(-1);
    }
    // Alt + Right: Next problem
    if (e.altKey && e.key === "ArrowRight") {
      e.preventDefault();
      navigateProblem(1);
    }
    // Alt + T: Toggle theme
    if (e.altKey && (e.key === "t" || e.key === "T")) {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Format / Beautify Java Code Action
  const btnFormatCode = document.getElementById("btn-format-code");
  const iconFormat = document.getElementById("icon-format");
  if (btnFormatCode) {
    btnFormatCode.addEventListener("click", () => {
      formatEditorCode();
      if (iconFormat) {
        iconFormat.classList.remove("icon-spin");
        void iconFormat.offsetWidth; // trigger reflow
        iconFormat.classList.add("icon-spin");
      }
      showToast("Java code formatted & indented");
    });
  }

  // Solution Tab Button - Click to paste reference solution into editor
  const btnSolutionPopover = document.getElementById("btn-solution-popover");
  if (btnSolutionPopover) {
    btnSolutionPopover.addEventListener("click", () => {
      const prob = PROBLEMS[currentProblemId];
      if (prob && prob.solutionCode) {
        setEditorCode(prob.solutionCode);
        saveCodeToStorage();
        if (cmEditor) cmEditor.focus();
        showToast("Reference solution pasted into editor");
      }
    });
  }

  btnResetCode.addEventListener("click", () => {
    const prob = PROBLEMS[currentProblemId];
    if (prob) {
      try {
        localStorage.removeItem(`code_${currentProblemId}`);
      } catch (e) {}

      if (solvedProblems.has(prob.id)) {
        solvedProblems.delete(prob.id);
        saveSolvedProgress();
        renderProblemNavList();
      }

      setEditorCode(prob.starterCode);
      resetTestBenchState();
      if (cmEditor) cmEditor.focus();
      showToast("Code reset to starter template");
    }
  });

  btnCopyCode.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(getEditorCode());
      copyBtnText.textContent = "Copied!";
      showToast("Code copied to clipboard");
      setTimeout(() => {
        copyBtnText.textContent = "Copy";
      }, 2000);
    } catch (e) {
      showToast("Failed to copy code");
    }
  });

  // Testbench Tab switching
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const tabName = btn.getAttribute("data-tab");
      const targetPane = document.getElementById(`tab-content-${tabName}`);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  toggleSamplesBtn.addEventListener("click", () => {
    toggleSamplesBtn.classList.toggle("open");
    samplesTableContent.classList.toggle("open");
  });

  btnToggleSolution.addEventListener("click", () => {
    solutionContainer.classList.toggle("hidden");
    const isHidden = solutionContainer.classList.contains("hidden");
    btnToggleSolution.querySelector("span").textContent = isHidden ? "Show Full Solution & Explanation" : "Hide Solution";
  });

  btnLoadSolution.addEventListener("click", () => {
    const prob = PROBLEMS[currentProblemId];
    setEditorCode(prob.solutionCode);
    saveCodeToStorage();
    if (cmEditor) cmEditor.focus();
    showToast("Optimal solution loaded into editor");
  });

  btnRunCustom.addEventListener("click", runCustomTestcase);
  customInputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      runCustomTestcase();
    }
  });

  btnClearLogs.addEventListener("click", () => {
    compilerLogsContent.textContent = "Console cleared.";
  });

  if (btnResetProgress) {
    btnResetProgress.addEventListener("click", () => {
      if (confirm("Reset all question progress and saved code? All completed questions and saved code will be reset back to default.")) {
        solvedProblems.clear();
        try {
          localStorage.removeItem(SOLVED_STORAGE_KEY);
          Object.keys(localStorage).forEach(key => {
            if (key.startsWith("code_")) {
              localStorage.removeItem(key);
            }
          });
        } catch (e) {}
        loadSavedCodeOrBoilerplate();
        renderProblemNavList();
        showToast("All question progress and code reset");
      }
    });
  }
}

function isEditorFocused() {
  if (cmEditor && cmEditor.hasFocus()) return true;
  return document.activeElement === codeTextarea;
}

function formatEditorCode() {
  if (cmEditor) {
    const totalLines = cmEditor.lineCount();
    cmEditor.operation(() => {
      for (let i = 0; i < totalLines; i++) {
        cmEditor.indentLine(i);
      }
    });
  } else if (codeTextarea) {
    // Simple basic indent for textarea fallback
    const lines = codeTextarea.value.split("\n");
    let indentLevel = 0;
    const formatted = lines.map(line => {
      let trimmed = line.trim();
      if (trimmed.startsWith("}") || trimmed.startsWith("]")) indentLevel = Math.max(0, indentLevel - 1);
      const res = "    ".repeat(indentLevel) + trimmed;
      if (trimmed.endsWith("{") || trimmed.endsWith("[")) indentLevel++;
      return res;
    }).join("\n");
    codeTextarea.value = formatted;
  }
  saveCodeToStorage();
}

function resetTestBenchState() {
  testResultsMap.clear();
  renderTestcases();
  diffDetailsSection.classList.add("hidden");
  diffDetailsList.innerHTML = "";

  const benchmarkBadge = document.getElementById("exec-benchmark-badge");
  if (benchmarkBadge) {
    benchmarkBadge.classList.add("hidden");
  }

  summaryCard.className = "summary-card empty";
  summaryTitle.textContent = "Your test bench is ready";
  summarySubtitle.textContent = `Write your logic in the editor and click 'Run all tests'.`;
}

// ==========================================
// Compiler Status Check
// ==========================================
async function checkCompilerStatus() {
  try {
    const res = await fetch("./api/status");
    if (res.ok) {
      const data = await res.json();
      if (data.status) {
        compilerReady = true;
        compilerStatusDot.className = "status-dot ready";
        compilerStatusText.textContent = "Java 21 Ready (Local)";
        appendLog(`[SYSTEM] Local Java Compiler detected:\n  - javac: ${data.javac_version}\n  - java:  ${data.java_version}`);
        return;
      }
    }
  } catch (err) {
    // Fallback indicator
  }

  compilerStatusDot.className = "status-dot ready";
  compilerStatusText.textContent = "Online Compiler Active";
  appendLog("[SYSTEM] Using active execution engine.");
}

// ==========================================
// Code Execution Logic
// ==========================================
async function runAllTests() {
  if (isRunning) return;

  const prob = PROBLEMS[currentProblemId];
  const sourceCode = getEditorCode().trim();

  if (!sourceCode) {
    showToast("Please enter some Java code first");
    return;
  }

  setRunningState(true);
  appendLog(`\n=========================================\n[BUILD] Question: ${prob.title}\nCompiling & Running test cases...\nTimestamp: ${new Date().toLocaleTimeString()}`);

  try {
    const allCases = [...prob.sampleCases, ...(prob.edgeCases || [])];
    let resultData = null;

    try {
      const response = await fetch("./api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceCode: sourceCode,
          testCases: allCases
        })
      });

      if (response.ok) {
        resultData = await response.json();
      } else {
        const errText = await response.text();
        console.error("Server error:", response.status, errText);
        resultData = {
          compileSucceeded: false,
          compileOutput: "Server Error " + response.status + ": " + errText,
          durationMs: 0,
          passed: 0,
          total: allCases.length,
          results: []
        };
      }
    } catch (e) {
      console.warn("Backend error, evaluating...", e);
    }

    if (!resultData) {
      resultData = {
        compileSucceeded: false,
        compileOutput: "Server did not return a response. Make sure python server.py is running.",
        durationMs: 0,
        passed: 0,
        total: allCases.length,
        results: []
      };
    }

    handleExecutionResult(resultData, prob);

  } catch (err) {
    appendLog(`[ERROR] Execution failed: ${err.message}`);
    summaryCard.className = "summary-card compile-error";
    summaryTitle.textContent = "The run encountered an error";
    summarySubtitle.textContent = err.message;
    triggerCompilerErrorEffect();
  } finally {
    setRunningState(false);
  }
}

function handleExecutionResult(data, prob) {
  appendLog(`[OUTPUT] Compiler output:\n${data.compileOutput || "(none)"}`);

  const benchmarkBadge = document.getElementById("exec-benchmark-badge");
  const benchmarkText = document.getElementById("benchmark-text");

  if (!data.compileSucceeded) {
    if (benchmarkBadge) benchmarkBadge.classList.add("hidden");
    summaryCard.className = "summary-card compile-error";
    summaryTitle.textContent = "The code did not compile";
    summarySubtitle.textContent = "Read the compiler error message in the Compiler Logs tab, fix the error, and run again.";

    document.querySelector('[data-tab="logs"]').click();
    showToast("Compilation failed - see logs");

    // Trigger Fiery Crimson Shake & Sparks (Compiler Error)
    triggerCompilerErrorEffect();
    return;
  }

  // Update Dynamic Live Benchmark Badge
  if (benchmarkBadge && benchmarkText) {
    const ms = data.durationMs || 0;
    benchmarkBadge.classList.remove("hidden", "moderate", "slow");
    if (ms < 120) {
      benchmarkText.textContent = `${ms}ms · Lightning Fast`;
    } else if (ms < 350) {
      benchmarkBadge.classList.add("moderate");
      benchmarkText.textContent = `${ms}ms · Moderate`;
    } else {
      benchmarkBadge.classList.add("slow");
      benchmarkText.textContent = `${ms}ms · Slow`;
    }
  }

  testResultsMap.clear();
  const failedCases = [];

  for (const tcRes of data.results) {
    testResultsMap.set(tcRes.id, tcRes);
    if (!tcRes.passed) {
      failedCases.push(tcRes);
    }
  }

  renderTestcases();

  const total = data.total;
  const passed = data.passed;

  if (passed === total) {
    summaryCard.className = "summary-card success";
    summaryTitle.textContent = "Nice work. All tests pass!";
    summarySubtitle.textContent = `All ${passed} of ${total} test cases succeeded in ${data.durationMs}ms.`;
    diffDetailsSection.classList.add("hidden");
    showToast(`✓ All ${total} tests passed!`);

    // Smooth & gentle victory screen shake (no green background tint)
    const body = document.body;
    body.classList.remove("screen-success-shake", "screen-error-shake", "screen-crimson-flash");
    void body.offsetWidth; // force browser reflow
    body.classList.add("screen-success-shake");
    setTimeout(() => body.classList.remove("screen-success-shake"), 700);

    // Switch from any other tab back to Sample Cases tab
    const sampleTabBtn = document.querySelector('[data-tab="sample"]');
    if (sampleTabBtn) {
      sampleTabBtn.click();
    }

    // Turn icon along the question to a solved tick mark & persist progress
    solvedProblems.add(prob.id);
    saveSolvedProgress();
    renderProblemNavList();

    // Trigger rich celebration confetti fireworks
    triggerConfetti();
  } else {
    summaryCard.className = "summary-card fail";
    summaryTitle.textContent = "You are close. Keep looking.";
    summarySubtitle.textContent = `${passed} of ${total} cases passed (${data.durationMs}ms runtime). Check failed test cases below.`;
    renderDiffSection(failedCases);
    showToast(`${passed}/${total} test cases passed`);

    // First, smoothly nudge scroll down to reveal results
    window.scrollBy({ top: 160, behavior: "smooth" });

    // Then trigger the shake effect & animation right after scrolling settles
    setTimeout(() => {
      triggerLogicMismatchEffect(failedCases);
    }, 380);
  }
}

function renderDiffSection(failedCases) {
  if (!failedCases || failedCases.length === 0) {
    diffDetailsSection.classList.add("hidden");
    return;
  }

  diffDetailsSection.classList.remove("hidden");
  diffDetailsList.innerHTML = failedCases.map(tc => {
    return `
      <div class="diff-item">
        <div class="diff-item-head">
          <span>Input: <strong>${escapeHtml(tc.input.replace(/\n/g, " ↵ "))}</strong></span>
          <span style="color: var(--danger)">${tc.status === "timeout" ? "Timed Out" : tc.status === "error" ? "Runtime Error" : "Output Differs"}</span>
        </div>
        <div class="diff-item-grid">
          <div>
            <p class="diff-box-title">Expected</p>
            <div class="diff-box-val expected">${escapeHtml(tc.expected)}</div>
          </div>
          <div>
            <p class="diff-box-title">Your Output</p>
            <div class="diff-box-val actual">${escapeHtml(tc.actual || "(no output)")}</div>
          </div>
        </div>
        ${tc.error ? `<p style="margin-top: 6px; font-size: 10px; color: var(--danger);">${escapeHtml(tc.error)}</p>` : ""}
      </div>
    `;
  }).join("");
}

// ==========================================
// Rich Celebration Confetti & Fireworks Effect
// ==========================================
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#10b981", "#b4d330", "#38bdf8", "#fbbf24", "#f43f5e", "#a855f7", "#34d399", "#fcd34d"];
  const shapes = ["rect", "star", "dot", "ribbon"];
  const particles = [];

  // Left Cannon (blasts up-right)
  for (let i = 0; i < 75; i++) {
    const angle = -Math.PI / 3 + (Math.random() - 0.5) * 0.7; // ~60 deg upward right
    const speed = Math.random() * 16 + 10;
    particles.push({
      x: 30,
      y: canvas.height - 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      angle3d: Math.random() * Math.PI,
      speed3d: (Math.random() - 0.5) * 0.15,
      alpha: 1,
      decay: Math.random() * 0.008 + 0.006,
      gravity: 0.28,
      friction: 0.985
    });
  }

  // Right Cannon (blasts up-left)
  for (let i = 0; i < 75; i++) {
    const angle = -Math.PI * 2 / 3 + (Math.random() - 0.5) * 0.7; // ~120 deg upward left
    const speed = Math.random() * 16 + 10;
    particles.push({
      x: canvas.width - 30,
      y: canvas.height - 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      angle3d: Math.random() * Math.PI,
      speed3d: (Math.random() - 0.5) * 0.15,
      alpha: 1,
      decay: Math.random() * 0.008 + 0.006,
      gravity: 0.28,
      friction: 0.985
    });
  }

  // Center Starburst Fountain
  for (let i = 0; i < 40; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.4;
    const speed = Math.random() * 14 + 6;
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 150,
      y: canvas.height * 0.5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: "star",
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      angle3d: Math.random() * Math.PI,
      speed3d: (Math.random() - 0.5) * 0.15,
      alpha: 1,
      decay: Math.random() * 0.009 + 0.007,
      gravity: 0.24,
      friction: 0.98
    });
  }

  let animationFrame;
  let tick = 0;

  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    tick += 0.05;

    particles.forEach(p => {
      p.vx *= p.friction;
      p.vy = p.vy * p.friction + p.gravity;
      p.x += p.vx + Math.sin(tick + p.size) * 0.4;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.angle3d += p.speed3d;
      p.alpha -= p.decay;

      if (p.alpha > 0 && p.y < canvas.height + 40) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.scale(Math.cos(p.angle3d), 1);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size * 0.4, p.size, p.size * 0.8);
        } else if (p.shape === "ribbon") {
          ctx.fillRect(-p.size * 0.8, -p.size * 0.25, p.size * 1.6, p.size * 0.5);
        } else if (p.shape === "dot") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "star") {
          ctx.font = `bold ${Math.floor(p.size * 1.6)}px "JetBrains Mono", sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("★", 0, 0);
        }

        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateConfetti();
}

// ==========================================
// Failure Animations (Compiler Error vs. Logic Mismatch)
// ==========================================
function triggerCompilerErrorEffect() {
  // Whole screen shake & crimson flash
  const body = document.body;
  body.classList.remove("screen-error-shake", "screen-crimson-flash");
  void body.offsetWidth; // force browser reflow
  body.classList.add("screen-error-shake", "screen-crimson-flash");
  setTimeout(() => body.classList.remove("screen-error-shake"), 550);
  setTimeout(() => body.classList.remove("screen-crimson-flash"), 900);

  const elements = [
    document.querySelector(".editor-section"),
    document.getElementById("summary-card")
  ];

  elements.forEach(el => {
    if (!el) return;
    el.classList.remove("haptic-shake", "glow-crimson", "logic-mismatch-bounce");
    void el.offsetWidth; // force browser reflow
    el.classList.add("haptic-shake", "glow-crimson");
    setTimeout(() => el.classList.remove("haptic-shake"), 550);
    setTimeout(() => el.classList.remove("glow-crimson"), 1000);
  });

  triggerCompilerEmbers();
}

function triggerLogicMismatchEffect(failedCases) {
  const elements = [
    document.getElementById("summary-card"),
    document.getElementById("card-test-bench")
  ];

  elements.forEach(el => {
    if (!el) return;
    el.classList.remove("haptic-shake", "glow-crimson", "logic-mismatch-bounce");
    void el.offsetWidth; // force browser reflow
    el.classList.add("logic-mismatch-bounce");
    setTimeout(() => el.classList.remove("logic-mismatch-bounce"), 650);
  });

  // Highlight the failed test case rows in the table
  if (failedCases && failedCases.length > 0) {
    failedCases.forEach(tc => {
      const row = document.querySelector(`.testcase-row[data-id="${tc.id}"]`);
      if (row) {
        row.classList.remove("failed-row-highlight");
        void row.offsetWidth;
        row.classList.add("failed-row-highlight");
      }
    });
  }

  triggerLogicSymbols();
}

// 1. Fiery Sparks & Crimson Embers for Compiler Error
function triggerCompilerEmbers() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const runBtn = document.getElementById("btn-run-tests");
  let originX = canvas.width / 2;
  let originY = canvas.height * 0.52;

  if (runBtn) {
    const rect = runBtn.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  const colors = ["#ef4444", "#f87171", "#dc2626", "#ff6b6b", "#ff9f43", "#fda4af"];
  const particles = [];

  for (let i = 0; i < 70; i++) {
    const angle = Math.PI * 1.5 + (Math.random() - 0.5) * 1.8;
    const speed = Math.random() * 9 + 3;
    particles.push({
      x: originX + (Math.random() - 0.5) * 20,
      y: originY + (Math.random() - 0.5) * 10,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
      vy: Math.sin(angle) * speed - Math.random() * 3,
      size: Math.random() * 4.5 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.012,
      friction: 0.96,
      gravity: -0.05
    });
  }

  let animationFrame;
  function updateEmbers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateEmbers);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateEmbers();
}

// 2. Floating Amber Question Marks, Unequal Signs (≠) & Golden Diamonds (◆) for Logic Mismatch
function triggerLogicSymbols() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const testbench = document.getElementById("card-test-bench");
  let originX = canvas.width / 2;
  let originY = canvas.height * 0.65;

  if (testbench) {
    const rect = testbench.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + 80;
  }

  const symbols = ["?", "≠", "◆", "○", "!", "◇"];
  const colors = ["#fbbf24", "#f59e0b", "#fcd34d", "#f97316", "#fed7aa", "#d97706"];
  const particles = [];

  for (let i = 0; i < 45; i++) {
    const angle = (Math.random() - 0.5) * Math.PI * 1.4 - Math.PI / 2;
    const speed = Math.random() * 7 + 2.5;
    particles.push({
      x: originX + (Math.random() - 0.5) * 120,
      y: originY + (Math.random() - 0.5) * 30,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 2,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      fontSize: Math.floor(Math.random() * 10 + 13),
      rotation: (Math.random() - 0.5) * 40,
      rotSpeed: (Math.random() - 0.5) * 4,
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
      gravity: 0.12
    });
  }

  let animationFrame;
  function updateLogicSymbols() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.font = `700 ${p.fontSize}px "JetBrains Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateLogicSymbols);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateLogicSymbols();
}

// ==========================================
// Custom Testcase Runner
// ==========================================
async function runCustomTestcase() {
  const customVal = customInputBox.value;
  if (!customVal.trim()) {
    showToast("Please enter an input value");
    return;
  }

  const sourceCode = getEditorCode().trim();
  if (!sourceCode) {
    showToast("Please enter Java code in the editor");
    return;
  }

  btnRunCustom.disabled = true;
  customResultCard.classList.remove("hidden");
  customResStdout.textContent = "Running...";
  customResExpected.textContent = "Comparing against logic...";
  customResTime.textContent = "";

  try {
    const response = await fetch("./api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sourceCode: sourceCode,
        testCases: [{ id: 999, input: customVal, expected: "" }]
      })
    });

    if (response.ok) {
      const resData = await response.json();
      if (!resData.compileSucceeded) {
        customResStdout.textContent = "Compilation Error";
        customResStatusBanner.className = "custom-status-banner";
        customResStatusBanner.style.backgroundColor = "var(--danger-bg)";
        customResStatusBanner.style.color = "var(--danger)";
        customResStatusBanner.textContent = "Compilation failed. Check logs.";
        return;
      }

      const tcRes = resData.results[0];
      customResStdout.textContent = tcRes.actual || "(no output)";
      customResExpected.textContent = tcRes.error ? "Runtime error" : "Program executed successfully";
      customResTime.textContent = `${tcRes.durationMs}ms`;

      customResStatusBanner.className = "custom-status-banner";
      customResStatusBanner.style.backgroundColor = tcRes.error ? "var(--danger-bg)" : "var(--success-bg)";
      customResStatusBanner.style.color = tcRes.error ? "var(--danger)" : "var(--success)";
      customResStatusBanner.textContent = tcRes.error ? "✗ Runtime Error: " + tcRes.error : "✓ Execution Completed";
    } else {
      const errText = await response.text();
      customResStdout.textContent = "Server Error " + response.status + ": " + errText;
      customResStatusBanner.className = "custom-status-banner";
      customResStatusBanner.style.backgroundColor = "var(--danger-bg)";
      customResStatusBanner.style.color = "var(--danger)";
      customResStatusBanner.textContent = "Server Error";
      return;
    }
  } catch (e) {
    customResStdout.textContent = `Error: ${e.message}`;
  } finally {
    btnRunCustom.disabled = false;
  }
}

// ==========================================
// Utilities
// ==========================================
function setRunningState(running) {
  isRunning = running;
  btnRunTests.disabled = running;
  if (running) {
    runBtnSpinner.classList.remove("hidden");
    document.getElementById("icon-run").classList.add("hidden");
    runBtnText.textContent = "Running tests...";
  } else {
    runBtnSpinner.classList.add("hidden");
    document.getElementById("icon-run").classList.remove("hidden");
    runBtnText.textContent = "Run all tests";
  }
}

function appendLog(msg) {
  if (compilerLogsContent.textContent === "Ready. Click 'Run all tests' to compile and execute." || compilerLogsContent.textContent === "Console cleared.") {
    compilerLogsContent.textContent = msg;
  } else {
    compilerLogsContent.textContent += `\n${msg}`;
  }
  compilerLogsContent.scrollTop = compilerLogsContent.scrollHeight;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
