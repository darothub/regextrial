import re
def getData():
    openFile = open("file.txt", 'r')
    phoneNumber = []
    token = []
    address = []
    if openFile.mode == 'r':
        patternNumber = r"\+?\d{11,13}"
        patternToken = r"\b\w{6}$"
        patternAddress = r"(\d+\s)(\w+\s\w+,\s\w+.)"
        content = openFile.read()
        phoneNumber = re.findall(patternNumber, content)
        token = re.findall(patternToken, content, re.M)
        address = re.findall(patternAddress, content)
        print(
            f"Phone:{phoneNumber}\ntoken:{token}\naddress:{address}")


getData()
# def findToken():
#     openFile = open("file.txt", 'r')
#     if openFile.mode == 'r':
#         pattern = re.compile(r"\b[0-9a-f]{6}\b")
#         # pattern = "\b[token is\s]?(\w{6})$"
#         content = openFile.read()
#         find = pattern.findall(content)
#         print(find)

#(\b[0-9a-fA-F]{6}\b)

# def findAddress():
#     openFile = open("file.txt", 'r')
#     if openFile.mode == 'r':
#         pattern = "(\d+\s)(\w+\s\w+,\s\w+.)"
#         # pattern = "\b[token is\s]?(\w{6})$"
#         content = openFile.read()
#         find = re.findall(pattern, content)
#         print(find)
# phoneNumber()
# findToken()
# findAddress()
#(\d\s)(\w+\s\w+,\s\w+.)
