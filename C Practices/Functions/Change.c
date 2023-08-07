#include<stdio.h>
int change(int b);
int main(){
    int b;
    printf("the Value Of b before Change is %d\n",b);
    change(b);
    printf("the Value Of b After Change is %d\n",b);
    return 0;
}
int change(int b){
    b = 80;
    return b;
}
