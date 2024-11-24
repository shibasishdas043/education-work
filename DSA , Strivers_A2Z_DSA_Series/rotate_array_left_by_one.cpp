#include <iostream>
using namespace std;

//{1,2,3,4,5}
//{2,3,4,5,1}

int main() {
    int nth;
    cout<<"Enter Nth = ";
    cin>>nth;
    int arrsize;
    cout<<"Enter Arr Size = ";
    cin>>arrsize;
    int arr[arrsize];
    for (int i = 0; i < arrsize; i++)
    {
        cin>>arr[i];
    }
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = arr[0];
    for (int i = 1; i < n ; i++) {
        
        arr[i-] = arr[i];

        if (arr[i] == arr[4])
        {
            arr[4] = k;
        }
        
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    
    return 0;
}
