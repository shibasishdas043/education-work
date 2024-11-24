#include <iostream>
using namespace std;

bool search(int arr[],int size, int key){

    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
        {
            return 1;
        }
        
    }
    return 0;

}
int main(){

    int arr[10] = {1,2,3,-22,-44,5,7,-8,9,10};

    cout<<"Enter The Key : ";

    int key;

    cin>>key;

    bool found = search(arr, 10, key);

    if (found)
    {
        cout<<"Key Is Present ! "<<endl;
    }
    else
    {
        cout<<"The Key Is Absent ! "<<endl;
    }

return 0;
}