#include <iostream>
using namespace std;
int main(){

    int n;
    cout << "Enter The Value Of n : ";
    cin >> n;

    bool isPrime = 0; 

    for (int i = 2; i <= n ; i++)
    {
        if (n % i != 0) 
        {
            isPrime = 0;
            cout<< " Not A Prime Number !"<<endl;
            break;
        }
        
    }

    if (isPrime == 0)
    {
        cout<< " Not a Prime Number !" << endl;
    }
    else
    {
        cout<< " It's a Prime Number !" << endl;
    }
    
    return 0;
}