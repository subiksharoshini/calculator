#include <stdio.h>

int main() {
    char operator;
    double num1, num2, result;

    // Prompt user for input
    printf("Enter an operator (+, -, *, /): ");
    // The space before %c consumes any potential whitespace (like a newline) 
    // left in the input buffer from previous inputs.
    scanf(" %c", &operator); 

    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2); // Use %lf for double data type

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            printf("%.2lf + %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%.2lf - %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%.2lf * %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '/':
            // Check for division by zero
            if (num2 != 0) {
                result = num1 / num2;
                printf("%.2lf / %.2lf = %.2lf\n", num1, num2, result);
            } else {
                printf("Error: Division by zero is not allowed.\n");
            }
            break;
        default:
            // Handles invalid operator input
            printf("Error: Invalid operator entered.\n");
    }

    return 0;
}