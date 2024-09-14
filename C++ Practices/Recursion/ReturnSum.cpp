#include<iostream>
using namespace std;
int sum(int n){
    if(n==0){
        return 0;
    }
    return n+(sum(n-1));
}
int main(){
    int num;
    cout<<"Enter Your Number = ";
    cin>>num;
    cout<<sum(num);
}