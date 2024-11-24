#Inter Section And Union In Sets
set1 = {1,2,3,4,5,6,8}
set2 = {1,2,3,4,5,6,7,8,9,10}
print(set1.union(set2))
print(set1.intersection(set2))
print({1,3}.issubset(set1))
print({10,30}.issubset(set1))
print({10,30}.issubset(set2))
print({1,3}.issubset(set2))

