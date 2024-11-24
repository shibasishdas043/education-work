#include<iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){

    vector<int> b ;
    vector<int> a ;
    a.push_back(1);
    a.push_back(2);
    a.push_back(3);
    next_permutation(a.begin(),a.end());
    b.push_back(a);
    next_permutation(a.begin(),a.end());
    next_permutation(a.begin(),a.end());
    next_permutation(a.begin(),a.end());
    next_permutation(a.begin(),a.end());
    next_permutation(a.begin(),a.end());
    for (int i = 0; i < a.size(); i++)
    {
        cout<<a[i];
    }
    
    return 0;
}