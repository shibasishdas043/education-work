// Question - Multiply Two Matrices And Input It From The User .
#include<stdio.h>
int main(){
    //1st Matrix

    int n,m;
    printf("Enter No Of Rows Of 1st Matrix : ");
    scanf("%d",&n);
    printf("Enter No Of Columns Of 1st Matrix : ");
    scanf("%d",&m);
    int a[m][n];
    printf("Enter The Number Of Elements !");
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            scanf("%d",&a[i][j]);
        }
        
    }
    //2nd Matrix

    int p,q;
    printf("Enter No Of Rows Of 2nd Matrix : ");
    scanf("%d",&p);
    printf("Enter No Of Columns Of 2nd Matrix : ");
    scanf("%d",&q);
    int b[p][q];
    printf("Enter The Number Of Elements !");
    for (int i = 0; i < p; i++)
    {
        for (int j = 0; j < q; j++)
        {
            scanf("%d",&b[i][j]);
        }
        
    }
    //The Matrices Can't Be Multiplied .... Check
    if (n != p)
    {
        printf("The Matrices Can't Be Multiplied !");
    }
    else
    {
        //Multiplication
        int res[m][q];
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < q; j++)
            {
                res[i] [j] = 0;
                // i row of a matrix , j row of b matrix .
                for (int k = 0; k < n; k++)
                {
                    res[i][j] += a[i][k] * b[k][j];
                }
                
            }
            
        }
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < q; j++)
            {
                printf("%d ",res[i][j]);
            }
            printf("\n");
            
        }
        
    }
    return 0;
}