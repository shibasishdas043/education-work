
list=["a","b","c","d","e","f","g","h"]
print(len(list))#length

temp=list[0]
list[0]=list[7]
list[7]=temp

print(list)
list.append("Gandu")#insert In Last In List
print(list)