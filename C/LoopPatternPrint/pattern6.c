#include<stdio.h>
int main(){
    int n;
    printf("Enter Your Row Number = ");
    scanf("%d",&n);
    int a=1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d",j+n-i);
        }
        printf("\n");
    }
    return 0;
}
