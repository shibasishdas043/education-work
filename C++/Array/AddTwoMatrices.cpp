#include<iostream>
using namespace std;
int main(){
    int r1,c1;
    cout<<"Enter First Array Row Size = ";
    cin>>r1;
    cout<<"Enter First Array Colomn Size = ";
    cin>>c1;
    int arr[r1][c1];
    
    for (int i = 0; i < r1; i++)
    {
        for (int j = 0; j < c1; j++)
        {
            cin>>arr[i][j];
        }
        
    }

    int r2,c2;
    cout<<"Enter Second Array Row Size = ";    
    cin>>r2;
    cout<<"Enter Second Array Colomn Size = ";
    cin>>c2;
    int brr[r2][c2];
    
    for (int i = 0; i < r2; i++)
    {
        for (int j = 0; j < c2; j++)
        {
            cin>>brr[i][j];
        }
        
    }
    int res[r1][c2];
    if (c1==r2)
    {
        for (int i = 0; i < c1; i++)
        {
            for (int j = 0; j < r2; j++)
            {
                res[i][j] = arr[i][j] + brr[i][j];
            }     
        } 
    }
    for (int i = 0; i < r1; i++)
    {
        for (int j = 0; j < c2; j++)
        {
            cout<<" "<<res[i][j];
        }
        cout<<endl;
    }
    
    

    
    


    return 0;
}