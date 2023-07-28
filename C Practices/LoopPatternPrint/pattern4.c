#include<stdio.h>
int main(){
    int n=4;
    for (int i = 1; i <= n; i++)
    {
        // int a=1;
        for (int j = 1; j <= n; j++)
        {
            int a=1;
            int d= a + 64;
            char ch=(char)d;
            printf("%c",ch);
        }
        printf("\n");
    }
    return 0;
}