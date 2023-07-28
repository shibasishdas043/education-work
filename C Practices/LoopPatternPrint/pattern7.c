#include<stdio.h>                
//   1 2 3 4
// 1 1
// 2 1 3
// 3 1 3 5
// 4 1 3 5 7                                            
int main(){
    int n;
    printf("Emter Your Row Number = ");
    scanf("%d",&n);
    
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <=i; j++)
        {
            printf("%d",j);
        }
        printf("\n");
    }
    return 0;
}