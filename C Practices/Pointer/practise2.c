#include<stdio.h>
int main(){
    int a=8;
    int *x=&a;
    printf("%d ",*x);
    printf("\n%p",*x);
    printf("\n%d ",&*x);
    printf("\n%p",&*x);

}