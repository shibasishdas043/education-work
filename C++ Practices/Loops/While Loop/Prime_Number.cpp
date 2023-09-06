#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter yor Number : ";
    cin>>n;
    int i = 2;
    while (i < n)
    {
        if (n % i != 0)
        {
            cout<< "It's A Prime Number : "<<i<<endl;
        }
        else
        {
            cout<<"It's Not A Prime Number : "<<i<<endl;
        }
        
        i++;
    }
    return 0;
}