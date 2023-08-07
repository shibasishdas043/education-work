#include <stdio.h>

void goodmorning();
void goodafternoon();
void goodnight();

int main() {
    
    goodmorning();

    return 0;
}

void goodmorning() {
    printf("Good Morning\n");
    goodafternoon();//Function call Inside Another Finction Defination .
}

void goodafternoon() {
    printf("Good Afternoon\n");
    goodnight();//Function call Inside Another Finction Defination .
}

void goodnight() {
    printf("Good Night\n");
}
