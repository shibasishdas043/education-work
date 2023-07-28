#include<stdio.h>
#include<string.h>
int main(){
    char str[40];
    puts("Enter a String");
    gets(str);
    puts("The Reverse Is");
    int size = 0;
    int i = 0;
    while (str[i] != '\0')
    {
        size++;
        i++;
    }
    printf("The Size Is = %d \n",size);
    for (int i = 0, j=size-1; i <= j; i++,j--)
    {
        char temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    puts("Ther Reverse String Is");
    puts(str);
    return 0;
}
