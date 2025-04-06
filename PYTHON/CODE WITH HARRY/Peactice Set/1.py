import os

# Define the directory path
directory_path = '.'

# Get the list of files and directories
contents = os.listdir(directory_path)

# Print the contents
for item in contents:
    print(item)
