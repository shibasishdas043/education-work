#include<iostream>
#include<math.h>
using namespace std;
int main(){
    int x,temp;
    cout<<"Enter Number X = ";
    cin>>x;
    temp = x;
    if(1<x)
    {
        if (x%temp==0)
        {
            cout<<"Its A Prime Number !";
        }
        
    }
    else{
        cout<<"Its Not Pime Number";
    }

    return 0;
}