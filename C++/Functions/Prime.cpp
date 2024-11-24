#include <iostream>
using namespace std;
/*1 --> Prime No*/
/*0 --> Not A Prime No*/

bool isPrime(int n){
    for (int i = 2; i <= n-1; i++)
    {
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}

int main(){
    int n ;
    cin>>n;
    if (isPrime(n))
    {
        cout<<"Its A Prime Number !";
    }
    else
    {
        cout<<"Not A Prime Number !";
    }

    return 0;
}