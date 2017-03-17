import sys

def printName(name):
    print name
    print 1/0
    return

def main():
	num_of_args = len(sys.argv)
	params = [None] * (num_of_args -1)
	for i in range(1,num_of_args):
		params[i-1]=sys.argv[i]
	printName(str(params[0]))

if __name__ == "__main__":
	main()