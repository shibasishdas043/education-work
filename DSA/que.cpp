#include <iostream>
using namespace std;

#define MAX_SIZE 3
int queue[MAX_SIZE];
int front = -1, rear = -1;

int main() {
    int choice, item;
    cout << "To Enter The Program Press 1: ";
    cin >> choice;

    if (choice != 1) {
        cout << "Program exited!" << endl;
        return 0;
    }

    while (true) {
        cout << "1: Enqueue  2: Dequeue  3: Display  4: Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                if (rear == MAX_SIZE - 1) {
                    cout << "Queue Overflow! Cannot enqueue more items." << endl;
                } else {
                    cout << "Enter the element to enqueue: ";
                    cin >> item;
                    if (front == -1) {
                        front = 0;
                    }
                    rear++;
                    queue[rear] = item;
                    cout << "Item inserted: " << item << endl;
                }
                break;

            case 2:
                if (front == -1) {
                    cout << "Queue Underflow! Cannot dequeue from an empty queue." << endl;
                } else {
                    item = queue[front];
                    cout << "Item dequeued: " << item << endl;
                    if (front == rear) {
                        front = rear = -1; // Queue becomes empty
                    } else {
                        front++;
                    }
                }
                break;

            case 3: if (front == -1) {
                    cout << "Queue is Empty" << endl;
                    } else {
                        cout << "Queue Elements: ";
                        for (int i = front; i <= rear; i++) {
                            cout << queue[i] << " ";
                        }
                    cout << endl;
                    }
                    break;

            case 4:
                cout << "Exiting the program..." << endl;
                return 0;

            default:
                cout << "Invalid choice! Please enter a valid option." << endl;
                break;
        }
    }

    return 0;
}














