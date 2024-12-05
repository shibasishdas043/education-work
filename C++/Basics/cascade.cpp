#include <iostream>
#include <string>
#include <limits>

int main() {
    std::string name;
    int age;

    // Get user input for name
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);

    // Validate user input for age
    while (true) {
        std::cout << "Enter your age: ";
        std::cin >> age;

        if (std::cin.fail() || age < 0) {
            std::cin.clear(); // Clear the error flag
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Ignore invalid input
            std::cout << "Invalid input. Please enter a valid age." << std::endl;
        } else {
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Clear the input buffer
            break;
        }
    }

    // Print greeting
    std::cout << "\nHello, " << name << "!" << std::endl;
    std::cout << "You are " << age << " years old." << std::endl;

    return 0;
}