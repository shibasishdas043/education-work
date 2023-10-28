#include<stdio.h>
int main(){

    int row = 5;
    int column = 5;

    for (int i = 1; i <= row; i++)
    {
        for (int j = i; j <= column; j++)
        {
            printf("%d ",j);
        }
        printf("\n");
    }
    

    return 0;
}