#include<stdio.h>
int main(){
    int num1,num2;
    float result;
    char op;
    printf("Enter The 1st Number = ");
    scanf("%d",&num1);
    printf("Enter The 2nd Number = ");
    scanf("%d",&num2);
    printf("Enter The Operation ! = ");
    scanf("%c",&op);
    switch (op)
    {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;break;
    case '/':
        result = num1 / num2;
        break;
    default: printf("Vulnerable !");
        break;
    }
    printf("Result = %.2f",result);
    return 0;
}