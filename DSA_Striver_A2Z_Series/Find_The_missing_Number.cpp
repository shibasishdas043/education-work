#include <iostream>
#include <vector>
#include <algorithm> // for std::find

using namespace std;

int main(){
    vector<int> a = {1, 2, 3, 4, 5,6,7,8,9,10};
    vector<int> num = {1, 2, 3, 0, 5,6,7,8,9,10};

    // Iterate over each element in num
    for (int i = 1; i <= num.size(); i++) {
        // Check if the element is present in a
        // if (find(a.begin(), a.end(), num[i]) == a.end()) 
        // {
        //     // If not found in a, add it to b
        //     b.push_back(num[i]);
        // }
        int flag = 0;
        for (int j = 0; j < num.size()-1; j++)
        {
            if (a[i] == num[j])
            {
                flag = 1;
                break;
            }
            if (flag == 0)
            {
                return i;
            }
            
        }
        
    }

    // Output the result


    return 0;
}
