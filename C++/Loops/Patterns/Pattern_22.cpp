/* 
    D 
    C D 
    B C D 
    A B C D 
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
        char ch = 'A' + n - row; // Dry Run Yourself . (Must)
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