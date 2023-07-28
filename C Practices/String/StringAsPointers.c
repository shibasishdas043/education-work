#include<stdio.h>
#include<string.h>
int main(){

    char str[] = "Shibasish Das";
    char* ptr = str; //ptr Now Points To The str[0] .
    // printf("%p \n",&str[0]);
    // printf("%p \n",str);
    int i = 0;
    // while (str[i] != '\0')
    // {
    //     printf("%c",str[i]);
    //     i++;
    // }

    while (*ptr != '\0')
    {
        printf("%c",*ptr);
        ptr++;
        i++;
    }
    return 0;
}