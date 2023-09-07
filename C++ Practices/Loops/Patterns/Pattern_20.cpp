/*  
    A
    B C
    D E F
    G H I J
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter your Number : ";
    cin>>n;
    char ch = 'A';
    int row = 1;
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
        {
            cout << ch << " ";
            ch++;
            col++;
        }
        cout<<endl;
        row++;
    }
    return 0;
}