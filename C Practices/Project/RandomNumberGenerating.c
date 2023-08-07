#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){
    int number;
    srand(time(0));
    number = rand() % 100 + 1;// Generates A Random Number Between 1 to 100.
    printf("The Number Is :%d",number);
    return 0;
}