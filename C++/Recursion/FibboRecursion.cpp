#include<iostream>
using namespace std;
int fibbo(int n){
    if (n==1 || n==2)
    {
        return 1;
    }
    return fibbo(n - 1) + fibbo(n - 2);
}
int main(){
    int n;
    cout<<"Enter NumbEr = ";
    cin>>n;
    cout<< fibbo(n);
    return 0;
}