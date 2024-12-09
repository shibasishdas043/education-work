//Inserting a charachter into a string .
#include<stdio.h>
#include<string.h>
int main(){
    char str[20] = "shibasish";
    printf("%s",str);
    for (int i = 8; i >= 4; i--)
    {
        str[i+1] = str[i];
    }
    str[4] = 'D';
    printf("\n%s",str);
    return 0;
}