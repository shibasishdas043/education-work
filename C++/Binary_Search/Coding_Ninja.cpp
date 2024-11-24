/*
   First And Last position Of An Element in Sorted Array . (Coding Ninjas)
*/
#include<iostream>
using namespace std;
int firstOccurence(int arr[],int size,int key){
    int start=0, end=size-1;
    int mid=(start+end)/2;
    int ans = -1;
    while (start <= end)
    {
        if (arr[mid] == key)
        {
            ans = mid;
            end = mid-1;
        }
        else if (arr[mid] < key)
        {
            start= mid+1;
        }
        else{
            arr[mid] > key;
            end = mid-1;
        }
        mid=(start+end)/2;
    }
    return ans;
}
int lastOccurence(int arr[],int size,int key){
    int start=0, end=size-1;
    int mid=(start+end)/2;
    int ans = -1;
    while (start <= end)
    {
        if (arr[mid] == key)
        {
            ans = mid;
            start = mid+1;
        }
        else if (arr[mid] < key)
        {
            start= mid+1;
        }
        else{
            arr[mid] > key;
            end = mid-1;
        }
        mid=(start+end)/2;
    }
    return ans;
}
int main(){
    int even[10]={1,2,3,33,3,3,3,3,3,5};
    cout<< "First Occurence Of 3 Is : "<<firstOccurence(even,10,3);
    cout<<endl<< "Last Occurence Of 3 Is : "<< lastOccurence(even,10,3);
    return 0;
}