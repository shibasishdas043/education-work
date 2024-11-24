#include<iostream>
using namespace std;
void swap(int *a,int *b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
    

}
int main(){
    int a = 12,b = 14;
    int *p = &a,*q = &b;

    
    swap(p,q);
    cout<<"Its a = "<<*p<<endl<<"Its b = "<<*q;
   


    return 0;
}