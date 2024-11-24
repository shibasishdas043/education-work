/*
   1
   2 3
   3 4 5
   4 5 6 7
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter your Number : ";
    cin>>n;
    int count;
    int row = 1;
    while (row<=n)
    {
        count = row;
        int col = 1;
        while (col<=row)
        {
            cout << count << " ";
            count++;
            col++;
        }
        cout<<endl;

        row++;
    }
    return 0;
}