//Wave Printing .
#include<stdio.h>
int main(){
    int m,n;
    printf("Enter No Of Rows Of 1st Matrix : ");
    scanf("%d",&m);
    printf("Enter No Of Columns Of 1st Matrix : ");
    scanf("%d",&n);
    int a[m][n];
    printf("Enter The Number Of Elements !");
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            scanf("%d",&a[i][j]);
        }
        
    }
    
    //Wave print 
    for (int i = 0; i < m; i++)
    {
        if (i % 2 == 0)
        {
            for (int j = 0; j < n; j++)
            {
                printf("%d ",a[i][j]);
            }
            
        }
        else
        {
            for (int j = n - 1; j>= 0; j--)
            {
                printf("%d ",a[i][j]);
            }
            
        }
        printf("\n");
    }
    return 0;
}    