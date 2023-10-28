#include<stdio.h>
int main(){

    int row = 5;
    int column = 5;

    for (int i = row; i >= 1; i--)
    {
        for (int j = 5; j >= i; j--)
        {
            printf("%d ",j);
        }
        printf("\n");
    }
    

    return 0;
}