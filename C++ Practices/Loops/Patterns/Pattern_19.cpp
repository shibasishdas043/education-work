/*
   A 
   B B 
   C C C 
   D D D D 
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter your Number : ";
    cin>>n;
    int row = 1;
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
        {
            char ch = 'A' + row - 1; //  Dry Run Yourself .
            cout << ch << " ";
            col++;
        }
        cout<<endl;
        row++;
    }
    return 0;
}