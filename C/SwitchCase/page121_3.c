#include<stdio.h>
int main(){
    int i=3;
    switch (i)
    {
    case 0:
        printf("Customers are dicey\n");
    case 1+2:
        printf("Markets are pricey\n");
    case 4/2:
        printf("Investors are moody\n");
    }
    return 0;
}