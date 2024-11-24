#include <iostream>
using namespace std;

void update(int arr[], int n){
    
    cout<<"Inside The Function : ";

    arr[0] = 120;

    for (int i = 0; i < 3; i++)
    {
        cout<<arr[i]<<" ";
    }
    
    cout<<endl<<"Going Back To The Main Function !";
    
}

int main(){
    
    int arr[3] = {1,2,3};
    
    update(arr,3);

    cout<<endl<<"Printing In Main Function : ";
    for (int i = 0; i < 3; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    
return 0;
}