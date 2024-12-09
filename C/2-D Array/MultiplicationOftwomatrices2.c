// Home Work Make a code to input a matrices from user and multiply it and print the output .
#include <stdio.h>

int main() {

    int r1, c1;
    
    printf("Enter Row Number Of First matrix: ");
    scanf("%d", &r1);
    
    printf("Enter Column Number Of First matrix: ");
    scanf("%d", &c1);
    
    int arr[r1][c1];
    
    printf("Enter All The Elements Of First Matrix:\n");
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c1; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    
    int r2, c2;
    
    printf("Enter Row Number Of Second matrix: ");
    scanf("%d", &r2);
    
    printf("Enter Column Number Of Second matrix: ");
    scanf("%d", &c2);
    
    int brr[r2][c2];
    
    printf("Enter All The Elements Of Second Matrix:\n");
    for (int i = 0; i < r2; i++) {
        for (int j = 0; j < c2; j++) {
            scanf("%d", &brr[i][j]);
        }
    }
    
    int cr;
    
    printf("Enter Row Number Of First Matrix:\nEnter The Column Number Of Second Matrix Which Must Be The Same Number: ");
    scanf("%d", &cr);
    
    if (c1 != r2) {
        printf("Matrix multiplication is not possible!\n");
        return 1;
    }
    
    int res[r1][c2];
    
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            res[i][j] = 0; // Initialize the result cell to 0
            for (int k = 0; k < cr; k++) {
                res[i][j] += arr[i][k] * brr[k][j]; // Accumulate the product
            }
        }
    }
    
    printf("Resultant Matrix:\n");
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            printf("%d ", res[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}
