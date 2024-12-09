#include<stdio.h>
//sum Is A Function Which takes a And  b As Input And returns an integer As A output.
int sum(int a, int b);
int main(){
    int c;
    //sum(2 , 5);   // Function Call
    c = sum(2 , 5);
    printf("%d",c);
    return 0;
}
int sum(int a, int b){
    int result;
    result = a + b;
    return result;
}