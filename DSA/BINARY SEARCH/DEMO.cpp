#include <iostream>
#include <stdlib.h>
using namespace std;

void search(int arr[], int size, int low, int high, int keyToFind)
{

    while (low <= high)
    {
        int mid = (low + high) / 2;

        if (keyToFind == arr[mid])
        {
            cout << "The Key Is : " << arr[mid];
        }

        else if (keyToFind < arr[mid])
        {
            high = mid - 1;
        }

        else
        {
            low = mid + 1;
        }
    }
}

int main()
{

    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int size = sizeof(arr) / sizeof(arr[0]);

    int keyToFind = 8;

    int low = arr[0];
    int high = size - 1;

    int print = search(arr, size, low, high, keyToFind);

    cout << "The Value : " << printf;

    return 0;
}