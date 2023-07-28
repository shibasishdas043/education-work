#include<stdio.h>
int main(){
    int c=3;
    switch (c)
    {
    case '3':
        printf("you never win the silver prize\n");
        break;
    case 3:
        printf("You always loose the gold prize\n");
        break;
    default:
        printf("Of course provided you win a prize\n");
        
    }
    return 0;
}