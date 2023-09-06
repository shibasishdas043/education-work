/*
   1
   2 1
   3 2 1
   4 3 2 1
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter your Number : ";
    cin>>n;
    // int count;
    int row = 1;
    while (row<=n)
    {
        // count = row;
        
        int col = 1;
        while (col<=row)
        {
            cout << (row-col+1) << " ";
            // count++;
            col++;
        }
        cout<<endl;

        row++;
    }
    return 0;
}