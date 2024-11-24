#include<iostream>
using namespace std;
int facto(int n){
    if(n==1){
        return 1;
    }
    return n*(facto(n-1));
}
int main(){
    int num;
    cout<<"Enter Your Number = ";
    cin>>num;
    cout<<facto(num);
    return 0;
}