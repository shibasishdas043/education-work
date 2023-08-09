// C++ program to demonstrate
// Function Derived Type

#include <iostream>
using namespace std;

// max here is a function derived type
int max(int x, int y)
{
	if (x > y)
		return x;
	else
		return y;
}

// main is the default function derived type
int main()
{
	int a = 10, b = 20;

	// Calling above function to
	// find max of 'a' and 'b'
	int m = max(a, b);

	cout << "m is " << m;
	return 0;
}
