#include<iostream>
using namespace std;
void fun(int z,int n){
    if(z == n){
        return;
    }
    cout<<z;
    fun(z+1,n);
    
}
int main(){

    int z = 1;
    int n = 5;
    
    fun(z,n);

    return 0;
}