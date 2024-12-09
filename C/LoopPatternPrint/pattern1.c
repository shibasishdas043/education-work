#include<stdio.h>
int main(){
    int i,j,n;
    for ( i = 1; i <= 4; i++)
    {
        for ( j = 3; j >= i-1; j--)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}