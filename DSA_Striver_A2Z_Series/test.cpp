#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]); // Correctly get the number of elements in the array
    
    for (int i = 0; i <= n ; i++) {
        swap(arr[i+1], arr[i]);
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    
    return 0;
}
