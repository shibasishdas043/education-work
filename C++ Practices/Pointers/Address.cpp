#include<iostream>
using namespace std;
void swap(int* a,int* b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

int main(){
    int x = 10,y = 20;
    cout<< x <<" "<< y;
    swap(&x,&y);
    cout<<endl<< x <<" "<< y ;

    return 0;
}