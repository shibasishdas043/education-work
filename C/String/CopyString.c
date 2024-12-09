#include<stdio.h>
#include<string.h>
int main(){
    char s1[] = "Shibasish Das";

    // char* s2 = s1; // Shalow Copy .
    // s1[0] = 'M';
    // printf("%s",s2);

    //deep copy .
    char s2[] = "Shibasish Das";
    s2[0] = 'M';
    printf("%s",s1);
    printf("%s",s2);

    return 0;
}